import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemp = () => {
    if (tempValue === 30) {
      alert("Maximum temperature entered");
      return
    }
    const newTemp = tempValue + 1;

    setTempValue(newTemp);

    if (newTemp > 15) {
      setTempColor("hot")
    }
  }

  const decreaseTemp = () => {
    if (tempValue === 0) {
      alert("Minimum temperature entered");
      return
    }    const newTemp = tempValue - 1;

    setTempValue(newTemp);

    if (newTemp <= 15) {
      setTempColor("cold")
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>
          {tempValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;
