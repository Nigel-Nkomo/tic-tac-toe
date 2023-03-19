import { useState } from "react";
import Square from "./Square";
import "./Board.css";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    squaresCopy[0] = "X";
    return setSquares(squaresCopy);
  };

  return (
    <div className="board">
      {squares.map((square) => {
        return <Square value={square} handleClick={handleClick} />;
      })}
    </div>
  );
}
