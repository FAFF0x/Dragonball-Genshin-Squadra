import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Zap, Shield, Flame } from 'lucide-react';

// Color constants
const SSJ4_RED = '#be123c';

const dataRadar = [
  { subject: 'ATK', A: 120, fullMark: 150 },
  { subject: 'KI', A: 110, fullMark: 150 },
  { subject: 'SPD', A: 130, fullMark: 150 },
  { subject: 'DEF', A: 90, fullMark: 150 },
  { subject: 'HP', A: 100, fullMark: 150 },
  { subject: 'TECH', A: 145, fullMark: 150 },
];

const dataBar = [
  { name: 'Base', power: 5000 },
  { name: 'SSJ', power: 15000 },
  { name: 'SSJ2', power: 25000 },
  { name: 'SSJ4', power: 85000 },
];

const VegetaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative font-sans">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-black pointer-events-none"></div>
      
      {/* Main Hero Area */}
      <div className="relative min-h-screen flex flex-col items-center pt-24 pb-12">
        
        {/* Character Title */}
        <div className="text-center z-10 mb-8 animate-fade-in-down">
          <h3 className="text-ssj4-red font-display tracking-[0.5em] font-bold text-xl uppercase mb-2">Legendary Fighter</h3>
          <h1 className="text-6xl md:text-8xl font-display font-bold italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-[0_0_15px_rgba(190,18,60,0.5)]">
            VEGETA
          </h1>
          <div className="inline-block bg-ssj4-red text-white px-4 py-1 rounded skew-x-[-10deg] mt-2 border border-red-400 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
            <span className="font-bold text-2xl block skew-x-[10deg]">SUPER SAIYAN 4</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 relative z-10">
          
          {/* Left: Visual & Stats */}
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* Main Character Art Placeholder */}
            <div className="relative w-full aspect-square max-w-lg group">
               <div className="absolute inset-0 bg-ssj4-red/20 rounded-full blur-[100px] animate-pulse"></div>
               {/* Image Container - Simulating the Cutout */}
               <div className="relative w-full h-full flex items-center justify-center">
                 <img 
                   src="https://placehold.co/600x800/transparent/be123c?text=SSJ4+Vegeta+Render" 
                   alt="SSJ4 Vegeta"
                   className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(190,18,60,0.6)] z-20 hover:scale-105 transition-transform duration-500"
                 />
                 {/* Particle effects simulation */}
                 <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full blur-[1px] animate-[ping_3s_linear_infinite]"></div>
                    <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-yellow-400 rounded-full blur-[1px] animate-[ping_2s_linear_infinite]"></div>
                 </div>
               </div>
            </div>

            {/* Radar Chart Card */}
            <div className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ssj4-red to-transparent"></div>
               <h4 className="font-display text-2xl font-bold mb-4 text-gray-200 flex items-center gap-2">
                 <div className="w-2 h-8 bg-ssj4-red"></div> BATTLE STATS
               </h4>
               <div className="h-[300px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                     <PolarGrid stroke="#374151" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 'bold' }} />
                     <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                     <Radar
                       name="Vegeta"
                       dataKey="A"
                       stroke={SSJ4_RED}
                       strokeWidth={3}
                       fill={SSJ4_RED}
                       fillOpacity={0.4}
                     />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#374151', color: 'white' }}
                        itemStyle={{ color: '#fbbf24' }}
                     />
                   </RadarChart>
                 </ResponsiveContainer>
               </div>
            </div>
          </div>

          {/* Right: Info & Skills */}
          <div className="space-y-8 pt-10">
             
             {/* Description */}
             <div className="bg-gradient-to-r from-slate-900/80 to-transparent p-8 border-l-4 border-ssj4-red rounded-r-lg">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "I am the Prince of all Saiyans once again! This primal power... it flows through every vein. 
                  Unlike Kakarot, I have achieved this form through pure royal will. 
                  Witness the ultimate evolution of the Saiyan race!"
                </p>
             </div>

             {/* Power Scaling Bar Chart */}
             <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                <h4 className="font-display text-xl font-bold text-db-gold mb-4 uppercase">Power Multiplier Analysis</h4>
                <div className="h-48 w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={dataBar} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={50} tick={{fill: 'white'}} />
                        <Tooltip 
                           cursor={{fill: 'transparent'}}
                           contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                        />
                        <Bar dataKey="power" fill={SSJ4_RED} radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>

             {/* Skills Grid */}
             <div>
               <h4 className="font-display text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">SIGNATURE ABILITIES</h4>
               <div className="grid gap-4">
                  {/* Skill 1 */}
                  <div className="bg-slate-800/50 hover:bg-ssj4-red/10 p-4 rounded border border-slate-700 hover:border-ssj4-red transition-colors flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-black rounded flex items-center justify-center border border-gray-600 group-hover:border-ssj4-red">
                       <Zap className="text-yellow-400" />
                    </div>
                    <div>
                       <h5 className="font-bold text-xl text-db-gold group-hover:text-white transition-colors">FINAL SHINE ATTACK</h5>
                       <p className="text-sm text-gray-400 mt-1">Massive Green Ki blast. Deals immense damage and lowers enemy DEF by 30%.</p>
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="bg-slate-800/50 hover:bg-ssj4-red/10 p-4 rounded border border-slate-700 hover:border-ssj4-red transition-colors flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-black rounded flex items-center justify-center border border-gray-600 group-hover:border-ssj4-red">
                       <Shield className="text-blue-400" />
                    </div>
                    <div>
                       <h5 className="font-bold text-xl text-db-gold group-hover:text-white transition-colors">SAIYAN PRIDE</h5>
                       <p className="text-sm text-gray-400 mt-1">Passive: ATK +150% when performing a Super Attack. Counterattacks with high probability.</p>
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div className="bg-slate-800/50 hover:bg-ssj4-red/10 p-4 rounded border border-slate-700 hover:border-ssj4-red transition-colors flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-black rounded flex items-center justify-center border border-gray-600 group-hover:border-ssj4-red">
                       <Flame className="text-red-500" />
                    </div>
                    <div>
                       <h5 className="font-bold text-xl text-db-gold group-hover:text-white transition-colors">ULTIMATE EVOLUTION</h5>
                       <p className="text-sm text-gray-400 mt-1">Transforms Ki Sphere into Rainbow. Regenerates HP by 10% per turn.</p>
                    </div>
                  </div>
               </div>
             </div>

             <button className="w-full py-4 bg-gradient-to-r from-ssj4-red to-red-700 hover:from-red-500 hover:to-red-800 text-white font-display font-bold text-xl rounded shadow-lg shadow-red-900/50 uppercase tracking-widest hover:scale-[1.02] transition-transform">
               Summon Vegeta Now
             </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default VegetaPage;