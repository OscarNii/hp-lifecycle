'use client';

import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <div className={`dashboard-card ${className}`}>
      <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">{title}</h3>
      {children}
    </div>
  );
}
