import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

type BarChartHorizontalProps = {
  data: { time: string; A: number; B: number }[];
};

const BarChartHorizontal: React.FC<BarChartHorizontalProps> = ({ data }) => {
  const full = useSelector((state: any) => state.full.full);

  return(

    <BarChart width={full ? 1000 : 500} height={full ? 600 : 300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="A" fill="#8884d8" />
    <Bar dataKey="B" fill="#82ca9d" />
  </BarChart>
);
}

export default BarChartHorizontal;
