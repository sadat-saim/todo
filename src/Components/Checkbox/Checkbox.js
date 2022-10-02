import React, { useState } from "react";

const Checkbox = ({ children, checked, handleProgressbar, id }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const localData = JSON.parse(localStorage.getItem(`isChecked${id}`))
    ? JSON.parse(localStorage.getItem(`isChecked${id}`))
    : [id, false];
  console.log(localData);
  const classNames =
    isChecked || (id === localData[0] && localData[1])
      ? "label-text text-lg line-through"
      : "label-text text-lg";
  return (
    <div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className={classNames}>{children}</span>
          <input
            type="checkbox"
            checked={localData[1] ? localData[1] : isChecked}
            onClick={() => {
              isChecked
                ? localStorage.setItem(
                    `isChecked${id}`,
                    `[${id}, ${!isChecked}]`
                  )
                : localStorage.setItem(
                    `isChecked${id}`,
                    `[${id}, ${!isChecked}]`
                  );
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
