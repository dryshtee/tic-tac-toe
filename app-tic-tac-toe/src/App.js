import './App.css';
import { useState } from 'react';

/**
 * passing data through props
 * create a reusable component to avoid messy, duplicated code
 * using React's component architecture
 */
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

/**
 * defines a function call Board
 * export JavaScript keyword: make function accessible outside this file
 * default keyword tells other files using your code taht it's the main function    
 */
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

/**
 * returns (whatever comes after is returned as a value to the caller of the function) 
 * a button (JSX element: combination of JS code + HTML tags)
 * className: button property or prop that tells CSS how to style the button
 * X: text displayed inside the button
 * => : arrow function, shorter way to define functions
*/
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}
