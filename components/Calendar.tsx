import React from 'react';
import { AGENDA } from '../constants';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar as CalIcon, Plus } from 'lucide-react';

const Calendar: React.FC = () => {
  // Simulating November 2023 grid
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  // Helper to find events for a day
  const getEventsForDay = (day: number) => {
    return AGENDA.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day + 1; // +1 slight offset adjustment for demo viz
    });
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 h-[calc(100vh-2rem)] flex flex-col">
       {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Agenda</h2>
          <p className="text-slate-500 mt-1">Visitas técnicas, reuniões e cronograma de montagens.</p>
        </div>
        <div className="flex items-center gap-3">
             <div className="flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-violet-100 text-violet-700">Mês</button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-700">Semana</button>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-700">Dia</button>
             </div>
             <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-violet-200">
                <Plus size={20} />
                Agendar
            </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          
          {/* Calendar Grid */}
          <div className="flex-1 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <CalIcon className="text-violet-500" />
                        Novembro 2023
                    </h3>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-violet-600 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-violet-600 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 mb-4">
                    {weekDays.map(d => (
                        <div key={d} className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">{d}</div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2 flex-1 auto-rows-fr">
                    {/* Empty slots for start of month (assuming starts on Wednesday for demo) */}
                    {[1,2,3].map(i => <div key={`empty-${i}`} className="p-2"></div>)}
                    
                    {days.map(day => {
                        const dayEvents = getEventsForDay(day);
                        return (
                            <div key={day} className="border border-slate-50 rounded-2xl p-2 hover:border-violet-200 hover:shadow-md transition-all group flex flex-col min-h-[80px]">
                                <span className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full mb-1 ${
                                    day === 20 ? 'bg-violet-600 text-white shadow-md shadow-violet-300' : 'text-slate-700 group-hover:bg-violet-50 group-hover:text-violet-600'
                                }`}>
                                    {day}
                                </span>
                                <div className="space-y-1 overflow-y-auto no-scrollbar">
                                    {dayEvents.map((evt, idx) => (
                                        <div key={idx} className={`text-[10px] px-2 py-1 rounded-md font-medium truncate ${
                                            evt.type === 'Visita Técnica' ? 'bg-orange-50 text-orange-700' :
                                            evt.type === 'Entrega' ? 'bg-green-50 text-green-700' :
                                            evt.type === 'Montagem' ? 'bg-blue-50 text-blue-700' :
                                            'bg-violet-50 text-violet-700'
                                        }`}>
                                            {evt.time} - {evt.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
          </div>

          {/* Sidebar Agenda */}
          <div className="w-full lg:w-96 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col">
             <h3 className="text-lg font-bold text-slate-800 mb-6">Próximos Eventos</h3>
             <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {AGENDA.map((item) => (
                    <div key={item.id} className="group flex gap-4 p-4 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all cursor-pointer">
                        <div className="flex flex-col items-center min-w-[3.5rem]">
                            <span className="text-xs font-bold text-slate-400 uppercase">{new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'short' })}</span>
                            <span className="text-xl font-bold text-slate-800">{new Date(item.date).getDate()}</span>
                        </div>
                        <div className="w-px bg-slate-100 group-hover:bg-violet-200"></div>
                        <div className="flex-1">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide mb-1 ${
                                 item.type === 'Visita Técnica' ? 'bg-orange-100 text-orange-600' :
                                 item.type === 'Entrega' ? 'bg-green-100 text-green-600' :
                                 'bg-violet-100 text-violet-600'
                            }`}>
                                {item.type}
                            </span>
                            <h4 className="font-semibold text-slate-800 text-sm leading-tight mb-2">{item.title}</h4>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Clock size={12} className="text-violet-400" />
                                    {item.time}
                                </div>
                                {item.location && (
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                        <MapPin size={12} className="text-violet-400" />
                                        {item.location}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </div>
    </div>
  );
};

export default Calendar;