import React from "react";

import { Scatter } from "react-chartjs-2";

function ScatterChart() {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        data: [
          {
            x: 565,
            y: 94,
          },
          {
            x: 405,
            y: 94,
          },
          {
            x: 290,
            y: 92,
          },
          {
            x: 260,
            y: 91,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
  return (
    <>
      <div>Hello</div>
      <Scatter options={options} data={data} />
    </>
  );
}

export default ScatterChart;
