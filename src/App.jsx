import { useState, useEffect, useRef } from "react";
import Snake from "./Components/Snake.jsx";
import Food from "./Components/Food.jsx";
import Landing from "./Components/landing.jsx";
import GameOver from "./Components/GameOver.jsx";
import Button from "./Components/Button.jsx";
import { Helmet } from "react-helmet";
// Function to generate a random cell position for the food
const generateRandomCell = () => {
  const pos = { x: 0, y: 0 };
  const x = Math.floor(Math.random() * 70);
  const y = Math.floor(Math.random() * 70);
  pos.x = x - (x % 4);
  pos.y = y - (y % 4);
  return pos;
};
// Initial state of the game
const intialState = {
  snake: [
    { x: 0, y: 8 },
    { x: 4, y: 8 },
    { x: 8, y: 8 },
  ],
  speed: 150,
  direction: "Arrowright",
  mode: "landing",
};

const App = () => {
  // State variables
  const [snake, setSnake] = useState(intialState.snake);
  const [direction, setDirection] = useState(intialState.direction);
  const [speed, setSpeed] = useState(intialState.speed);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [foodPosition, setFoodPosition] = useState(generateRandomCell);
  const [mode, setMode] = useState(intialState.mode);
  const [click, setClick] = useState(false);
  const playGround = useRef();
  // Effect hook to handle the game loop and collisions
  useEffect(() => {
    if (!started) return;
    // Check for collisions
    const hasCollision = snake.slice(0, -3).some((segment) => {
      const head = snake[snake.length - 1];
      return segment.x === head.x && segment.y === head.y;
    });
    const head = snake[snake.length - 1];
    if (
      head.x <= -4 ||
      head.x >= 100 ||
      head.y <= -4 ||
      head.y >= 100 ||
      hasCollision
    ) {
      setGameOver(true);
      setStarted(false);
      return;
    }
    const interval = setInterval(move, speed);

    return () => clearInterval(interval);
  });
  // Function to move the snake
  const move = () => {
    const temporarySnake = [...snake];
    let x = temporarySnake[temporarySnake.length - 1].x;
    let y = temporarySnake[temporarySnake.length - 1].y;
    switch (direction) {
      case "ArrowRight":
        x += 4;
        break;
      case "ArrowLeft":
        x -= 4;
        break;
      case "ArrowUp":
        y -= 4;
        break;
      case "ArrowDown":
        y += 4;
        break;
      default:
        break;
    }
    temporarySnake.push({ x, y });
    if (x === foodPosition.x && y === foodPosition.y) {
      setFoodPosition(generateRandomCell());
    } else {
      temporarySnake.shift();
    }
    setSnake(temporarySnake);
  };
  // Handler to start the game
  const handlerStart = () => {
    setMode("game");
    setStarted(true);
  };
  // Handler for key press events to change direction
  const handleKeyPress = (e) => {
    const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (arrowKeys.includes(e.key)) {
      setDirection(e.key);
    }
  };
  // Handler to restart the game
  const handlerRestart = () => {
    setSnake(intialState.snake);
    setDirection(intialState.direction);
    setGameOver(false);
    setStarted(true);
    playGround.current.focus();
  };
  // Handlers for direction buttons
  const onUp = () => {
    setDirection("ArrowUp");
  };
  const onDown = () => {
    setDirection("ArrowDown");
  };
  const onRight = () => {
    setDirection("ArrowRight");
  };
  const onLeft = () => {
    setDirection("ArrowLeft");
  };
  return (
    <>
      <Helmet>
        <title>
          {mode === "landing"
            ? "Welcome to Snake Game"
            : gameOver
            ? "Snake Game - Game Over"
            : "Snake Game - Grow Your Snake!"}
        </title>
        <meta
          name="description"
          content={
            mode === "landing"
              ? "Get ready to play the classic Snake Game! Click 'Play' to start your journey and see how long you can grow your snake. Enjoy a fun and challenging game experience."
              : gameOver
              ? `Game over! You scored ${snake.length}. Click 'Restart' to try again and beat your high score. Keep playing and master your snake-handling skills.`
              : "Guide your snake to eat the food and grow longer. Use the arrow keys or on-screen buttons to navigate your snake. Be careful not to collide with the walls or yourself. How long can you make your snake?"
          }
        />
      </Helmet>
      {mode === "landing" ? (
        <>
          <Landing handlerChange={handlerStart} />
        </>
      ) : (
        <>
          <div className="flex h-screen flex-col w-screen   justify-center  items-center bg-gradient-to-r from-green-800 to-[#344e41]">
            <div
              onKeyDown={handleKeyPress}
              tabIndex={0}
              ref={playGround}
              onClick={() => setClick(true)}
              className=" h-[75%] w-[90%] m-2 lg:text-center  sm:h-4/5 sm:w-3/5 border-2 relative  bg-[#a7c957] border-black"
            >
              {!click && (
                <span className="collapse lg:visible lg:font-bold lg:text-red-700">
                  CLICK ON BOARD THEN START PLAYING
                </span>
              )}
              <Snake segment={snake} />
              <Food foodPosition={foodPosition} snake={snake} />
            </div>
            <div className="lg:hidden relative top-0 h-auto w-auto ">
              <Button
                onDown={onDown}
                onLeft={onLeft}
                onRight={onRight}
                onUp={onUp}
              />
            </div>
            {gameOver && (
              <div className="flex justify-center items-center absolute m-auto h-4/5 w-4/5 border-2 z-20 backdrop-blur-lg rounded-lg bg-white/30  border-black">
                <GameOver
                  handlerRestart={handlerRestart}
                  score={snake.length}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default App;
