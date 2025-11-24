import React, { useState } from 'react';
import { RECENT_PROJECTS } from '../constants';
import { ArrowUpRight, Maximize2, Share2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const portfolioItems = RECENT_PROJECTS; // In a real app, this would filter for completed projects only
  
  const categories = ['Todos', 'Metálica', 'Concreto', 'Madeira', 'Mista'];
  
  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Portfólio de Obras</h2>
        <p className="text-slate-500">Apresentação técnica e visual dos principais projetos estruturais desenvolvidos e executados.</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeFilter === cat 
                        ? 'bg-violet-600 text-white shadow-md' 
                        : 'text-slate-500 hover:text-violet-600 hover:bg-slate-50'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
            <div key={item.id} className="group relative break-inside-avoid">
                <div className="relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white aspect-[4/5]">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[0.2]" 
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content on Hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                             <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                                {item.type}
                             </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                        <p className="text-violet-200 text-sm line-clamp-2 mb-6 opacity-90">{item.description}</p>
                        
                        <div className="flex items-center gap-3">
                            <button className="flex-1 bg-white text-violet-900 py-3 rounded-xl font-bold text-sm hover:bg-violet-50 transition-colors flex items-center justify-center gap-2">
                                Ver Detalhes <ArrowUpRight size={16} />
                            </button>
                            <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-colors border border-white/20">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                    
                    {/* Icon on default state */}
                    <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-full text-slate-800 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 shadow-lg">
                        <Maximize2 size={18} />
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;