import React from "react";

function Skills({ name, Icon }) {
  return (
    <div className="flex flex-col justify-center m-5 items-center space-x-3 bg-gray-100/90 shadow-lg w-[150px] h-[150px] p-5 px-4 hover:drop-shadow-xl hover:scale-105">
      <Icon className="text-4xl text-blue-500 mb-5 text-center" />
      <span className="text-xl font-semibold text-gray-700 text-center">{name}</span>
    </div>
  );
}

export default Skills;
