import React from 'react';
import { NewsItem } from '../types';
import { ArrowRight } from 'lucide-react';

const SAMPLE_NEWS: NewsItem[] = [
  {
    id: 1,
    date: '2023.10.25',
    category: 'EVENT',
    title: 'LEGENDARY SAIYAN ARRIVAL: SSJ4 VEGETA SUMMON EVENT',
    imageUrl: 'https://placehold.co/600x400/2a0a0a/crimson?text=SSJ4+Event',
  },
  {
    id: 2,
    date: '2023.10.22',
    category: 'UPDATE',
    title: 'Ver 2.5.0 Patch Notes - New Team Mechanics Added',
    imageUrl: 'https://placehold.co/600x400/0f172a/white?text=Patch+Notes',
  },
  {
    id: 3,
    date: '2023.10.20',
    category: 'MAINTENANCE',
    title: 'Scheduled Server Maintenance (10/26)',
    imageUrl: 'https://placehold.co/600x400/334155/white?text=Maintenance',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-db-orange/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-db-gold font-display font-bold text-4xl tracking-tighter">LATEST NEWS</h2>
            <div className="h-1 w-20 bg-db-orange mt-2"></div>
          </div>
          <button className="text-white flex items-center gap-2 font-bold hover:text-db-gold transition-colors">
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_NEWS.map((news) => (
            <div key={news.id} className="group bg-slate-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-db-orange/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 hover:border-db-orange">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs font-bold rounded text-white">
                  {news.category}
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-400 text-sm font-mono mb-2">{news.date}</p>
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-db-gold transition-colors">
                  {news.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
