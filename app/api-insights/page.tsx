'use client';

import DashboardCard from '../components/DashboardCard';
import ApiCodeBlock from '../components/ApiCodeBlock';
import { apiEndpoints, apiMockResponse, insightsData } from '../data/mockData';
import { Lightbulb, AlertTriangle, CheckCircle, Info, Zap } from 'lucide-react';

export default function ApiInsights() {
  const jsonCode = JSON.stringify(apiMockResponse, null, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Page Header with Glass Effect */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#0A1F44]">API & Insights</h1>
          <p className="text-gray-600 text-sm mt-1">API endpoints, code examples, and AI-powered insights</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Left Column - API Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* API Endpoints */}
            <DashboardCard title="API Endpoints">
              <div className="space-y-2">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <span className={`px-2 py-1 text-xs font-bold rounded flex-shrink-0 ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="flex-1 text-xs sm:text-sm font-mono text-gray-700 truncate">{endpoint.path}</code>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* API Request Example */}
            <DashboardCard title="API Request Example">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select className="px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm font-mono min-w-[80px]">
                    <option>GET</option>
                    <option>POST</option>
                  </select>
                  <input 
                    type="text" 
                    value="/api/v1/products/8G8PAU"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg font-mono text-xs sm:text-sm"
                    readOnly
                  />
                </div>
              </div>
              <button className="btn-primary w-full py-2.5 sm:py-3 shadow-lg hover:shadow-xl transition-all">
                <Zap className="w-4 h-4 inline mr-2" />
                Generate Insights
              </button>
            </DashboardCard>

            {/* JSON Response */}
            <DashboardCard title="Response Example">
              <ApiCodeBlock code={jsonCode} language="json" />
            </DashboardCard>
          </div>

          {/* Right Column - Insights */}
          <div className="space-y-4 sm:space-y-6">
            <DashboardCard title="AI-Powered Insights">
              <div className="space-y-3 sm:space-y-4">
                {insightsData.map((insight, index) => (
                  <div 
                    key={index} 
                    className={`p-3 sm:p-4 rounded-xl border-l-4 backdrop-blur-sm ${
                      insight.priority === 'high' ? 'bg-red-50/80 border-red-500' :
                      insight.priority === 'medium' ? 'bg-orange-50/80 border-orange-500' :
                      'bg-blue-50/80 border-blue-500'
                    }`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      {insight.priority === 'high' ? (
                        <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      ) : insight.priority === 'medium' ? (
                        <Info className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{insight.title}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                            insight.priority === 'high' ? 'bg-red-100 text-red-700' :
                            insight.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {insight.priority}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">{insight.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* Quick Stats - Responsive Grid */}
            <DashboardCard title="API Usage Stats">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <p className="text-xl sm:text-2xl font-bold text-[#0096D6]">1,234</p>
                  <p className="text-xs text-gray-600">API Calls Today</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <p className="text-xl sm:text-2xl font-bold text-green-600">99.9%</p>
                  <p className="text-xs text-gray-600">Uptime</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <p className="text-xl sm:text-2xl font-bold text-purple-600">45ms</p>
                  <p className="text-xs text-gray-600">Avg Response</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-orange-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <p className="text-xl sm:text-2xl font-bold text-orange-600">5</p>
                  <p className="text-xs text-gray-600">Active Keys</p>
                </div>
              </div>
            </DashboardCard>

            {/* Documentation Link */}
            <DashboardCard title="Resources">
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:bg-gray-100 hover:shadow-md transition-all">
                  <Lightbulb className="w-5 h-5 text-[#0096D6] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">View Full API Documentation</span>
                </a>
                <a href="#" className="flex items-center gap-2 sm:gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:bg-gray-100 hover:shadow-md transition-all">
                  <Zap className="w-5 h-5 text-[#0096D6] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Generate API Key</span>
                </a>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
