'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface DonutChartProps {
  data?: Array<{ name: string; value: number; fill: string }>;
}

// Default data for lifecycle overview
const defaultData = [
  { name: 'Active', value: 156, fill: '#2ECC71' },
  { name: 'Discontinued', value: 42, fill: '#F39C12' },
  { name: 'EOL', value: 28, fill: '#E74C3C' },
];

export default function DonutChart({ data }: DonutChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = data || defaultData;

  if (!mounted) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-lg">
        <span className="text-gray-400 text-sm">Loading chart...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-sm text-gray-600">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
