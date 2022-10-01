import React, { useState } from "react";

const Checkbox = ({ children, checked, handleProgressbar }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const classNames = isChecked
    ? "label-text text-lg line-through"
    : "label-text text-lg";
  return (
    <div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className={classNames}>{children}</span>
          <input
            type="checkbox"
            checked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
              isChecked ? handleProgressbar(-1) : handleProgressbar(1);
            }}
            className="checkbox "
          />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
