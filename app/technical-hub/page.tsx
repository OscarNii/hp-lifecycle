'use client';

import DashboardCard from '../components/DashboardCard';
import { hardwareVersions, osCompatibility, biosFirmware, driverVersions, supportLifecycle, OSCompatibilityEntry, BiosFirmwareEntry, DriverEntry } from '../data/mockData';
import { Check, X, Calendar, AlertTriangle, HardDrive, Monitor, Cpu, Download, RefreshCw, Info, Shield, Zap } from 'lucide-react';

export default function TechnicalHub() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'recommended':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'optional':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Shield className="w-3 h-3" />;
      case 'recommended':
        return <Zap className="w-3 h-3" />;
      default:
        return <Info className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Page Header with Glass Effect */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#0A1F44]">HP Version & Firmware Intelligence Hub</h1>
          <p className="text-gray-600 text-sm mt-1">BIOS versions, firmware release dates, and OS compatibility matrices</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Hardware Versions */}
            <DashboardCard title="Hardware Versions">
              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <table className="w-full text-sm min-w-[280px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Version</th>
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Release</th>
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hardwareVersions.map((hw, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                        <td className="py-2 px-2 sm:px-3 font-medium text-[#0A1F44]">v{hw.version}</td>
                        <td className="py-2 px-2 sm:px-3 text-gray-600 text-xs">{new Date(hw.releaseDate).toLocaleDateString()}</td>
                        <td className="py-2 px-2 sm:px-3 text-gray-600 text-xs truncate max-w-[100px]">{hw.changes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>

            {/* OS Compatibility Matrix */}
            <DashboardCard title="OS Compatibility Matrix">
              <div className="space-y-2 sm:space-y-3">
                {osCompatibility.map((os: OSCompatibilityEntry, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="min-w-0 flex-1 mr-2">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <p className="font-medium text-gray-800 text-sm truncate">{os.os}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1 ml-6">
                        <span className="text-xs text-gray-500 font-mono">{os.version}</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">{os.architecture}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {os.supported ? (
                        <span className="flex items-center gap-1 text-green-600 text-xs sm:text-sm whitespace-nowrap">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4" /> Supported
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-500 text-xs sm:text-sm whitespace-nowrap">
                          <X className="w-3 h-3 sm:w-4 sm:h-4" /> Not Supported
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Middle Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* BIOS & Firmware Versions with Priority */}
            <DashboardCard title="BIOS & Firmware Intelligence">
              <div className="overflow-x-auto -mx-3 sm:mx-0">
                <table className="w-full text-sm min-w-[300px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Component</th>
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Version</th>
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Released</th>
                      <th className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-600">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biosFirmware.map((fw: BiosFirmwareEntry, index: number) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                        <td className="py-2 px-2 sm:px-3">
                          <div className="flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-[#0096D6] flex-shrink-0" />
                            <span className="font-medium text-gray-800 text-xs sm:text-sm truncate">{fw.component}</span>
                          </div>
                        </td>
                        <td className="py-2 px-2 sm:px-3 font-mono text-gray-600 text-xs">{fw.version}</td>
                        <td className="py-2 px-2 sm:px-3 text-gray-600 text-xs">{new Date(fw.releaseDate).toLocaleDateString()}</td>
                        <td className="py-2 px-2 sm:px-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${getPriorityColor(fw.priority)}`}>
                            {getPriorityIcon(fw.priority)}
                            {fw.priority.charAt(0).toUpperCase() + fw.priority.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DashboardCard>

            {/* Driver Versions with Priority */}
            <DashboardCard title="Driver Versions Summary">
              <div className="space-y-2 sm:space-y-3">
                {driverVersions.map((driver: DriverEntry, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <div className="min-w-0 flex-1 mr-2">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-800 text-sm truncate">{driver.category}</p>
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium border ${getPriorityColor(driver.priority)}`}>
                          {getPriorityIcon(driver.priority)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-mono truncate mt-1">{driver.driver}</p>
                      <p className="text-xs text-gray-400">v{driver.version}</p>
                    </div>
                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="text-xs text-gray-400 whitespace-nowrap">{new Date(driver.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Support Lifecycle Details */}
            <DashboardCard title="Support Lifecycle Details">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#0096D6] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Launch Date</p>
                      <p className="font-medium text-gray-800 text-sm">{new Date(supportLifecycle.launchDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-red-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">End of Support</p>
                      <p className="font-medium text-gray-800 text-sm">{new Date(supportLifecycle.endOfSupport).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-orange-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Part Availability</p>
                      <p className="font-medium text-gray-800 text-sm">{new Date(supportLifecycle.partAvailability).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-green-50/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Extended Support</p>
                      <p className="font-medium text-gray-800 text-sm">{new Date(supportLifecycle.extendedSupport).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>

            {/* Quick Actions */}
            <DashboardCard title="Quick Actions">
              <div className="space-y-2 sm:space-y-3">
                <button className="w-full btn-primary text-sm py-2.5 sm:py-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Download className="w-4 h-4" /> Download All Drivers
                </button>
                <button className="w-full bg-gray-100/80 backdrop-blur-sm text-gray-700 px-4 py-2.5 sm:py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 border border-gray-200">
                  <RefreshCw className="w-4 h-4" /> Check for Updates
                </button>
              </div>
            </DashboardCard>

            {/* Firmware Update Notes */}
            <DashboardCard title="Recent Firmware Updates">
              <div className="space-y-2">
                {biosFirmware.slice(0, 3).map((fw: BiosFirmwareEntry, index: number) => (
                  <div key={index} className="p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-gray-800">{fw.component}</span>
                      <span className="text-xs text-gray-500">{new Date(fw.releaseDate).toLocaleDateString()}</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">{fw.description}</p>
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
