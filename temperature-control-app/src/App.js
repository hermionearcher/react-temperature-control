import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [tempValue, setTempValue] = useState(10);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">
          {tempValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown="">+</button>
        <button onClick="">-</button>
      </div>
    </div>
  );
}

export default App;
