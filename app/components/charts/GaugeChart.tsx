'use client';

import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface GaugeChartProps {
  value?: number;
  data?: Array<{ name: string; value: number; fill: string }>;
}

export default function GaugeChart({ value = 0, data }: GaugeChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default gauge data if not provided
  const chartData = data || [
    { name: 'Complete', value: value, fill: '#0096D6' },
    { name: 'Remaining', value: 100 - value, fill: '#E5E7EB' },
  ];
  
  const total = chartData.reduce((acc, item) => acc + item.value, 0);
  
  if (!mounted) {
    return (
      <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-lg">
        <span className="text-gray-400 text-sm">Loading chart...</span>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <div className="text-center">
          <span className="text-3xl font-bold text-[#0A1F44]">{value}%</span>
          <p className="text-xs text-gray-500">Complete</p>
        </div>
      </div>
    </div>
  );
}
