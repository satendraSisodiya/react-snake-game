import React from "react";

const Food = ({ foodPosition, snake }) => {
  const style = {
    top: `${foodPosition.y}%`,
    left: `${foodPosition.x}%`,
  };
  return (
    <div
      className="absolute text-center font-bold w-6 h-6 bg-red-700 text-white "
      style={style}
    >
      {" "}
      {snake.length}{" "}
    </div>
  );
};
export default Food;
