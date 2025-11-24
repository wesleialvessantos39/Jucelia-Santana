import React from 'react';
import { NavItem } from '../types';
import { LogOut, Hexagon } from 'lucide-react';
import { USER_PROFILE } from '../constants';

interface SidebarProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeTab, onTabChange }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-violet-100 flex flex-col justify-between z-50 shadow-sm transition-all duration-300">
      
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-200 shrink-0">
          <Hexagon className="text-white w-6 h-6" strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-800 tracking-tight uppercase leading-tight">JUCELIA SANTANA</h1>
          <p className="text-[10px] text-violet-500 font-bold tracking-wider">ENGENHEIRA CIVIL</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Menu Principal</p>
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200'
                  : 'text-slate-500 hover:bg-violet-50 hover:text-violet-700'
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-violet-600'}`}
                strokeWidth={2}
              />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Profile Footer */}
      <div className="p-4 mx-4 mb-6 bg-slate-50 rounded-3xl border border-slate-100">
        <div className="flex items-center gap-3 mb-3">
            {/* Using a gradient circle instead of external image to ensure it loads perfectly for the demo if image fails, 
                but using the constant value essentially. */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 p-[2px]">
             <img 
               src={USER_PROFILE.avatar} 
               alt={USER_PROFILE.name} 
               className="w-full h-full rounded-full object-cover border-2 border-white"
             />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-slate-800 truncate">{USER_PROFILE.name}</h4>
            <p className="text-xs text-slate-500 truncate">{USER_PROFILE.role}</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 text-xs font-medium text-slate-500 hover:text-red-500 py-2 transition-colors">
          <LogOut size={14} />
          Sair da conta
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;