'use client';

import { ReactNode } from 'react';
import { Clock, AlertTriangle, PieChart, Scan } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: 'clock' | 'alert' | 'chart' | 'scan';
}

const iconMap = {
  clock: Clock,
  alert: AlertTriangle,
  chart: PieChart,
  scan: Scan,
};

export default function DashboardCard({ title, children, className = '', icon }: DashboardCardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className={`dashboard-card bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:border-[#0096D6]/20 transition-all duration-300 rounded-2xl ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {IconComponent && (
          <div className="w-10 h-10 bg-gradient-to-br from-[#0096D6]/10 to-[#0077b3]/10 rounded-xl flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-[#0096D6]" />
          </div>
        )}
        <h3 className="text-lg font-bold text-[#0A1F44]">{title}</h3>
      </div>
      {children}
    </div>
  );
}
