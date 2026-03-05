'use client';

import { Search } from 'lucide-react';
import DashboardCard from './components/DashboardCard';
import GaugeChart from './components/charts/GaugeChart';
import DonutChart from './components/charts/DonutChart';
import { recentLookups, gaugeData, donutChartData } from './data/mockData';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6e] px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            HP Product Version & Lifecycle Hub
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Explore HP product versions, track lifecycle status, and discover upgrade paths for your enterprise devices.
          </p>
          
          {/* Search Input */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter a Website or Product URL"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-gray-700"
              />
            </div>
            <button className="btn-primary px-8 py-3 text-lg">
              Explore Product
            </button>
          </div>
          
          <p className="text-white/60 text-sm mt-4">
            Try: HP EliteBook 840 G8, HP ProBook 450 G7, HP ZBook Studio
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Recent Lookups */}
          <DashboardCard title="Recent Lookups">
            <div className="space-y-3">
              {recentLookups.map((lookup) => (
                <div key={lookup.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lookup.productIcon}</span>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{lookup.productName}</p>
                      <p className="text-xs text-gray-500">{lookup.timestamp}</p>
                    </div>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${lookup.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Card 2: Critical Updates */}
          <DashboardCard title="Critical Updates">
            <GaugeChart data={gaugeData} />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F39C12]" />
                  <span className="text-gray-600">Pending Updates</span>
                </div>
                <span className="font-semibold text-gray-800">12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0096D6]" />
                  <span className="text-gray-600">Driver Updates</span>
                </div>
                <span className="font-semibold text-gray-800">8</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E74C3C]" />
                  <span className="text-gray-600">Security Patches</span>
                </div>
                <span className="font-semibold text-gray-800">5</span>
              </div>
            </div>
          </DashboardCard>

          {/* Card 3: Lifecycle Overview */}
          <DashboardCard title="Lifecycle Overview">
            <DonutChart data={donutChartData} />
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="text-lg font-bold text-green-600">45</p>
                <p className="text-xs text-gray-600">Active</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <p className="text-lg font-bold text-orange-600">28</p>
                <p className="text-xs text-gray-600">Discontinued</p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <p className="text-lg font-bold text-red-600">15</p>
                <p className="text-xs text-gray-600">EOL</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
