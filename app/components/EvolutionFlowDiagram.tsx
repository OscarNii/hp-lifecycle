'use client';

import { useState } from 'react';
import { EvolutionNode } from '../data/mockData';
import { CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react';

interface EvolutionFlowDiagramProps {
  data: EvolutionNode[];
}

export default function EvolutionFlowDiagram({ data }: EvolutionFlowDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500 border-green-600 text-white';
      case 'discontinued':
        return 'bg-orange-500 border-orange-600 text-white';
      case 'eol':
        return 'bg-red-500 border-red-600 text-white';
      default:
        return 'bg-gray-500 border-gray-600 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4" />;
      case 'discontinued':
        return <AlertCircle className="w-4 h-4" />;
      case 'eol':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'discontinued':
        return 'Discontinued';
      case 'eol':
        return 'End of Life';
      default:
        return status;
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      {/* Flow Diagram */}
      <div className="relative min-w-[800px] py-8 px-4">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '400px' }}>
          {data.map((node) => {
            if (node.connectedTo.length === 0) return null;
            const nextNode = data.find((n) => n.id === node.connectedTo[0]);
            if (!nextNode) return null;
            
            const startX = (node.position.x * 100) + 50;
            const startY = (node.position.y * 80) + 60;
            const endX = (nextNode.position.x * 100) + 50;
            const endY = (nextNode.position.y * 80) + 60;
            
            return (
              <path
                key={`line-${node.id}`}
                d={`M ${startX} ${startY} C ${startX} ${(startY + endY) / 2}, ${endX} ${(startY + endY) / 2}, ${endX} ${endY}`}
                stroke={nextNode.status === 'active' ? '#2ECC71' : nextNode.status === 'discontinued' ? '#F39C12' : '#E74C3C'}
                strokeWidth="2"
                fill="none"
                strokeDasharray={nextNode.status === 'eol' ? '5,5' : 'none'}
                opacity="0.6"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="relative">
          {data.map((node) => (
            <div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                selectedNode === node.id ? 'scale-110 z-20' : 'hover:scale-105 z-10'
              }`}
              style={{
                left: `${node.position.x * 100 + 50}px`,
                top: `${node.position.y * 80 + 60}px`,
              }}
              onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
            >
              <div
                className={`flex flex-col items-center p-3 rounded-xl border-2 shadow-lg transition-all ${
                  selectedNode === node.id
                    ? getStatusColor(node.status) + ' ring-4 ring-offset-2 ring-blue-400'
                    : getStatusColor(node.status) + ' opacity-90 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-1">
                  {getStatusIcon(node.status)}
                  <span className="font-bold text-sm">{node.name}</span>
                </div>
                <span className="text-xs opacity-80 mt-1">{node.year}</span>
              </div>

              {/* Selected Node Details */}
              {selectedNode === node.id && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[200px] z-30">
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-gray-800">{node.name}</p>
                    <p className="text-gray-500">Generation: {node.generation}</p>
                    <p className="text-gray-500">Released: {node.year}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        node.status === 'active' ? 'bg-green-100 text-green-800' :
                        node.status === 'discontinued' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {getStatusLabel(node.status)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-600">Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
          <span className="text-sm text-gray-600">Discontinued</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-600">End of Life</span>
        </div>
      </div>
    </div>
  );
}
