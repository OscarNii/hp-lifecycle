'use client';

import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <div className={`dashboard-card bg-white/70 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">{title}</h3>
      {children}
    </div>
  );
}
