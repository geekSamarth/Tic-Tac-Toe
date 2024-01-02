import React from "react";

const Square = (props) => {
  return (
    <div className="border-black border-2 w-20 h-20 flex justify-center items-center font-bold text-3xl " onClick={props.onClick}>{props.value}</div>
  );
};

export default Square;
