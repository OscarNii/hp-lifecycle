'use client';

import DashboardCard from '../components/DashboardCard';
import { hardwareVersions, osCompatibility, biosFirmware, driverVersions, supportLifecycle } from '../data/mockData';
import { Check, X, Calendar, AlertTriangle, HardDrive, Monitor, Cpu, Download, RefreshCw } from 'lucide-react';

export default function TechnicalHub() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#0A1F44]">Technical Hub</h1>
          <p className="text-gray-600 text-sm mt-1">Hardware versions, drivers, BIOS, and technical specifications</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Hardware Versions */}
            <DashboardCard title="Hardware Versions">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Version</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Release Date</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hardwareVersions.map((hw, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 px-3 font-medium text-[#0A1F44]">v{hw.version}</td>
                        <td className="py-2 px-3 text-gray-600">{new Date(hw.releaseDate).toLocaleDateString()}</td>
                        <td className="py-2 px-3 text-gray-600">{hw.changes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>

            {/* OS Compatibility */}
            <DashboardCard title="OS Compatibility">
              <div className="space-y-3">
                {osCompatibility.map((os, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{os.os}</p>
                        <p className="text-xs text-gray-500">{os.version}</p>
                      </div>
                    </div>
                    {os.supported ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <Check className="w-4 h-4" /> Supported
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500 text-sm">
                        <X className="w-4 h-4" /> Not Supported
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* BIOS & Firmware */}
            <DashboardCard title="BIOS & Firmware Versions">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Component</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Version</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-600">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biosFirmware.map((fw, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 px-3">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-[#0096D6]" />
                            <span className="font-medium text-gray-800">{fw.component}</span>
                          </div>
                        </td>
                        <td className="py-2 px-3 font-mono text-gray-600">{fw.version}</td>
                        <td className="py-2 px-3 text-gray-600">{fw.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>

            {/* Driver Versions */}
            <DashboardCard title="Driver Versions Summary">
              <div className="space-y-3">
                {driverVersions.map((driver, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{driver.category}</p>
                      <p className="text-xs text-gray-500 font-mono">{driver.driver}</p>
                    </div>
                    <span className="text-xs text-gray-400">{driver.date}</span>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Support Lifecycle Details */}
            <DashboardCard title="Support Lifecycle Details">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#0096D6]" />
                    <div>
                      <p className="text-xs text-gray-600">Launch Date</p>
                      <p className="font-medium text-gray-800">{new Date(supportLifecycle.launchDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-xs text-gray-600">End of Support</p>
                      <p className="font-medium text-gray-800">{new Date(supportLifecycle.endOfSupport).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-600">Part Availability</p>
                      <p className="font-medium text-gray-800">{new Date(supportLifecycle.partAvailability).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-600">Extended Support</p>
                      <p className="font-medium text-gray-800">{new Date(supportLifecycle.extendedSupport).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Quick Actions */}
            <DashboardCard title="Quick Actions">
              <div className="space-y-2">
                <button className="w-full btn-primary text-sm py-2 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download All Drivers
                </button>
                <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Check for Updates
                </button>
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}
