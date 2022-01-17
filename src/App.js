import React, { useState } from "react";

import "./App.css";
import ScatterChart from "./components/ScatterChart";

//import { data } from "./FIFA_Datasource.json";

import DataApi from "./DataApi";

const data = require("./FIFA_Datasource.json");

const api = new DataApi(data);
console.log(data);

function App() {
  const [isOn, setIsOn] = useState(false);
  // data
  //
  function playHandle() {
    setIsOn(true);
  }

  // useEffect(() => {
  //   if (isOn) {
  //     // cut data accordind to age groups and pass to chart
  //     // useeffect on data to chart????
  //   }
  // }, [isOn]);

  return (
    <div className="App">
      <h2>Fifa Players Analyzer</h2>
      <ScatterChart></ScatterChart>
      <div>
        <button onClick={playHandle}>Play</button>
        <div>
          `Age: ${}-${}`
        </div>
      </div>
    </div>
  );
}

export default App;
