'use client';

import { useState, useEffect } from 'react';
import { Search, Loader2, Smartphone, Monitor, Tablet, X, ExternalLink, Cpu, HardDrive, Monitor as MonitorIcon, Scale } from 'lucide-react';
import dynamic from 'next/dynamic';
import DashboardCard from './components/DashboardCard';
import { Skeleton } from './components/Skeleton';
import { useDebounce } from './hooks/useDebounce';
import { searchHPProducts, HPProduct } from './data/mockData';

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
  
  // Debounce search input (300ms)
  const debouncedQuery = useDebounce(searchQuery, 300);

  // Handle live search
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      setIsSearching(true);
      // Use the real search function
      const results = searchHPProducts(debouncedQuery);
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
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Discontinued': return 'bg-orange-100 text-orange-700';
      case 'End of Life': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Hero Section with Glass Effect */}
      <div className="bg-gradient-to-r from-[#0A1F44]/90 to-[#1a3a6e]/90 backdrop-blur-lg px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            HP Product Version & Lifecycle Hub
          </h1>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Explore HP product versions, track lifecycle status, and discover upgrade paths for your enterprise devices.
          </p>
          
          {/* Search Container with Glass Effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 relative">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search HP products (e.g., EliteBook 840, ProBook, ZBook)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => debouncedQuery.length >= 2 && setShowResults(true)}
                  className="w-full pl-12 pr-10 py-3 rounded-xl border border-white/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-gray-700 shadow-inner"
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
              <button className="btn-primary px-6 sm:px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore
              </button>
            </div>

            {/* Live Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute left-4 right-4 sm:left-auto sm:w-[calc(100%-2rem)] sm:max-w-[calc(512px-2rem)] mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className="w-full p-3 text-left hover:bg-blue-50/50 transition-colors border-b border-gray-50 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.series} • {product.category}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.lifecycle.status)}`}>
                        {product.lifecycle.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Device Icons for Mobile Hint */}
            <div className="flex justify-center gap-4 mt-4 text-white/50">
              <Smartphone className="w-5 h-5" />
              <Tablet className="w-5 h-5" />
              <Monitor className="w-5 h-5" />
            </div>

            {/* Selected Product Details */}
            {selectedProduct && (
              <div className="mt-4 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 animate-fade-in">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-semibold text-lg">{selectedProduct.name}</p>
                    <p className="text-white/70 text-sm">SKU: {selectedProduct.sku}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProduct.lifecycle.status)}`}>
                    {selectedProduct.lifecycle.status}
                  </span>
                </div>
                
                {/* Product Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Cpu className="w-4 h-4 mx-auto text-white/70 mb-1" />
                    <p className="text-xs text-white/70">Processor</p>
                    <p className="text-xs text-white font-medium truncate">{selectedProduct.specs.processor}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <Scale className="w-4 h-4 mx-auto text-white/70 mb-1" />
                    <p className="text-xs text-white/70">Memory</p>
                    <p className="text-xs text-white font-medium">{selectedProduct.specs.memory}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <HardDrive className="w-4 h-4 mx-auto text-white/70 mb-1" />
                    <p className="text-xs text-white/70">Storage</p>
                    <p className="text-xs text-white font-medium truncate">{selectedProduct.specs.storage}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <MonitorIcon className="w-4 h-4 mx-auto text-white/70 mb-1" />
                    <p className="text-xs text-white/70">Display</p>
                    <p className="text-xs text-white font-medium truncate">{selectedProduct.specs.display}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <span className="text-xs text-white/70">BIOS</span>
                    <p className="text-xs text-white font-medium block mt-1">{selectedProduct.biosVersion}</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 text-center">
                    <span className="text-xs text-white/70">Drivers</span>
                    <p className="text-xs text-white font-medium block mt-1">{selectedProduct.drivers.total} available</p>
                  </div>
                </div>

                {/* Lifecycle Info */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20 text-xs">
                  <span className="text-white/70">End of Support: <span className="text-white font-medium">{selectedProduct.lifecycle.endOfSupport}</span></span>
                  <button className="flex items-center gap-1 text-white/90 hover:text-white">
                    <ExternalLink className="w-3 h-3" /> View Details
                  </button>
                </div>
              </div>
            )}
            
            <p className="text-white/60 text-xs sm:text-sm mt-4">
              Try: EliteBook 840 G10, ProBook 450 G11, ZBook Firefly, Spectre x360
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid - Mobile Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Card 1: Recent Lookups - Glass Effect */}
          <DashboardCard title="Recent Lookups">
            <div className="space-y-3">
              {[
                { name: 'HP EliteBook 840 G8', status: 'Active', time: '2 mins ago' },
                { name: 'HP ProBook 450 G7', status: 'Active', time: '15 mins ago' },
                { name: 'HP ZBook Studio', status: 'EOL', time: '1 hour ago' },
                { name: 'HP EliteDesk 800', status: 'Active', time: '2 hours ago' },
                { name: 'HP Pavilion x360', status: 'Discontinued', time: '3 hours ago' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 sm:p-3 rounded-xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-[#0096D6] to-[#0077b3] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-xs font-bold">HP</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0A1F44] truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Active' ? 'bg-green-100 text-green-700' :
                    item.status === 'EOL' ? 'bg-red-100 text-red-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </DashboardCard>

          {/* Card 2: Critical Updates - Glass Effect */}
          <DashboardCard title="Critical Updates">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 shadow-inner">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600">Update Score</span>
                <span className="text-2xl font-bold text-[#0096D6]">72%</span>
              </div>
              <GaugeChart value={72} />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-orange-50/50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F39C12]" />
                  <span className="text-gray-600">Pending Updates</span>
                </div>
                <span className="font-semibold text-gray-800">12</span>
              </div>
              <div className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-blue-50/50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0096D6]" />
                  <span className="text-gray-600">Driver Updates</span>
                </div>
                <span className="font-semibold text-gray-800">8</span>
              </div>
              <div className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-red-50/50 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E74C3C]" />
                  <span className="text-gray-600">Security Patches</span>
                </div>
                <span className="font-semibold text-gray-800">3</span>
              </div>
            </div>
          </DashboardCard>

          {/* Card 3: Lifecycle Overview - Glass Effect */}
          <DashboardCard title="Lifecycle Overview">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 shadow-inner">
              <DonutChart />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-md transition-shadow">
                <p className="text-xl sm:text-2xl font-bold text-green-600">156</p>
                <p className="text-xs text-green-700">Active</p>
              </div>
              <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-md transition-shadow">
                <p className="text-xl sm:text-2xl font-bold text-orange-600">42</p>
                <p className="text-xs text-orange-700">Discontinued</p>
              </div>
              <div className="p-2 sm:p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-md transition-shadow">
                <p className="text-xl sm:text-2xl font-bold text-red-600">28</p>
                <p className="text-xs text-red-700">EOL</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
