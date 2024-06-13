import React from "react";
import { Helmet } from "react-helmet";

function GameOver({ handlerRestart, score }) {
  return (
    <>
      <Helmet>
        <meta name="description" />
        <title>Snake Game - GameOver</title>
      </Helmet>
      <div className="flex justify-center items-center rounded-xl flex-col gap-20 h-96 w-96 border-2 border-black bg-orange-500">
        <div className="text-center text-5xl font-extrabold">GAME OVER</div>
        <div className="text-center text-2xl font-semibold">SCORE :{score}</div>
        <button
          type="reset"
          onClick={handlerRestart}
          className="bg-red-700 hover:scale-125 active:scale-75 text-center text-2xl rounded-lg border-2 border-black w-32 font-medium"
        >
          RESTART
        </button>
      </div>
    </>
  );
}
export default GameOver;
