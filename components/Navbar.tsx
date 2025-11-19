import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'vegeta') => void;
  currentPage: 'home' | 'vegeta';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'news', label: 'NEWS' },
    { id: 'vegeta', label: 'HERO: SSJ4 VEGETA', special: true },
    { id: 'media', label: 'MEDIA' },
    { id: 'community', label: 'COMMUNITY' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-db-gold rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-slate-900 text-xl">DB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-lg tracking-wider leading-none">GENSHIN</span>
              <span className="font-display font-bold text-db-orange text-sm tracking-[0.2em] leading-none">SQUADRA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => item.id === 'vegeta' || item.id === 'home' ? onNavigate(item.id as any) : null}
                className={`font-display font-bold text-sm tracking-widest transition-colors duration-200 ${
                  item.special 
                    ? 'text-ssj4-red hover:text-red-400 border border-ssj4-red px-4 py-1 rounded hover:bg-ssj4-red/10' 
                    : currentPage === item.id ? 'text-db-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Globe className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
             {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'vegeta' || item.id === 'home') onNavigate(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left font-display font-bold py-3 text-lg ${
                   item.special ? 'text-ssj4-red' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
