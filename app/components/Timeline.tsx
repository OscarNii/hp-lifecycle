'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar } from 'lucide-react';
import { VersionHistory } from '../data/mockData';

interface TimelineProps {
  versions: VersionHistory[];
}

export default function Timeline({ versions }: TimelineProps) {
  const [expandedVersion, setExpandedVersion] = useState<string | null>(versions[0]?.version || null);

  const toggleVersion = (version: string) => {
    setExpandedVersion(expandedVersion === version ? null : version);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'discontinued':
        return 'bg-orange-500';
      case 'eol':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-2">
      {versions.map((version, index) => (
        <div key={version.version} className="relative">
          {/* Timeline line */}
          {index < versions.length - 1 && (
            <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-200" />
          )}
          
          {/* Version item */}
          <div 
            className={`bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 ${
              expandedVersion === version.version ? 'shadow-md' : 'hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleVersion(version.version)}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <div className={`w-8 h-8 rounded-full ${getStatusColor(version.status)} flex items-center justify-center text-white font-bold text-sm`}>
                {version.version.replace('G', '')}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#0A1F44]">HP EliteBook 840 {version.version}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    version.status === 'active' ? 'bg-green-100 text-green-700' :
                    version.status === 'discontinued' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {version.status.charAt(0).toUpperCase() + version.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(version.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
              {expandedVersion === version.version ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {/* Expanded content */}
            {expandedVersion === version.version && (
              <div className="px-4 pb-4 pt-0 border-t border-gray-100">
                <div className="mt-3 ml-11">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Major Changes:</h4>
                  <ul className="space-y-1">
                    {version.majorChanges.map((change, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0096D6] mt-1.5 flex-shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
