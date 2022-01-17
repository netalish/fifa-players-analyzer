import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
//import Chart from "chart.js/auto";
//import faker from "faker";

function ScatterChart({ data1 }) {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

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
