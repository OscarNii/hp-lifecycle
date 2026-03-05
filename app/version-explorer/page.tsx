'use client';

import DashboardCard from '../components/DashboardCard';
import Timeline from '../components/Timeline';
import LineChartComponent from '../components/charts/LineChartComponent';
import ComparisonTable from '../components/ComparisonTable';
import { versionHistory, releaseTimelineData, productComparison } from '../data/mockData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function VersionExplorer() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#0A1F44]">Version Explorer</h1>
          <p className="text-gray-600 text-sm mt-1">Explore complete version history and specifications</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Version Timeline */}
          <div className="lg:col-span-1">
            <DashboardCard title="Version History">
              <Timeline versions={versionHistory} />
            </DashboardCard>
          </div>

          {/* Right Column - Charts & Comparison */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Release Timeline Chart */}
            <DashboardCard title="Release Timeline (2015-2024)">
              <LineChartComponent data={releaseTimelineData} />
            </DashboardCard>

            {/* Successor & Predecessor */}
            <DashboardCard title="Successor & Predecessor">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 bg-gray-50 rounded-lg p-4 text-center">
                  <ArrowLeft className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">Predecessor</p>
                  <p className="text-lg font-bold text-[#0A1F44] mt-1">HP EliteBook 840 G7</p>
                  <span className="text-xs text-gray-500">June 2021</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-[#0096D6]" />
                </div>
                <div className="flex-1 bg-[#0096D6]/10 rounded-lg p-4 text-center border-2 border-[#0096D6]">
                  <p className="text-sm font-medium text-[#0096D6]">Current</p>
                  <p className="text-lg font-bold text-[#0A1F44] mt-1">HP EliteBook 840 G8</p>
                  <span className="text-xs text-gray-500">March 2023</span>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium text-gray-700">Successor</p>
                  <p className="text-lg font-bold text-gray-400 mt-1">TBA</p>
                  <span className="text-xs text-gray-500">Expected 2025</span>
                </div>
              </div>
            </DashboardCard>

            {/* Lifecycle Status */}
            <DashboardCard title="Lifecycle Status">
              <div className="flex items-center justify-around py-4">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">Active</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Current Status</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#0A1F44]">1,460</p>
                  <p className="text-sm text-gray-600">Days Until End of Support</p>
                  <p className="text-xs text-gray-400 mt-1">March 15, 2028</p>
                </div>
              </div>
            </DashboardCard>

            {/* Specification Comparison */}
            <DashboardCard title="Specification Comparison">
              <ComparisonTable products={productComparison} />
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
