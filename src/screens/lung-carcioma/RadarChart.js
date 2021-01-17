import React from "react";
import {
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PolarGrid,
} from "recharts";

const RadarChartComponent = ({ data, width, height }) => {
  return (
    <RadarChart data={data} width={width} height={height}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar
        dataKey="value"
        stroke="rgb(0, 145, 235)"
        fill="rgb(0, 145, 235)"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default RadarChartComponent;
