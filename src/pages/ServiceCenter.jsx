import React from 'react';
import { Headset, MessageSquare, Search, Filter, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCenter = () => {
    const { t } = useLanguage();

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('nav_service_center')}</h2>
          <p className="text-xs text-text-muted font-medium">{t('nav_service_center_subtitle')}</p>
        </div>
        <div className="flex gap-2">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-panel bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">OP</div>
                ))}
            </div>
            <button className="ml-2 px-4 py-2 bg-panel border border-border-custom rounded-xl text-xs font-bold text-text-secondary hover:bg-panel-hover transition-all">Support Stats</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {[
          { label: t('stat_unassigned'), value: '12', icon: <MessageSquare className="text-amber-500"/> },
          { label: t('stat_in_progress'), value: '45', icon: <Clock className="text-primary"/> },
          { label: t('stat_resolved'), value: '128', icon: <CheckCircle className="text-emerald-500"/> },
        ].map((stat) => (
          <div key={stat.label} className="bg-panel border border-border-custom rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-inputBg flex items-center justify-center border border-border-custom">
                {stat.icon}
              </div>
              <div>
                <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">{stat.label}</div>
                <div className="text-2xl font-bold text-text-main">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden min-h-[300px] flex items-center justify-center">
          <p className="text-sm text-text-muted">{t('loading_tickets')}</p>
      </div>
    </div>
  );
};

export default ServiceCenter;
