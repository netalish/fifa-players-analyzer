import React, { useState } from "react";

import "./App.css";
import ScatterChart from "./components/ScatterChart";

function App() {
  const [isOn, setIsOn] = useState(false);
  // data
  //
  function playHandle() {}

  return (
    <div className="App">
      <h2>Fifa Players Analyzer</h2>
      <ScatterChart></ScatterChart>
      <button onClick={playHandle}>Play</button>
    </div>
  );
}

export default App;
