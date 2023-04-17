import './App.css';

/**
 * defines a function call Square
 * export JavaScript keyword: make function accessible outside this file
 * default keyword tells other files using your code taht it's the main function    
 */

function Square({ value }) {
  return <button className="square">{ value }</button>;
}

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
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}

/* export default App; */
