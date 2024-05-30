import React from "react";

const Button = (props) => {
  const { children, color = "bg-gray-900 hover:bg-gray-400 text-white" } = props;
  return (
    <div>
      <button className={`${color} font-bold py-2 px-4 rounded transition duration-300 ease-in-out`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
