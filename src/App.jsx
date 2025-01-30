import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  //   const [value, setValue] = useState(null);

  //   function handleClick() {
  //     //  console.log(`You clicked on square ${value}`);
  //     //  setValue("X");
  //   }
  return (
    <button
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  //   console.log(squares);

  function handleClick() {
    //  console.log("You clicked on square");
    //  squares[0] = "X";
    //  setSquares([...squares]);
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default Board;
