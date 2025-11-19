import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VegetaPage from './pages/VegetaPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'vegeta'>('home');

  const handleNavigate = (page: 'home' | 'vegeta') => {
    // Simple scroll to top on nav
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-db-gold selection:text-black">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="pt-0">
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : (
          <VegetaPage />
        )}
      </main>

      <footer className="bg-black py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-bold text-2xl text-white mb-4">DB GENSHIN SQUADRA</h2>
            <p className="text-gray-500 text-sm max-w-sm">
              This is a promotional demonstration website inspired by Dragon Ball games. 
              All images and characters are simulated placeholders. 
              Original characters © BIRD STUDIO / SHUEISHA, TOEI ANIMATION.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">LINKS</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-db-gold cursor-pointer">Official Website</li>
              <li className="hover:text-db-gold cursor-pointer">Terms of Service</li>
              <li className="hover:text-db-gold cursor-pointer">Privacy Policy</li>
              <li className="hover:text-db-gold cursor-pointer">Support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-blue-500 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-sky-400 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-red-600 cursor-pointer transition-colors"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-700 text-xs mt-10">
          © 2023 Bandai Namco Entertainment Inc. Simulated for Demo.
        </div>
      </footer>
    </div>
  );
};

export default App;
