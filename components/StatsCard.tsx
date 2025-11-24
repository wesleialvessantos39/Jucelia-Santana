import React from 'react';
import { Metric } from '../types';

const StatsCard: React.FC<{ metric: Metric }> = ({ metric }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border border-slate-50">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${metric.positive ? 'bg-violet-50 text-violet-600' : 'bg-orange-50 text-orange-600'}`}>
          <metric.icon size={24} strokeWidth={2} />
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {metric.trend}
        </span>
      </div>
      <h3 className="text-slate-500 text-sm font-medium mb-1">{metric.label}</h3>
      <p className="text-3xl font-bold text-slate-800">{metric.value}</p>
    </div>
  );
};

export default StatsCard;