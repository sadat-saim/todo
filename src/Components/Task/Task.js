import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

const Task = () => {
  const tasks = ["Eat", "Sleep", "Code", "Repeat"];
  const [progressbar, setProgressbar] = useState(0);
  const handleProgressbar = (progress) => {
    setProgressbar(progressbar + progress);
    console.log(progress);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="collapse  mx-6 lg:mx-0 xl:mx-0 2xl:mx-0 md:mx-0 rounded-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-200 text-gray-600 font-semibold text-xl">
          Task Lists
        </div>
        <div className="collapse-content bg-gray-100 peer-checked:pt-3 text-primary-content">
          <progress
            className="progress progress-error  w-full"
            value={(progressbar / tasks.length) * 100}
            max="100"
          ></progress>
          {tasks.map((task, i) => {
            return (
              <Checkbox
                key={i}
                checked={false}
                handleProgressbar={handleProgressbar}
              >
                {task}
              </Checkbox>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
