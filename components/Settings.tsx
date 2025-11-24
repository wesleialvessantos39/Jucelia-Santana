import React from 'react';
import { USER_PROFILE } from '../constants';
import { Save, Bell, Lock, User, Eye, Moon, Globe, LogOut } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Configurações</h2>
        <p className="text-slate-500 mt-1">Gerencie seu perfil e preferências do sistema.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <User className="text-violet-600" />
            Perfil Profissional
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                    <img src={USER_PROFILE.avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-slate-50 shadow-md" />
                    <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                        Alterar Foto
                    </button>
                </div>
                <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold uppercase">
                    Admin
                </span>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Nome Completo</label>
                    <input type="text" defaultValue={USER_PROFILE.name} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Cargo</label>
                    <input type="text" defaultValue={USER_PROFILE.role} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Especialidade</label>
                    <input type="text" defaultValue={USER_PROFILE.specialty} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Email</label>
                    <input type="email" defaultValue="jucelia.eng@exemplo.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" />
                </div>
                <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-slate-600">Bio / Apresentação</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500" defaultValue="Engenheira Civil apaixonada por grandes estruturas metálicas. Foco em segurança, economia e design inovador." />
                </div>
            </div>
        </div>

        <div className="mt-8 flex justify-end">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-violet-200">
                <Save size={18} />
                Salvar Alterações
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Bell className="text-violet-600" />
                    Notificações
                </h3>
                <div className="space-y-4">
                    {['Novos Projetos', 'Prazos de Entrega', 'Mensagens de Clientes', 'Atualizações do Sistema'].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <span className="text-slate-600 font-medium">{item}</span>
                            <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${idx < 2 ? 'bg-violet-500' : 'bg-slate-200'}`}>
                                <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${idx < 2 ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
           </div>

           <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <Eye className="text-violet-600" />
                    Aparência & Privacidade
                </h3>
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all text-left group">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:text-violet-600 group-hover:bg-white transition-colors">
                            <Lock size={18} />
                        </div>
                        <span className="font-medium text-slate-700">Alterar Senha</span>
                    </div>
                    <span className="text-xs text-slate-400">Última troca: 3 meses</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all text-left group">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:text-violet-600 group-hover:bg-white transition-colors">
                            <Moon size={18} />
                        </div>
                        <span className="font-medium text-slate-700">Tema Escuro</span>
                    </div>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">Em Breve</span>
                </button>
                 <button className="w-full flex items-center justify-between p-4 rounded-xl border border-red-50 hover:border-red-200 hover:bg-red-50 transition-all text-left group mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg text-red-500 group-hover:bg-white transition-colors">
                            <LogOut size={18} />
                        </div>
                        <span className="font-medium text-red-600">Sair da Conta</span>
                    </div>
                </button>
           </div>
      </div>
    </div>
  );
};

export default Settings;