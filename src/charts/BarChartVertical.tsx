import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

type VerticalBarChartProps = {
  data: { name: string; uv: number; pv: number }[];
};

const BarChartVertical: React.FC<VerticalBarChartProps> = ({ data }) => {
  const full = useSelector((state: any) => state.full.full);

  return (
  <BarChart width={full ? 1000 : 500} height={full ? 600 : 300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="uv" fill="#8884d8" />
    <Bar dataKey="pv" fill="#82ca9d" />
  </BarChart>
);
}
export default BarChartVertical;
