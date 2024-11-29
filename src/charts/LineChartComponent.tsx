import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

type LineChartProps = {
  data: { name: string; value: number }[];
};

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
);

export default LineChartComponent;
