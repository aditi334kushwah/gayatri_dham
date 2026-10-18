'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'HOME', href: '/' },
  {
    name: 'ABOUT US',
    href: '/about',
    subItems: [
      { name: 'Our Mission & Vision', href: '/about#mission' },
      { name: 'Yug Nirman Yojana', href: '/about#yug-nirman' },
      { name: 'Pt. Shriram Sharma Acharya Ji', href: '/about#founder' },
      { name: 'Sendhwa Campus', href: '/about#campus' },
    ],
  },
  {
    name: 'TREATMENTS',
    href: '/treatments',
    subItems: [
      { name: 'Therapeutic Yoga', href: '/treatments/yoga' },
      { name: 'Mud Therapy (मृदा चिकित्सा)', href: '/treatments/mud-therapy' },
      { name: 'Hydrotherapy (जल चिकित्सा)', href: '/treatments/hydrotherapy' },
      { name: 'Herbal Steam Care', href: '/treatments/steam-care' },
      { name: 'Diet & Fasting Therapy', href: '/treatments/diet' },
    ],
  },
  { name: 'HEALTH CAMPS', href: '/camps' },
  { name: 'GUEST HOUSE', href: '/camps#guest-house' },
  { name: 'DAILY ROUTINE', href: '/about#schedule' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Mobile menu toggle */}
        <div className="flex md:hidden py-3 justify-between w-full items-center">
          <span className="font-bold text-sm text-[#244c8c]">MENU</span>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-3.5 text-xs font-bold tracking-wider transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#ea7b11] text-white'
                      : 'text-gray-700 hover:text-[#244c8c] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {item.subItems && <ChevronDown className="w-3 h-3 opacity-70" />}
                </Link>

                {/* Submenu Dropdown */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-xs text-gray-700 hover:bg-[#244c8c] hover:text-white transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-3 px-4 space-y-2 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="border-b border-gray-50 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-gray-800 py-1"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-[#ea7b11] text-white py-2 font-bold text-xs uppercase rounded mt-2"
          >
            Donate / Seva
          </Link>
        </div>
      )}
    </nav>
  );
}