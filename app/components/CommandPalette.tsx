'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Command, X, Zap, AlertTriangle, Laptop, ChevronRight, CheckCircle } from 'lucide-react';
import { useToast } from './Toast';

interface CommandResult {
  id: string;
  type: 'search' | 'action' | 'retirement';
  title: string;
  description: string;
  items?: CommandItem[];
}

interface CommandItem {
  id: string;
  name: string;
  status: 'selected' | 'pending' | 'completed';
  details?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CommandResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedItems, setSelectedItems] = useState<CommandItem[]>([]);
  const { addToast } = useToast();

  // Parse natural language commands
  const processCommand = useCallback((input: string) => {
    const lowerInput = input.toLowerCase();
    
    // Retirement workflow detection
    if (lowerInput.includes('retire') && lowerInput.includes('zbbook')) {
      return {
        id: 'retire-zbook',
        type: 'retirement' as const,
        title: 'Batch Retirement Workflow',
        description: 'Retire ZBook laptops with battery wear > 80%',
        items: [
          { id: '1', name: 'ZBook Studio G9', status: 'selected' as const, details: 'Battery: 85% wear' },
          { id: '2', name: 'ZBook Fury G8', status: 'selected' as const, details: 'Battery: 92% wear' },
          { id: '3', name: 'ZBook Power G9', status: 'pending' as const, details: 'Battery: 78% wear' },
          { id: '4', name: 'ZBook Create G7', status: 'pending' as const, details: 'Battery: 81% wear' },
        ]
      };
    }
    
    // Generic search
    if (lowerInput.includes('search') || lowerInput.includes('find')) {
      return {
        id: 'search',
        type: 'search' as const,
        title: 'Search Results',
        description: `Found results for "${input}"`,
        items: []
      };
    }
    
    return null;
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      const result = processCommand(query);
      setResults(result);
      if (result?.type === 'retirement') {
        setSelectedItems(result.items?.filter(i => i.status === 'selected') || []);
      }
    } else {
      setResults(null);
      setSelectedItems([]);
    }
  }, [query, processCommand]);

  const executeAction = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      addToast('Batch retirement workflow initiated for 2 devices', 'success');
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Command Palette */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="p-2 bg-hp-blue/10 rounded-lg">
            <Command className="w-5 h-5 text-hp-blue" />
          </div>
          <input
            type="text"
            placeholder="Type a command... (e.g., 'Retire all ZBook laptops with >80% battery wear')"
            className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button onClick={onClose} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {query.length < 3 && (
            <div className="p-6 text-center text-slate-500">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Start typing to search or execute commands</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Retire ZBooks', 'Find EliteBook', 'Check battery health'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-hp-blue/10 hover:text-hp-blue transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results && (
            <div className="p-4">
              {/* Result Header */}
              <div className="flex items-center gap-3 mb-4">
                {results.type === 'retirement' && (
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Zap className="w-5 h-5 text-orange-500" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{results.title}</h3>
                  <p className="text-sm text-slate-500">{results.description}</p>
                </div>
              </div>

              {/* Items List */}
              {results.items && results.items.length > 0 && (
                <div className="space-y-2 mb-4">
                  {results.items.map((item) => (
                    <div
                      key={item.id}
                      className={`
                        flex items-center gap-3 p-3 rounded-xl border transition-all
                        ${item.status === 'selected' 
                          ? 'border-hp-blue bg-hp-blue/5' 
                          : 'border-slate-200 dark:border-slate-700'}
                      `}
                    >
                      <div className={`
                        w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${item.status === 'selected' ? 'border-hp-blue bg-hp-blue' : 'border-slate-300'}
                        ${item.status === 'completed' ? 'border-green-500 bg-green-500' : ''}
                      `}>
                        {item.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900 dark:text-white">{item.name}</p>
                        {item.details && (
                          <p className="text-sm text-slate-500">{item.details}</p>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              {results.type === 'retirement' && (
                <button
                  onClick={executeAction}
                  disabled={isProcessing}
                  className="w-full py-3 bg-hp-blue text-white rounded-xl font-medium hover:bg-hp-blue/90 transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Execute Batch Retirement ({selectedItems.length} devices)
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border">↵</kbd> to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-700 rounded border">↑↓</kbd> to navigate
            </span>
          </div>
          <span>HP Agentic Command Engine</span>
        </div>
      </div>
    </div>
  );
}

// Floating trigger button
export function CommandPaletteTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-hp-blue text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
    >
      <Command className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        AI Command Center
      </span>
    </button>
  );
}
