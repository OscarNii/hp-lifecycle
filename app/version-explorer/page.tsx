'use client';

import DashboardCard from '../components/DashboardCard';
import Timeline from '../components/Timeline';
import LineChartComponent from '../components/charts/LineChartComponent';
import ComparisonTable from '../components/ComparisonTable';
import { versionHistory, releaseTimelineData, productComparison } from '../data/mockData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function VersionExplorer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Page Header with Glass Effect */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#0A1F44]">Version Explorer</h1>
          <p className="text-gray-600 text-sm mt-1">Explore complete version history and specifications</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Left Column - Version Timeline */}
          <div className="lg:col-span-1">
            <DashboardCard title="Version History">
              <Timeline versions={versionHistory} />
            </DashboardCard>
          </div>

          {/* Right Column - Charts & Comparison */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* Release Timeline Chart */}
            <DashboardCard title="Release Timeline (2015-2024)">
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <LineChartComponent data={releaseTimelineData} />
              </div>
            </DashboardCard>

            {/* Successor & Predecessor - Mobile Responsive */}
            <DashboardCard title="Successor & Predecessor">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="flex-1 w-full sm:w-auto bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-100">
                  <ArrowLeft className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Predecessor</p>
                  <p className="text-sm sm:text-lg font-bold text-[#0A1F44] mt-1">HP EliteBook 840 G7</p>
                  <span className="text-xs text-gray-500">June 2021</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#0096D6] rotate-90 sm:rotate-0" />
                </div>
                <div className="flex-1 w-full sm:w-auto bg-[#0096D6]/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border-2 border-[#0096D6] shadow-lg">
                  <p className="text-xs sm:text-sm font-medium text-[#0096D6]">Current</p>
                  <p className="text-sm sm:text-lg font-bold text-[#0A1F44] mt-1">HP EliteBook 840 G8</p>
                  <span className="text-xs text-gray-500">March 2023</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 rotate-90 sm:rotate-0" />
                </div>
                <div className="flex-1 w-full sm:w-auto bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-gray-100">
                  <p className="text-xs sm:text-sm font-medium text-gray-700">Successor</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-400 mt-1">TBA</p>
                  <span className="text-xs text-gray-500">Expected 2025</span>
                </div>
              </div>
            </DashboardCard>

            {/* Lifecycle Status */}
            <DashboardCard title="Lifecycle Status">
              <div className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0 py-4">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-green-500 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-lg">
                    <span className="text-lg sm:text-2xl font-bold text-green-600">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Current Status</p>
                </div>
                <div className="text-center p-4 bg-blue-50/50 backdrop-blur-sm rounded-xl">
                  <p className="text-2xl sm:text-3xl font-bold text-[#0A1F44]">1,460</p>
                  <p className="text-sm text-gray-600">Days Until End of Support</p>
                  <p className="text-xs text-gray-400 mt-1">March 15, 2028</p>
                </div>
              </div>
            </DashboardCard>

            {/* Specification Comparison */}
            <DashboardCard title="Specification Comparison">
              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <ComparisonTable products={productComparison} />
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
