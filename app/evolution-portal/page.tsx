'use client';

import DashboardCard from '../components/DashboardCard';
import ProductTree from '../components/ProductTree';
import EvolutionFlowDiagram from '../components/EvolutionFlowDiagram';
import SidebarFilters from '../components/SidebarFilters';
import { productFamilyTree, upgradePaths, evolutionFlowData } from '../data/mockData';
import { ArrowRight, Zap, CheckCircle, Shield } from 'lucide-react';

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
  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'recommended':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'optional':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'critical':
        return <Shield className="w-4 h-4" />;
      case 'recommended':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Page Header with Glass Effect */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#0A1F44]">HP Product Evolution Portal</h1>
          <p className="text-gray-600 text-sm mt-1">Track product lineage and find recommended upgrade paths</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <SidebarFilters 
              yearOptions={yearOptions}
              categoryOptions={categoryOptions}
            />
          </div>

          {/* Center - Evolution Flow & Upgrade Paths */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-4 sm:space-y-6">
            
            {/* Evolution Flow Diagram - Tree Map */}
            <DashboardCard title="Product Evolution Flow">
              <p className="text-sm text-gray-500 mb-4">
                Visual representation of how HP EliteBook 840 evolved from G1 to G10 (2013-2024)
              </p>
              <EvolutionFlowDiagram data={evolutionFlowData} />
            </DashboardCard>

            {/* Recommended Upgrade Paths */}
            <DashboardCard title="Recommended Upgrade Paths">
              <p className="text-sm text-gray-500 mb-4">
                Clear upgrade recommendations based on your current device and support needs
              </p>
              <div className="space-y-3 sm:space-y-4">
                {upgradePaths.map((path, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-0 min-w-0">
                      <div className="flex-shrink-0">
                        <span className="text-sm font-medium text-gray-500">G{path.fromGen}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#0096D6] flex-shrink-0" />
                      <div className="flex-shrink-0">
                        <span className="text-sm font-bold text-[#0A1F44]">G{path.toGen}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="flex flex-wrap gap-1">
                        {path.benefits.slice(0, 2).map((benefit, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <span className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium border ${getRecommendationColor(path.recommendation)}`}>
                        {getRecommendationIcon(path.recommendation)}
                        {path.recommendation.charAt(0).toUpperCase() + path.recommendation.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Right - Additional Info */}
          <div className="lg:col-span-1 order-3 space-y-4 sm:space-y-6">
            <DashboardCard title="Quick Stats">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-center p-3 sm:p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <p className="text-2xl sm:text-3xl font-bold text-[#0096D6]">10</p>
                  <p className="text-sm text-gray-600">Generations</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">3</p>
                  <p className="text-sm text-gray-600">Active Models</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-orange-50/80 backdrop-blur-sm rounded-xl shadow-sm">
                  <p className="text-2xl sm:text-3xl font-bold text-orange-600">6</p>
                  <p className="text-sm text-gray-600">EOL Models</p>
                </div>
              </div>
            </DashboardCard>

            <DashboardCard title="Product Family Tree">
              <ProductTree data={productFamilyTree} />
            </DashboardCard>

            <DashboardCard title="Recent Upgrades">
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: 'EliteBook 840 G9 → G10', color: 'bg-green-500' },
                  { label: 'ProBook 450 G10 → G11', color: 'bg-green-500' },
                  { label: 'ZBook Firefly G9 → G10', color: 'bg-green-500' },
                  { label: 'EliteBook 840 G8 → G9', color: 'bg-blue-500' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-gray-50/50 transition-colors">
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-gray-600 truncate">{item.label}</span>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
