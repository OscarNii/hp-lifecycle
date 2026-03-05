'use client';

import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterOption {
  value: string;
  label: string;
}

interface SidebarFiltersProps {
  yearOptions: FilterOption[];
  categoryOptions: FilterOption[];
  onYearChange?: (year: string) => void;
  onCategoryChange?: (category: string) => void;
}

export default function SidebarFilters({ 
  yearOptions, 
  categoryOptions,
  onYearChange,
  onCategoryChange 
}: SidebarFiltersProps) {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedYear(value);
    onYearChange?.(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onCategoryChange?.(value);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-[#0096D6]" />
        <h3 className="font-semibold text-[#0A1F44]">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <div className="relative">
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-sm"
            >
              <option value="">All Years</option>
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-sm"
            >
              <option value="">All Categories</option>
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hardware Specs</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-[#0096D6] focus:ring-[#0096D6]" />
              <span>Intel Processor</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-[#0096D6] focus:ring-[#0096D6]" />
              <span>AMD Processor</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-[#0096D6] focus:ring-[#0096D6]" />
              <span>16GB+ RAM</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-[#0096D6] focus:ring-[#0096D6]" />
              <span>SSD Storage</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
