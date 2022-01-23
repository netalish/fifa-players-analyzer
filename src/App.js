import React, { useState } from "react";

import "./App.css";
import Chart from "./components/Chart";
import useFetch from "./useFetch";

function App() {
  const [isOn, setIsOn] = useState(false);

  const { play } = useFetch(isOn);

  function playHandle() {
    setIsOn(true);
  }

  return (
    <div className="App">
      <h2>Fifa Players Analyzer</h2>
      {isOn && <Chart data={play.data}></Chart>}
      <div className="footer">
        <button className="button" onClick={playHandle}>
          Play
        </button>
        {play.ageRange && (
          <div className="ageRange">{`Age: ${play.ageRange.from}-${play.ageRange.to}`}</div>
        )}
      </div>
    </div>
  );
}

export default App;
