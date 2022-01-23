import React from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chart({ data }) {
  //const [data1, setData1] = useState(data);
  const CustomPoint = (props) => {
    const { x, y } = props;
    return (
      <svg width="80" height="80" x={x} y={y}>
        <defs>
          <pattern
            id="image"
            patternUnits="userSpaceOnUse"
            height="100"
            width="100"
          >
            <image
              x="0"
              y="0"
              height="80"
              width="80"
              href="https://cdn.sofifa.net/players/246/268/21_120.png"
            ></image>
          </pattern>
        </defs>
        <circle id="top" cx="40" cy="40" r="40" fill="url(#image)" />
      </svg>
    );
  };

  return (
    <ScatterChart
      width={1200}
      height={800}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis
        type="number"
        dataKey={"Overall"}
        name="Overall Rate"
        label={{ value: "Overall Rate", angle: -90, position: "insideLeft" }}
        padding={{ top: 40 }}
      />
      <XAxis
        type="number"
        dataKey={"Wage"}
        name="Wage"
        label={{ value: "Wage", position: "insideBottom", offset: -20 }}
        padding={{ right: 40 }}
      />

      <Legend />
      <Scatter legendType="none" data={data} shape={<CustomPoint />} />
    </ScatterChart>
  );
}

export default React.memo(Chart);
