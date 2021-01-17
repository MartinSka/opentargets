import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ data, width, height }) => {
  return (
    <BarChart data={data} width={width} height={height}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="rgb(0, 145, 235)" />
    </BarChart>
  );
};

export default BarChartComponent;
