'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Version Explorer', href: '/version-explorer' },
  { name: 'Evolution Portal', href: '/evolution-portal' },
  { name: 'Technical Hub', href: '/technical-hub' },
  { name: 'API & Insights', href: '/api-insights' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-[#0A1F44] to-[#1a3a6e] text-white px-6 py-3 shadow-lg">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-4">
          {/* HP Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <circle cx="50" cy="50" r="45" fill="#0096D6" />
                <text x="50" y="58" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" fontFamily="Arial">HP</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold tracking-tight">Product Version &</h1>
              <p className="text-xs text-white/70">Lifecycle Hub</p>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: User Profile & Settings */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Settings className="w-5 h-5 text-white/80" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-[#0096D6] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:block text-sm font-medium">Admin</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </div>
        </div>
      </div>
    </nav>
  );
}
