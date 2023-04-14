import './App.css';

/**
 * defines a function call Square
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
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
    </div>
    <div className="board-row">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
    </div>
    <div className="board-row">
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
    </div>
    </>
  );
}

// export default App;
