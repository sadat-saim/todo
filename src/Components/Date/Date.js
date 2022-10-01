import React from "react";

const Date = () => {
  return (
    <div className="container mx-auto mt-5 px-6 lg:px-0 xl:px-0 2xl:px-0 md:px-0">
      <h2 className="font-bold text-xl">
        {new window.Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h2>
      <p className="">Your task for the day</p>
    </div>
  );
};

export default Date;
