import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CHART_DATA } from '../constants';

const ProjectChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800">Distribuição por Material</h3>
        <p className="text-sm text-slate-400">Projetos ativos nos últimos 6 meses</p>
      </div>
      
      <div className="flex-1 w-full min-h-[200px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={CHART_DATA}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {CHART_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
              itemStyle={{ color: '#475569', fontWeight: 600 }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="block text-2xl font-bold text-violet-900">100%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Total</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {CHART_DATA.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
            <span className="text-xs font-medium text-slate-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectChart;