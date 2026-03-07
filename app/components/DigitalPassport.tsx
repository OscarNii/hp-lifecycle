'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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

export function DigitalPassport({ deviceId, onClose }: DigitalPassportProps) {
  const [device, setDevice] = useState<DevicePassport | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [showFocusMode, setShowFocusMode] = useState(false);

  // Simulate NFC/QR scan
  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setDevice(mockDevice);
      setIsScanning(false);
      setShowFocusMode(true);
    }, 2000);
  };

  useEffect(() => {
    // Auto-trigger scan for demo
    simulateScan();
  }, []);

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
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
        
        <div className="relative z-10 bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
                      <div className="flex items-center gap-2">
              <Link 
                href="/"
                className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Link>
              <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
            </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              {/* Scanning animation */}
              <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-hp-blue to-blue-600 flex items-center justify-center ${isScanning ? 'animate-pulse' : ''}`}>
                <QrCode className="w-16 h-16 text-white" />
              </div>
              {isScanning && (
                <div className="absolute inset-0 rounded-3xl border-4 border-hp-blue/50 animate-ping" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {isScanning ? 'Scanning Device...' : 'HP Digital Passport'}
            </h2>
            <p className="text-slate-500 mb-6">
              {isScanning 
                ? 'Detecting NFC tag or QR code...' 
                : 'Tap to scan NFC or position QR code'}
            </p>

            {!isScanning && (
                          <div className="flex items-center gap-2">
              <Link 
                href="/"
                className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Link>
              <button
                onClick={simulateScan}
                className="w-full py-4 bg-hp-blue text-white rounded-xl font-semibold hover:bg-hp-blue/90 transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                Simulate Scan
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-4 pt-8">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
        
        <div className="relative z-10 w-full max-w-4xl">
          {/* Focus Mode Banner */}
          <div className="mb-4 p-4 bg-gradient-to-r from-hp-blue to-blue-600 rounded-2xl flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Focus Mode Activated</h3>
                <p className="text-sm text-white/80">Device lifecycle timeline loaded</p>
              </div>
            </div>
                        <div className="flex items-center gap-2">
              <Link 
                href="/"
                className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Link>
              <button 
              onClick={() => setShowFocusMode(!showFocusMode)}
              className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
            >
              {showFocusMode ? 'Exit Focus' : 'Enter Focus'}
            </button>
            </div>
          </div>

          {/* Main Passport Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with HP Logo */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-hp-blue rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">HP</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{device.model}</h2>
                    <p className="text-white/70">{device.series}</p>
                    <p className="text-sm text-white/50 mt-1">S/N: {device.serialNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getHealthColor(device.healthScore)}`}>
                    {device.healthScore}%
                  </div>
                  <p className="text-sm text-white/60">Health Score</p>
                </div>
              </div>

              {/* Phase Badge */}
              <div className="absolute bottom-4 right-6">
                <span className={`px-4 py-1.5 rounded-full text-sm font-medium text-white ${getPhaseColor(device.lifecycle.phase)}`}>
                  {device.lifecycle.phase.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Battery Health */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Battery className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">Battery</span>
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
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Thermometer className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">Temperature</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {device.temperature}°C
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Optimal range</p>
                </div>

                {/* Storage */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <HardDrive className="w-5 h-5 text-purple-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">Storage</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
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
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <Cpu className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">RAM</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
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
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <Cpu className="w-5 h-5 text-slate-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">BIOS</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    v{device.bios}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Updated {device.lastUpdate}</p>
                </div>

                {/* Connectivity */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                      <Wifi className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">Connectivity</span>
                  </div>
                  <div className="flex gap-3">
                    <Wifi className="w-6 h-6 text-green-500" />
                    <Bluetooth className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Lifecycle Timeline */}
              <div className="mt-6 p-6 bg-gradient-to-r from-hp-blue/5 to-purple-5 dark:from-hp-blue/10 dark:to-purple-10 rounded-2xl">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-hp-blue" />
                  Lifecycle Timeline
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Purchased</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{device.purchaseDate}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                  <div className="text-center">
                    <div className="w-10 h-10 bg-hp-blue rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Warranty Ends</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{device.warrantyEnd}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Info className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">Support Ends</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{device.lifecycle.endOfSupport}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                  <div className="text-center">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <X className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-slate-500">End of Life</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{device.lifecycle.endOfLife}</p>
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
                <div className="flex items-center gap-2">
              <Link 
                href="/"
                className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Link>
              <button
      onClick={onClick}
      className="fixed bottom-20 right-6 z-40 p-4 bg-gradient-to-br from-hp-blue to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
    >
      <QrCode className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Scan Device Passport
      </span>
    </button>
            </div>
  );
}
