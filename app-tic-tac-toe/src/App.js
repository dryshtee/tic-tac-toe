import './App.css';
import { useState } from 'react';

/**
 * passing data through props
 * create a reusable component to avoid messy, duplicated code
 * using React's component architecture
 */
function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button 
      className="square" 
      onClick={ handleClick }
    >
      { value }
    </button>
  );
}

/**
 * defines a function call Board
 * export JavaScript keyword: make function accessible outside this file
 * default keyword tells other files using your code taht it's the main function    
 */
export default function Board() {
  /**
 * returns (whatever comes after is returned as a value to the caller of the function) 
 * a button (JSX element: combination of JS code + HTML tags)
 * className: button property or prop that tells CSS how to style the button
 * X: text displayed inside the button
 */ 
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}

/* export default App; */
