import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="contents">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      <button id="reset" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default App;
