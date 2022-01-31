import React from "react";
import "./chart.css";

import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  console.log("POOOOOOOO", data);
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekId" stroke="#5550bd"></XAxis>
          <YAxis stroke="#5550bd"></YAxis>
          <Tooltip />

          {/* <Line type="monotone" dataKey={dataKey} stroke="#5550bd" /> */}
          {/* <Line type="monotone" dataKey="workers" stroke="blue" />
          <Line type="monotone" dataKey="companies" stroke="red" />
          <Line type="monotone" dataKey="events" stroke="green" /> */}
          <Bar type="monotone" dataKey="workers" fill="#5bc0de" />
          <Bar type="monotone" dataKey="companies" fill="#f0ad4e" />
          <Bar type="monotone" dataKey="events" fill="#5cb85c" />
          {/* {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10 10" />} */}
          <Legend style={{ marginTop: "20px" }} />
        </BarChart>
      </ResponsiveContainer>
      {/* <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <button style={{ margin: "0px 10px" }}>day</button>
        <button style={{ margin: "0px 10px" }}>Week</button>
        <button style={{ margin: "0px 10px" }}>Month</button>
      </div> */}
    </div>
  );
}
