import React from "react";
import Sn from "../assets/SN-removebg.png";
const Landing = ({ handlerChange }) => {
  return (
    <>
      <div className="flex justify-center sm:bg-red-950 items-center bg-[url('./assets/checkered_grass.jpg')] bg-center bg-cover">
        <div className="flex justify-center items-center gap-48 flex-col h-screen w-full backdrop-filter backdrop-blur-sm backdrop-opacity-45">
          <div className="text-center text-7xl sm:text-9xl h-34 w-auto font-bold bg-gradient-to-tr from-green-800 from-20% via-green-900   to-green-9500 bg-clip-text text-transparent">
            SNAKE GAME
            <img
              src={Sn}
              className="w-[90%] sm:w-3/5 sm:absolute sm:top-24 sm:right-48  "
            />
          </div>
          <button
            type="button"
            onClick={handlerChange}
            className="text-center p-2 text-5xl m-5 w-40 h-20 border-4 rounded-3xl border-black bg-gradient-to-t from-green-200 via-green-300 to-green-400 animate-bounce hover:scale-110 hover:animate-none active:scale-100"
          >
            PLAY
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
