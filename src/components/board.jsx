import React from "react";
import Square from "./square";

const Board = (props) => {
  const rednerSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };
  return (
    <div>
      <div className="board-row">
        {rednerSquare(0)}
        {rednerSquare(1)}
        {rednerSquare(2)}
      </div>
      <div className="board-row">
        {rednerSquare(3)}
        {rednerSquare(4)}
        {rednerSquare(5)}
      </div>
      <div className="board-row">
        {rednerSquare(6)}
        {rednerSquare(7)}
        {rednerSquare(8)}
      </div>
    </div>
  );
};

export default Board;
