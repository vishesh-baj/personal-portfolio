import React from "react";

const ThemeButton = ({ background, tooltip }) => {
  return (
    <div
      className="tooltip tooltip-bottom  hover:bg-transparent"
      data-tip={tooltip}
    >
      <h2
        className={`btn btn-sm  btn-circle cursor-pointer  ${background}`}
      ></h2>
    </div>
  );
};

export default ThemeButton;
