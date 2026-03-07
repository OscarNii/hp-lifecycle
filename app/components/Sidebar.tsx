'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  GitBranch, 
  Network, 
  Cpu, 
  Code, 
  Settings, 
  User,
  ChevronDown,
  Search,
  Bell,
  Menu,
  X,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Version Explorer', href: '/version-explorer', icon: GitBranch },
  { name: 'Evolution Portal', href: '/evolution-portal', icon: Network },
  { name: 'Technical Hub', href: '/technical-hub', icon: Cpu },
  { name: 'API & Insights', href: '/api-insights', icon: Code },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-[#0A1F44]/90 backdrop-blur-md text-white shadow-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed left-0 top-0 h-full z-50
        bg-gradient-to-b from-[#0A1F44] via-[#0d2545] to-[#0A1F44]
        backdrop-blur-xl border-r border-white/10
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
              {/* HP Logo */}
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                <svg viewBox="0 0 100 100" className="w-8 h-8">
                  <circle cx="50" cy="50" r="45" fill="#0096D6" />
                  <text x="50" y="58" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="Arial">HP</text>
                </svg>
              </div>
              {!isCollapsed && (
                <div>
                  <h1 className="text-white font-bold text-sm tracking-tight">HP Lifecycle</h1>
                  <p className="text-white/50 text-xs">Enterprise Hub</p>
                </div>
              )}
            </div>
            
            {/* Desktop Collapse Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isCollapsed ? (
                <PanelLeft className="w-4 h-4 text-white/70" />
              ) : (
                <PanelLeftClose className="w-4 h-4 text-white/70" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl
                  transition-all duration-200 group relative
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#0096D6] to-[#0077b3] text-white shadow-lg shadow-[#0096D6]/20' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'}`} />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
                
                {/* Active Indicator */}
                {isActive && !isCollapsed && (
                  <div className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full" />
                )}

                {/* Tooltip for Collapsed State */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-[#0A1F44] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Section - User & Settings */}
        <div className="p-3 border-t border-white/10">
          {/* Quick Search (Collapsed) */}
          {!isCollapsed && (
            <div className="mb-3 px-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[#0096D6] focus:bg-white/10 transition-all"
                />
              </div>
            </div>
          )}

          {/* Notifications */}
          {!isCollapsed && (
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/10 transition-colors mb-2">
              <div className="flex items-center gap-2 text-white/70">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Notifications</span>
              </div>
              <span className="w-2 h-2 bg-[#0096D6] rounded-full" />
            </button>
          )}

          {/* User Profile */}
          <div className={`
            flex items-center gap-3 p-2 rounded-xl 
            bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer
            ${isCollapsed ? 'justify-center' : ''}
          `}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#0096D6] to-[#0077b3] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <User className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">Admin User</p>
                  <p className="text-white/50 text-xs truncate">admin@hp.com</p>
                </div>
                <ChevronDown className="w-4 h-4 text-white/50" />
              </>
            )}
          </div>

          {/* Settings */}
          <button className={`
            w-full flex items-center gap-3 px-3 py-2 mt-2 rounded-lg 
            hover:bg-white/10 transition-colors text-white/70 hover:text-white
            ${isCollapsed ? 'justify-center' : ''}
          `}>
            <Settings className="w-4 h-4" />
            {!isCollapsed && <span className="text-sm">Settings</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
