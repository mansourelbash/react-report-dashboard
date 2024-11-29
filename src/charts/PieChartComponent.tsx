import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Define the correct type for the data prop
type PieChartProps = {
  data: { name: string; sourceColor: string; numMentions: number }[];
};

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => (
  <PieChart width={400} height={300}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      label={({ name }) => name}  // This will show the source name as the label
      outerRadius={80}
      fill="#8884d8"
      dataKey="numMentions"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.sourceColor} />
      ))}
    </Pie>
    <Tooltip />
    <Legend aria-label='' />
  </PieChart>
);

export default PieChartComponent;
