'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Version Explorer', href: '/version-explorer' },
  { name: 'Evolution Portal', href: '/evolution-portal' },
  { name: 'Technical Hub', href: '/technical-hub' },
  { name: 'API & Insights', href: '/api-insights' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6e] text-white px-4 py-3 shadow-lg backdrop-blur-md bg-opacity-90 sticky top-0 z-50">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-3">
          {/* HP Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <svg viewBox="0 0 100 100" className="w-6 h-6 sm:w-8 sm:h-8">
                <circle cx="50" cy="50" r="45" fill="#0096D6" />
                <text x="50" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial">HP</text>
              </svg>
            </div>
            <div className="hidden xs:block">
              <h1 className="text-sm sm:text-lg font-semibold tracking-tight">Product Version &</h1>
              <p className="text-[10px] sm:text-xs text-white/70">Lifecycle Hub</p>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: User Profile & Settings - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
            <Settings className="w-5 h-5 text-white/80" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition-colors backdrop-blur-sm">
            <div className="w-8 h-8 bg-[#0096D6]/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">Admin</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 pb-3">
          <div className="flex flex-col gap-1 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile User Profile */}
            <div className="mt-2 pt-2 border-t border-white/20 flex items-center gap-3 px-4">
              <div className="w-8 h-8 bg-[#0096D6] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Admin</span>
              <button className="ml-auto p-1">
                <Settings className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
