'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Laptop } from 'lucide-react';
import { ProductNode } from '../data/mockData';

interface ProductTreeProps {
  data: ProductNode[];
  selectedId?: string;
  onSelect?: (id: string) => void;
}

export default function ProductTree({ data, selectedId, onSelect }: ProductTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['elitebook-800', 'elitebook-840', 'probook-400', 'probook-450']));

  const toggleNode = (id: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node: ProductNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedId === node.id;

    return (
      <div key={node.id} className="select-none">
        <div
          className={`flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-colors ${
            isSelected ? 'bg-[#0096D6]/10 text-[#0096D6]' : 'hover:bg-gray-100'
          }`}
          style={{ paddingLeft: `${level * 20 + 12}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleNode(node.id);
            }
            onSelect?.(node.id);
          }}
        >
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )
          ) : (
            <div className="w-4" />
          )}
          <Laptop className={`w-4 h-4 ${isSelected ? 'text-[#0096D6]' : 'text-gray-400'}`} />
          <span className={`text-sm font-medium ${isSelected ? 'text-[#0096D6]' : 'text-gray-700'}`}>
            {node.name}
          </span>
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-2 border-l border-gray-200">
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-4">
      {data.map((node) => renderNode(node))}
    </div>
  );
}
