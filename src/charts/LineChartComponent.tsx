import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

type LineChartProps = {
  data: { name: string; value: number }[];
};

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  const full = useSelector((state: any) => state.full.full);

  return (
    <LineChart width={full ? 1000 : 500} height={full ? 600 : 300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>

  );

}


export default LineChartComponent;
