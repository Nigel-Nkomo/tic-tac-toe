import { useState } from "react";
import Square from "./Square";
import "./Board.css";

export default function Board() {
  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (squaresCopy[i] || calculateWinner(squares)) {
      return;
    }
    if (isNext) {
      squaresCopy[i] = "X";
    } else {
      squaresCopy[i] = "O";
    }

    setSquares(squaresCopy);
    setIsNext(!isNext);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }

  return (
    <>
      <h1 className="board__heading">Tic-tac-toe</h1>
      <p className="board__subtitle">{status}</p>
      <div className="board">
        {squares.map((square, i) => {
          return <Square value={square} handleClick={handleClick} i={i} />;
        })}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
