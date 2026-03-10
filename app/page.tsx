'use client';

import { useState, useEffect } from 'react';
import { Search, Loader2, Smartphone, Monitor, Tablet, X, ExternalLink, Cpu, HardDrive, Monitor as MonitorIcon, Scale, QrCode } from 'lucide-react';
import dynamic from 'next/dynamic';
import DashboardCard from './components/DashboardCard';
import { Skeleton } from './components/Skeleton';
import { useDebounce } from './hooks/useDebounce';
import { searchHPProducts, HPProduct } from './data/mockData';
import { DigitalPassport } from './components/DigitalPassport';

// Dynamic imports for heavy chart components
const GaugeChart = dynamic(() => import('./components/charts/GaugeChart'), {
  loading: () => <Skeleton height="200px" />,
  ssr: false,
});

const DonutChart = dynamic(() => import('./components/charts/DonutChart'), {
  loading: () => <Skeleton height="200px" />,
  ssr: false,
});

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<HPProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<HPProduct | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showPassportScanner, setShowPassportScanner] = useState(false);
  
  // Debounce search input (300ms)
  const debouncedQuery = useDebounce(searchQuery, 300);

  // Handle live search
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      // Use the real search function - results are derived from debounced query
      const results = searchHPProducts(debouncedQuery);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    } else {
      setSearchResults([]);
      setShowResults(false);
      setSelectedProduct(null);
    }
  }, [debouncedQuery]);

  const handleProductSelect = (product: HPProduct) => {
    setSelectedProduct(product);
    setSearchQuery(product.name);
    setShowResults(false);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedProduct(null);
    setSearchResults([]);
    setShowResults(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-600 border border-green-500/30';
      case 'Discontinued': return 'bg-orange-500/20 text-orange-600 border border-orange-500/30';
      case 'End of Life': return 'bg-red-500/20 text-red-600 border border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-600 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Digital Passport Scanner Modal */}
      {showPassportScanner && (
        <DigitalPassport onClose={() => setShowPassportScanner(false)} />
      )}

      {/* Hero Section with Premium Glass Effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0d2545] to-[#0096D6]/80">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0096D6]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0096D6]/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            HP Product Version & <span className="text-[#0096D6]">Lifecycle Hub</span>
          </h1>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Explore HP product versions, track lifecycle status, and discover upgrade paths for your enterprise devices.
          </p>
          
          {/* Premium Glass Search Container */}
          <div className="relative backdrop-blur-2xl bg-white/10 rounded-2xl p-1 sm:p-2 border border-white/20 shadow-2xl">
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search HP products (e.g., EliteBook 840, ProBook, ZBook)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => debouncedQuery.length >= 2 && setShowResults(true)}
                    className="w-full pl-12 pr-10 py-4 rounded-xl border border-white/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-gray-800 shadow-inner placeholder:text-gray-400"
                    aria-label="Search HP products"
                  />
                  {isSearching && (
                    <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0096D6] animate-spin" />
                  )}
                  {searchQuery && !isSearching && (
                    <button 
                      onClick={handleClearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-[#0096D6] to-[#0077b3] text-white font-semibold rounded-xl shadow-lg shadow-[#0096D6]/30 hover:shadow-xl hover:shadow-[#0096D6]/40 transition-all duration-300 hover:-translate-y-0.5">
                  Explore
                </button>
              </div>

              {/* Live Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute left-4 right-4 sm:left-auto sm:w-[calc(100%-2rem)] sm:max-w-[calc(512px-2rem)] mt-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductSelect(product)}
                      className="w-full p-4 text-left hover:bg-gradient-to-r hover:from-[#0096D6]/5 hover:to-transparent transition-all border-b border-gray-100/50 last:border-b-0"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                          <p className="text-xs text-gray-500">{product.series} • {product.category}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.lifecycle.status)}`}>
                          {product.lifecycle.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Device Icons */}
              <div className="flex justify-center gap-6 mt-6 text-white/30">
                <Smartphone className="w-5 h-5" />
                <Tablet className="w-5 h-5" />
                <Monitor className="w-5 h-5" />
              </div>

              {/* Selected Product Details - Premium Card */}
              {selectedProduct && (
                <div className="mt-6 p-6 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 animate-fade-in">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white font-bold text-xl">{selectedProduct.name}</p>
                      <p className="text-white/50 text-sm">SKU: {selectedProduct.sku}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(selectedProduct.lifecycle.status)}`}>
                      {selectedProduct.lifecycle.status}
                    </span>
                  </div>
                  
                  {/* Product Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <Cpu className="w-5 h-5 mx-auto text-white/70 mb-2" />
                      <p className="text-xs text-white/60">Processor</p>
                      <p className="text-sm text-white font-medium truncate">{selectedProduct.specs.processor}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <Scale className="w-5 h-5 mx-auto text-white/70 mb-2" />
                      <p className="text-xs text-white/60">Memory</p>
                      <p className="text-sm text-white font-medium">{selectedProduct.specs.memory}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <HardDrive className="w-5 h-5 mx-auto text-white/70 mb-2" />
                      <p className="text-xs text-white/60">Storage</p>
                      <p className="text-sm text-white font-medium truncate">{selectedProduct.specs.storage}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <MonitorIcon className="w-5 h-5 mx-auto text-white/70 mb-2" />
                      <p className="text-xs text-white/60">Display</p>
                      <p className="text-sm text-white font-medium truncate">{selectedProduct.specs.display}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <span className="text-xs text-white/60">BIOS</span>
                      <p className="text-sm text-white font-medium block mt-1">{selectedProduct.biosVersion}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <span className="text-xs text-white/60">Drivers</span>
                      <p className="text-sm text-white font-medium block mt-1">{selectedProduct.drivers.total} available</p>
                    </div>
                  </div>

                  {/* Lifecycle Info */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20 text-sm">
                    <span className="text-white/70">End of Support: <span className="text-white font-semibold">{selectedProduct.lifecycle.endOfSupport}</span></span>
                    <button className="flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all">
                      <ExternalLink className="w-4 h-4" /> View Details
                    </button>
                  </div>
                </div>
              )}
              
              <p className="text-white/40 text-xs sm:text-sm mt-6">
                Try: EliteBook 840 G10, ProBook 450 G11, ZBook Firefly, Spectre x360
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid - Premium Glass Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Digital Passport Card - New Feature */}
        <div className="mb-6">
          <DashboardCard title="HP Digital Passport" icon="scan">
            <div 
              onClick={() => setShowPassportScanner(true)}
              className="cursor-pointer group"
            >
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-gradient-to-r from-[#0096D6]/10 via-[#0096D6]/5 to-transparent border border-[#0096D6]/20 hover:border-[#0096D6]/40 transition-all hover:shadow-lg hover:shadow-[#0096D6]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0096D6] to-[#0077b3] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0096D6]/30 group-hover:scale-110 transition-transform">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0A1F44] group-hover:text-[#0096D6] transition-colors">Scan Device Passport</h3>
                  <p className="text-sm text-gray-500 mt-1">Use NFC or QR code to instantly access device health, warranty, and lifecycle information</p>
                </div>
                <div className="px-4 py-2 bg-[#0096D6] text-white rounded-xl font-medium group-hover:bg-[#0077b3] transition-colors flex items-center gap-2">
                  <span>Scan Now</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Recent Lookups - Premium Glass */}
          <DashboardCard title="Recent Lookups" icon="clock">
            <div className="space-y-2">
              {[
                { name: 'HP EliteBook 840 G8', status: 'Active', time: '2 mins ago' },
                { name: 'HP ProBook 450 G7', status: 'Active', time: '15 mins ago' },
                { name: 'HP ZBook Studio', status: 'EOL', time: '1 hour ago' },
                { name: 'HP EliteDesk 800', status: 'Active', time: '2 hours ago' },
                { name: 'HP Pavilion x360', status: 'Discontinued', time: '3 hours ago' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#0096D6]/5 hover:to-transparent transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0096D6] to-[#0077b3] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#0096D6]/20 group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">HP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0A1F44] truncate group-hover:text-[#0096D6] transition-colors">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Active' ? 'bg-green-500/15 text-green-600 border border-green-500/20' :
                    item.status === 'EOL' ? 'bg-red-500/15 text-red-600 border border-red-500/20' :
                    'bg-orange-500/15 text-orange-600 border border-orange-500/20'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Card 2: Critical Updates - Premium Card */}
          <DashboardCard title="Critical Updates" icon="alert">
            <div className="bg-gradient-to-br from-blue-50/50 to-white/50 rounded-xl p-4 border border-blue-100/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Update Score</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#0096D6] to-[#0077b3] bg-clip-text text-transparent">72%</span>
              </div>
              <GaugeChart value={72} />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm p-3 rounded-xl hover:bg-orange-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#F39C12] shadow-lg shadow-[#F39C12]/30" />
                  <span className="text-gray-600 font-medium">Pending Updates</span>
                </div>
                <span className="font-bold text-gray-800">12</span>
              </div>
              <div className="flex items-center justify-between text-sm p-3 rounded-xl hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#0096D6] shadow-lg shadow-[#0096D6]/30" />
                  <span className="text-gray-600 font-medium">Driver Updates</span>
                </div>
                <span className="font-bold text-gray-800">8</span>
              </div>
              <div className="flex items-center justify-between text-sm p-3 rounded-xl hover:bg-red-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#E74C3C] shadow-lg shadow-[#E74C3C]/30" />
                  <span className="text-gray-600 font-medium">Security Patches</span>
                </div>
                <span className="font-bold text-gray-800">3</span>
              </div>
            </div>
          </DashboardCard>

          {/* Card 3: Lifecycle Overview - Premium Card */}
          <DashboardCard title="Lifecycle Overview" icon="chart">
            <div className="bg-gradient-to-br from-green-50/50 to-white/50 rounded-xl p-4 border border-green-100/50">
              <DonutChart />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:shadow-green-500/10 transition-all cursor-pointer">
                <p className="text-2xl font-bold text-green-600">156</p>
                <p className="text-xs text-green-700 font-medium">Active</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl border border-orange-200/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer">
                <p className="text-2xl font-bold text-orange-600">42</p>
                <p className="text-xs text-orange-700 font-medium">Discontinued</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl border border-red-200/50 hover:shadow-lg hover:shadow-red-500/10 transition-all cursor-pointer">
                <p className="text-2xl font-bold text-red-600">28</p>
                <p className="text-xs text-red-700 font-medium">EOL</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
