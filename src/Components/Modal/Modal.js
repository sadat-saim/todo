import React, { useState } from "react";

const Modal = ({ handleAddTask, handleClearTasks }) => {
  const [task, setTask] = useState("");
  const handleInputChange = (txt) => {
    setTask(txt);
  };
  return (
    <div className="block text-center mt-5">
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <label
          htmlFor="my-modal-6"
          className="btn btn-error text-white modal-button"
        >
          Add a Task
        </label>
        <button
          className="btn text-white text-center ml-4"
          onClick={handleClearTasks}
        >
          Clear all
        </button>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add a new task</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mt-3 w-full max-w-xs"
            value={task}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
          <div className="modal-action text-center">
            <label
              htmlFor="my-modal-6"
              className="btn btn-error text-white mx-auto"
              onClick={() => {
                handleAddTask(task);
                setTask("");
              }}
            >
              Add
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
