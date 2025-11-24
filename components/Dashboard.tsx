import React from 'react';
import { KPIS, RECENT_PROJECTS, AGENDA, USER_PROFILE } from '../constants';
import StatsCard from './StatsCard';
import ProjectChart from './ProjectChart';
import { Search, Bell, Filter, MoreHorizontal, CalendarClock, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Olá, <span className="text-violet-600">{USER_PROFILE.name.split(' ')[0]}</span>
          </h2>
          <p className="text-slate-500 mt-1">Aqui está o resumo dos seus projetos estruturais hoje.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar projeto..." 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 w-64 transition-all"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-violet-600 hover:border-violet-200 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
        </div>
      </header>

      {/* KPI Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {KPIS.map((metric, idx) => (
          <StatsCard key={idx} metric={metric} />
        ))}
      </section>

      {/* Middle Section: Chart & Agenda */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-1 h-96">
          <ProjectChart />
        </div>

        {/* Agenda / Upcoming */}
        <div className="lg:col-span-2 bg-violet-600 rounded-3xl p-8 text-white shadow-xl shadow-violet-200 relative overflow-hidden flex flex-col justify-between">
            {/* Decoration Circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500 rounded-full opacity-20 blur-2xl"></div>

            <div className="relative z-10 flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl font-bold">Agenda do Dia</h3>
                    <p className="text-violet-200 text-sm mt-1">Seus compromissos prioritários</p>
                </div>
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                    <CalendarClock className="text-white w-6 h-6" />
                </div>
            </div>

            <div className="relative z-10 space-y-4">
                {AGENDA.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-white/20 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center justify-center bg-white text-violet-700 w-14 h-14 rounded-xl font-bold shadow-sm">
                            <span className="text-xs uppercase opacity-70">HOJE</span>
                            <span className="text-lg leading-none">{item.time}</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-white">{item.title}</h4>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-violet-800/50 text-[10px] text-violet-100 uppercase tracking-wider">
                                {item.type}
                            </span>
                        </div>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ArrowRight size={18} className="text-violet-200" />
                        </button>
                    </div>
                ))}
            </div>
            
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-center">
                 <button className="text-sm font-medium text-violet-100 hover:text-white transition-colors">Ver calendário completo</button>
            </div>
        </div>
      </section>

      {/* Recent Projects Portfolio Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Projetos Recentes</h3>
            <p className="text-sm text-slate-400">Atualizações de status e entregas</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-violet-600 bg-violet-50 px-4 py-2 rounded-full hover:bg-violet-100 transition-colors">
            <Filter size={16} />
            Filtrar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-violet-700 uppercase tracking-wide shadow-sm">
                  {project.type}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-bold text-slate-800 line-clamp-1 group-hover:text-violet-600 transition-colors">{project.title}</h4>
                        <p className="text-xs text-slate-400">{project.client}</p>
                    </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1.5 font-medium">
                    <span className={project.progress === 100 ? "text-green-600" : "text-violet-600"}>
                        {project.status}
                    </span>
                    <span className="text-slate-400">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${project.progress === 100 ? 'bg-green-500' : 'bg-violet-500'}`} 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-medium">{project.date}</span>
                    <button className="p-1.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;