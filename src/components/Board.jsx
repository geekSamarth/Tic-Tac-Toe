import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squareBoxValue, setSquareBoxValue] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      let [a, b, c] = logic;
      if (
        squareBoxValue[a] !== null &&
        squareBoxValue[a] === squareBoxValue[b] &&
        squareBoxValue[a] === squareBoxValue[c]
      ) {
        return squareBoxValue[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleReset = () => {
    setSquareBoxValue(Array(9).fill(null));
    setIsXTurn(true);
  };

  const handleClick = (index) => {
    if (squareBoxValue[index] !== null) return true;
    const squareValue = [...squareBoxValue];
    squareValue[index] = isXTurn ? "X" : "O";
    setSquareBoxValue(squareValue);
    setIsXTurn(!isXTurn);
  };

  return (
    <>
      <h1 className="text-3xl tracking-wider font-bold mb-12">Tic-Tac-Toe</h1>
      <button
        className="bg-slate-700 text-white rounded-lg px-7 py-2 mb-10 font-semibold text-lg"
        onClick={() => handleReset()}
      >
        Reset
      </button>
      <section className="flex flex-col justify-center items-center gap-0.5">
        <div className="flex gap-0.5">
          <Square onClick={() => handleClick(0)} value={squareBoxValue[0]} />
          <Square onClick={() => handleClick(1)} value={squareBoxValue[1]} />
          <Square onClick={() => handleClick(2)} value={squareBoxValue[2]} />
        </div>
        <div className="flex gap-0.5">
          <Square onClick={() => handleClick(3)} value={squareBoxValue[3]} />
          <Square onClick={() => handleClick(4)} value={squareBoxValue[4]} />
          <Square onClick={() => handleClick(5)} value={squareBoxValue[5]} />
        </div>
        <div className="flex gap-0.5">
          <Square onClick={() => handleClick(6)} value={squareBoxValue[6]} />
          <Square onClick={() => handleClick(7)} value={squareBoxValue[7]} />
          <Square onClick={() => handleClick(8)} value={squareBoxValue[8]} />
        </div>
      </section>
      {isWinner ? (
        <>
          <h2 className="text-2xl tracking-wider font-bold mt-12">
            {isWinner} is the winner
          </h2>
        </>
      ) : squareBoxValue.includes(null) ? (
        <>
          <h2 className="text-2xl tracking-wider font-bold mt-12">
            {isXTurn ? "X" : "O"}'s turn
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-2xl tracking-wider font-bold mt-12">
            It's a draw.
          </h2>
        </>
      )}
    </>
  );
};

export default Board;
