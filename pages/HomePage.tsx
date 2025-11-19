import React from 'react';
import NewsSection from '../components/NewsSection';
import { Play, Users, Trophy } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'vegeta') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-screen bg-slate-950">
      {/* HERO SECTION */}
      <div className="relative h-[80vh] w-full overflow-hidden clip-diagonal">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://placehold.co/1920x1080/0a0a0a/333?text=EPIC+BATTLE+SCENE')",
            filter: "brightness(0.6)"
          }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center z-10">
          <h2 className="text-db-orange font-display font-bold text-2xl tracking-[0.5em] mb-2 animate-pulse">
            ASSEMBLE YOUR SQUAD
          </h2>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white leading-none mb-6">
            DRAGON BALL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-db-gold to-yellow-200">
              GENSHIN
            </span>
          </h1>
          <p className="max-w-xl text-gray-300 text-lg mb-8 leading-relaxed">
            Experience the ultimate team-based battle. Unite with legendary warriors, 
            master the elements, and conquer the tournament of power in this 
            groundbreaking crossover strategy RPG.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
               onClick={() => onNavigate('vegeta')}
               className="clip-button bg-ssj4-red hover:bg-red-600 text-white font-display font-bold text-xl px-10 py-4 transition-all flex items-center gap-3"
            >
              FEATURED HERO: VEGETA
            </button>
            <button className="clip-button border-2 border-white hover:bg-white hover:text-black text-white font-display font-bold text-xl px-10 py-4 transition-all flex items-center gap-3">
              <Play fill="currentColor" className="w-5 h-5" />
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES BANNER */}
      <div className="bg-db-gold py-10 relative z-20 -mt-20 mx-4 md:mx-20 rounded-sm shadow-2xl">
        <div className="flex flex-col md:flex-row justify-around items-center text-slate-900 gap-8 md:gap-0">
          <div className="flex flex-col items-center text-center">
             <Users className="w-10 h-10 mb-2" />
             <h3 className="font-display font-bold text-2xl">4vs4 BATTLES</h3>
             <p className="font-bold opacity-70">REAL-TIME STRATEGY</p>
          </div>
          <div className="w-full md:w-px h-px md:h-16 bg-slate-900/20"></div>
          <div className="flex flex-col items-center text-center">
             <Trophy className="w-10 h-10 mb-2" />
             <h3 className="font-display font-bold text-2xl">RANKED LEAGUE</h3>
             <p className="font-bold opacity-70">PROVE YOUR POWER</p>
          </div>
          <div className="w-full md:w-px h-px md:h-16 bg-slate-900/20"></div>
          <div className="flex flex-col items-center text-center">
             <div className="w-10 h-10 bg-slate-900 text-db-gold rounded-full flex items-center justify-center font-bold text-xl mb-2">Z</div>
             <h3 className="font-display font-bold text-2xl">COLLECT HEROES</h3>
             <p className="font-bold opacity-70">OVER 100 WARRIORS</p>
          </div>
        </div>
      </div>

      <NewsSection />

      {/* BOTTOM CTA */}
      <section className="py-24 bg-black relative flex items-center justify-center">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
         <div className="text-center z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              ARE YOU READY TO FIGHT?
            </h2>
            <button className="bg-white text-black hover:bg-db-gold font-display font-bold text-2xl px-12 py-4 rounded-full transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              DOWNLOAD NOW
            </button>
            <p className="text-gray-500 mt-4 text-sm">Available on PC, iOS, and Android</p>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
