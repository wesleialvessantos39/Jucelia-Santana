import React, { useState } from 'react';
import { RECENT_PROJECTS } from '../constants';
import { Plus, Search, Filter, MapPin, MoreHorizontal, Calendar, DollarSign, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? RECENT_PROJECTS 
    : RECENT_PROJECTS.filter(p => p.status === filter || p.type === filter);

  const categories = ['Todos', 'Em Andamento', 'Montagem', 'Fabricação', 'Metálica', 'Concreto'];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Projetos</h2>
          <p className="text-slate-500 mt-1">Gerencie o status de fabricação e montagem das estruturas.</p>
        </div>
        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-violet-200">
          <Plus size={20} />
          Novo Projeto
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                filter === cat 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200' 
                  : 'bg-slate-50 text-slate-600 hover:bg-violet-50 hover:text-violet-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar por nome ou cliente..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
            />
          </div>
          <button className="p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6">
            
            {/* Image Section */}
            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shrink-0 relative group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-violet-700 uppercase tracking-wide shadow-sm border border-violet-100">
                  {project.type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 hover:text-violet-600 transition-colors cursor-pointer">{project.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                             <Users size={14} /> {project.client}
                        </span>
                        <span className="flex items-center gap-1">
                             <MapPin size={14} /> {project.location}
                        </span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-violet-600 p-1">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4 mt-4">
                     <div className="bg-violet-50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-violet-700 text-xs font-semibold">
                        <Calendar size={14} /> {project.date}
                     </div>
                     <div className="bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                        <DollarSign size={14} /> {project.budget}
                     </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="mt-6 md:mt-0 pt-4 border-t border-slate-50 md:border-0 md:pt-0">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Status Atual</span>
                    <span className={`text-sm font-bold px-2 py-0.5 rounded w-fit ${
                        project.status === 'Concluído' ? 'bg-green-100 text-green-700' :
                        project.status === 'Montagem' ? 'bg-orange-100 text-orange-700' :
                        'bg-violet-100 text-violet-700'
                    }`}>
                        {project.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-slate-800">{project.progress}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 relative ${
                        project.status === 'Concluído' ? 'bg-green-500' : 
                        project.status === 'Montagem' ? 'bg-orange-500' : 'bg-violet-600'
                    }`} 
                    style={{ width: `${project.progress}%` }}
                  >
                      <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;