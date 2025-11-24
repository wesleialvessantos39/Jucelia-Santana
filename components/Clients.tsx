import React from 'react';
import { CLIENTS } from '../constants';
import { Mail, Phone, ExternalLink, Plus, MoreVertical, Building2, Wallet } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
       {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Clientes</h2>
          <p className="text-slate-500 mt-1">Gestão de relacionamento e histórico de obras.</p>
        </div>
        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-violet-200">
          <Plus size={20} />
          Adicionar Cliente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {CLIENTS.map((client) => (
            <div key={client.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                        <img src={client.avatar} alt={client.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-50 shadow-sm" />
                        <div>
                            <h3 className="font-bold text-lg text-slate-800">{client.name}</h3>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                                <Building2 size={12} />
                                {client.company}
                            </div>
                        </div>
                    </div>
                    <button className="text-slate-300 hover:text-violet-600 p-2 rounded-full hover:bg-violet-50 transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 group-hover:bg-violet-50/50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-violet-600 shadow-sm">
                            <Mail size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-400">Email</p>
                            <p className="text-sm font-medium text-slate-700 truncate">{client.email}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 group-hover:bg-violet-50/50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-violet-600 shadow-sm">
                            <Phone size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-400">Telefone</p>
                            <p className="text-sm font-medium text-slate-700 truncate">{client.phone}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                    <div className="text-center p-2 rounded-xl bg-slate-50">
                        <p className="text-xs text-slate-400 mb-1">Projetos Ativos</p>
                        <p className="text-xl font-bold text-slate-800">{client.activeProjects}</p>
                    </div>
                    <div className="text-center p-2 rounded-xl bg-slate-50">
                        <p className="text-xs text-slate-400 mb-1">Total Investido</p>
                        <p className="text-xl font-bold text-emerald-600 flex items-center justify-center gap-1">
                            {client.totalSpent}
                        </p>
                    </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-xl border border-violet-100 text-violet-600 font-medium hover:bg-violet-600 hover:text-white transition-all flex items-center justify-center gap-2 text-sm">
                    Ver Perfil Completo <ExternalLink size={16} />
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;