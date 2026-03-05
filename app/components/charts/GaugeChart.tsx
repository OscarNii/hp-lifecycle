'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface GaugeChartProps {
  data: Array<{ name: string; value: number; fill: string }>;
}

export default function GaugeChart({ data }: GaugeChartProps) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  
  // Calculate the angles for semi-circle
  const startAngle = 180;
  const endAngle = 0;
  
  return (
    <div className="relative w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <div className="text-center">
          <span className="text-3xl font-bold text-[#0A1F44]">{total}</span>
          <p className="text-xs text-gray-500">Total Updates</p>
        </div>
      </div>
    </div>
  );
}
