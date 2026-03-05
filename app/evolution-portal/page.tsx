'use client';

import DashboardCard from '../components/DashboardCard';
import ProductTree from '../components/ProductTree';
import SidebarFilters from '../components/SidebarFilters';
import { productFamilyTree, upgradePaths } from '../data/mockData';
import { ArrowRight, Zap } from 'lucide-react';

const yearOptions = [
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];

const categoryOptions = [
  { value: 'elitebook', label: 'EliteBook' },
  { value: 'probook', label: 'ProBook' },
  { value: 'zbook', label: 'ZBook' },
  { value: 'elitedesk', label: 'EliteDesk' },
];

export default function EvolutionPortal() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#0A1F44]">Evolution Portal</h1>
          <p className="text-gray-600 text-sm mt-1">Explore product family trees and upgrade paths</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <SidebarFilters 
              yearOptions={yearOptions}
              categoryOptions={categoryOptions}
            />
          </div>

          {/* Center - Product Family Tree */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardCard title="Product Family Tree">
              <ProductTree data={productFamilyTree} />
            </DashboardCard>

            {/* Upgrade Paths */}
            <DashboardCard title="Upgrade Paths">
              <div className="space-y-4">
                {upgradePaths.slice(0, 4).map((path, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#0096D6]" />
                      <span className="text-sm font-medium text-gray-700">{path.from}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#0A1F44]">{path.to}</span>
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Direct</span>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Right - Additional Info */}
          <div className="lg:col-span-1 space-y-6">
            <DashboardCard title="Quick Stats">
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-[#0096D6]">12</p>
                  <p className="text-sm text-gray-600">Product Series</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-3xl font-bold text-green-600">8</p>
                  <p className="text-sm text-gray-600">Active Generations</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-3xl font-bold text-orange-600">24</p>
                  <p className="text-sm text-gray-600">Total Models</p>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Recent Upgrades">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-600">EliteBook 840 G7 → G8</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-gray-600">ProBook 450 G7 → G8</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600">ZBook Studio G7 → G8</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-gray-600">EliteDesk 800 G5 → G6</span>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
