import React from "react";

const Modal = () => {
  return (
    <div className="block text-center mt-5">
      <label
        htmlFor="my-modal-6"
        className="btn btn-error text-white modal-button"
      >
        Add a Task
      </label>
      <button className="btn text-white text-center ml-4">Clear all</button>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
