import React from "react";

const Toast = ({ toast }) => {
  return (
    <div>
      {toast[0] && (
        <div className="toast toast-bottom toast-start z-50">
          <div className={`alert alert-${toast[2]}`}>
            <div className="text-white">
              <span>{toast[1]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toast;
