import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Modal from "../Modal/Modal";
import Toast from "../Toast/Toast";

const Task = () => {
  const [progressbar, setProgressbar] = useState(0);
  const handleProgressbar = (progress) => {
    setProgressbar(progressbar + progress);
    console.log(progress);
  };

  const [toast, setToast] = useState([false, ""]);
  const clearToast = () => {
    setTimeout(() => {
      setToast([false, ""]);
    }, 2500);
  };

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const handleAddTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
      setToast([true, "Task Added Successfully!", "success"]);
      clearToast();
    } else {
      setToast([true, "Please Add a Task!", "error"]);
      clearToast();
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleClearTasks = () => {
    if (tasks.length) {
      setTasks([]);
      setToast([true, "Task cleared", "success"]);
      clearToast();
    } else {
      setToast([true, "No Task to Clear", "success"]);
      clearToast();
    }
    localStorage.clear();
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="collapse  mx-6 lg:mx-0 xl:mx-0 2xl:mx-0 md:mx-0 rounded-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-200 text-gray-600 font-semibold text-xl">
          Task Lists
          <span className="indicator-item badge badge-error text-white">
            {tasks?.length || 0}
          </span>
        </div>
        <div className="collapse-content bg-gray-100 peer-checked:pt-3 text-primary-content">
          <progress
            className="progress progress-error  w-full"
            value={`${(progressbar / tasks?.length) * 100}`}
            max="100"
          ></progress>
          {!tasks?.length ? (
            <p className="text-gray-400 text-center mt-2">No tasks to show</p>
          ) : (
            false
          )}
          {tasks?.map((task, i) => {
            return (
              <Checkbox key={i} id={i} handleProgressbar={handleProgressbar}>
                {task}
              </Checkbox>
            );
          })}
        </div>
      </div>
      <Modal
        handleAddTask={handleAddTask}
        handleClearTasks={handleClearTasks}
      ></Modal>
      <Toast toast={toast}></Toast>
    </div>
  );
};

export default Task;
