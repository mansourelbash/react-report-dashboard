import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

type PieChartProps = {
  data: { name: string; sourceColor: string; numMentions: number }[];
};

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const full = useSelector((state: any) => state.full.full);

  return (
    <PieChart width={full ? 1000 : 400} height={full ? 800 : 300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label={({ name }) => name}
        outerRadius={full ? 300 : 80}
        innerRadius={full ? 200 : 60}
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
};

export default PieChartComponent;
