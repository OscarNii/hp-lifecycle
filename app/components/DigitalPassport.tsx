'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  Smartphone, 
  QrCode, 
  Cpu, 
  Battery, 
  Thermometer, 
  HardDrive, 
  Wifi, 
  Bluetooth,
  ChevronRight,
  X,
  Zap,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Info,
  Home
} from 'lucide-react';

interface DevicePassport {
  id: string;
  model: string;
  series: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyEnd: string;
  healthScore: number;
  batteryWear: number;
  temperature: number;
  storage: { used: number; total: number };
  ram: { used: number; total: number };
  bios: string;
  lastUpdate: string;
  lifecycle: {
    phase: 'active' | 'mature' | 'eol' | 'retired';
    endOfSupport: string;
    endOfLife: string;
  };
}

interface DigitalPassportProps {
  deviceId?: string;
  onClose: () => void;
  autoScan?: boolean;
}

// Mock device data for HP EliteBook G11
const mockDevice: DevicePassport = {
  id: 'eligiblebook-g11-001',
  model: 'HP EliteBook 840 G11',
  series: 'EliteBook 800 Series',
  serialNumber: '8CG0123ABC',
  purchaseDate: '2024-03-15',
  warrantyEnd: '2027-03-15',
  healthScore: 92,
  batteryWear: 8,
  temperature: 42,
  storage: { used: 512, total: 1024 },
  ram: { used: 24, total: 32 },
  bios: '1.2.3',
  lastUpdate: '2025-01-15',
  lifecycle: {
    phase: 'active',
    endOfSupport: '2029-03-15',
    endOfLife: '2030-03-15'
  }
};

export function DigitalPassport({ onClose, autoScan = false }: DigitalPassportProps) {
  const [device, setDevice] = useState<DevicePassport | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Simulate NFC/QR scan
  const simulateScan = useCallback(() => {
    setIsScanning(true);
    setTimeout(() => {
      setDevice(mockDevice);
      setIsScanning(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Only auto-scan if explicitly enabled
    if (autoScan) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      simulateScan();
    }
  }, [autoScan, simulateScan]);

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'active': return 'bg-green-500';
      case 'mature': return 'bg-blue-500';
      case 'eol': return 'bg-orange-500';
      case 'retired': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!device) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
        
        <div className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full mx-auto shadow-2xl">
          <button 
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              {/* Scanning animation */}
              <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-3xl bg-gradient-to-br from-hp-blue to-blue-600 flex items-center justify-center ${isScanning ? 'animate-pulse' : ''}`}>
                <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
              {isScanning && (
                <div className="absolute inset-0 rounded-3xl border-4 border-hp-blue/50 animate-ping" />
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {isScanning ? 'Scanning Device...' : 'HP Digital Passport'}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-6">
              {isScanning 
                ? 'Detecting NFC tag or QR code...' 
                : 'Tap to scan NFC or position QR code'}
            </p>

            {!isScanning && (
              <button
                onClick={simulateScan}
                className="w-full py-3 sm:py-4 bg-hp-blue text-white rounded-xl font-semibold hover:bg-hp-blue/90 transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Simulate Scan
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-2 sm:p-4 pt-4 sm:pt-8">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Focus Mode Banner - Mobile Responsive */}
          <div className="mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r from-hp-blue to-blue-600 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">Focus Mode Activated</h3>
                <p className="text-xs sm:text-sm text-white/80">Device lifecycle timeline loaded</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Home className="w-4 h-4" />
              Exit
            </button>
          </div>

          {/* Main Passport Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with HP Logo */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 p-4 sm:p-6 text-white">
              {/* Exit Button */}
              <button 
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-start justify-between pr-12 sm:pr-16">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-hp-blue rounded-2xl flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-bold">HP</span>
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold">{device.model}</h2>
                    <p className="text-white/70 text-sm">{device.series}</p>
                    <p className="text-xs sm:text-sm text-white/50 mt-1">S/N: {device.serialNumber}</p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className={`text-3xl sm:text-4xl font-bold ${getHealthColor(device.healthScore)}`}>
                    {device.healthScore}%
                  </div>
                  <p className="text-sm text-white/60">Health Score</p>
                </div>
              </div>

              {/* Health Score - Mobile visible */}
              <div className="sm:hidden mt-3">
                <div className={`text-2xl font-bold ${getHealthColor(device.healthScore)}`}>
                  {device.healthScore}% Health
                </div>
              </div>

              {/* Phase Badge */}
              <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6">
                <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-white ${getPhaseColor(device.lifecycle.phase)}`}>
                  {device.lifecycle.phase.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* Battery Health */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Battery className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">Battery</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Wear Level</span>
                      <span className="font-medium text-slate-900 dark:text-white">{device.batteryWear}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${device.batteryWear > 20 ? 'bg-orange-500' : 'bg-green-500'}`}
                        style={{ width: `${device.batteryWear}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Temperature */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Thermometer className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">Temperature</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {device.temperature}°C
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Optimal range</p>
                </div>

                {/* Storage */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <HardDrive className="w-4 sm:w-5 h-4 sm:h-5 text-purple-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">Storage</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {device.storage.used}/{device.storage.total} GB
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-2">
                    <div 
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${(device.storage.used / device.storage.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* RAM */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">RAM</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {device.ram.used}/{device.ram.total} GB
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-2">
                    <div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${(device.ram.used / device.ram.total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* BIOS */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <Cpu className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">BIOS</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    v{device.bios}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Updated {device.lastUpdate}</p>
                </div>

                {/* Connectivity */}
                <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <Wifi className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">Connectivity</span>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Wifi className="w-5 sm:w-6 h-5 sm:h-6 text-green-500" />
                    <Bluetooth className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Lifecycle Timeline - Mobile Responsive */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-hp-blue/5 to-purple-5 dark:from-hp-blue/10 dark:to-purple-10 rounded-2xl">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-hp-blue" />
                  Lifecycle Timeline
                </h3>
                <div className="flex items-center justify-between overflow-x-auto gap-2">
                  <div className="text-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Purchased</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{device.purchaseDate}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  <div className="text-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-hp-blue rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Warranty Ends</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{device.warrantyEnd}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  <div className="text-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <Info className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Support Ends</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{device.lifecycle.endOfSupport}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  <div className="text-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                      <X className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">End of Life</p>
                    <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{device.lifecycle.endOfLife}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// QR Scanner trigger button
export function PassportScannerTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-40 p-3 sm:p-4 bg-gradient-to-br from-hp-blue to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
    >
      <QrCode className="w-5 sm:w-6 h-5 sm:h-6" />
      <span className="absolute right-full mr-2 sm:mr-3 top-1/2 -translate-y-1/2 px-2 sm:px-3 py-1.5 bg-slate-800 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Scan Device Passport
      </span>
    </button>
  );
}
