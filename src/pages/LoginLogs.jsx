import React from 'react';
import { 
  Activity, 
  Search, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Monitor,
  Clock,
  User,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LoginLogs = () => {
  const { t } = useLanguage();
  const logs = [
    { no: 1, pk: 9, id: 'qodwm@naver.com', ip: '::1', duration: '-', lastSeen: '-', type: 'Admin', status: 'Login', date: '2026-04-14 20:41:22' },
    { no: 2, pk: 8, id: 'qodwm0236@gmail.com', ip: '116.44.179.36', duration: '-', lastSeen: '2024-12-02 20:56:01', type: 'User', status: 'Logout', date: '2024-12-03 02:26:01' },
    { no: 3, pk: 7, id: 'qodwm@naver.com', ip: '116.44.179.36', duration: '-', lastSeen: '-', type: 'Admin', status: 'Login', date: '2024-12-03 02:19:41' },
    { no: 4, pk: 6, id: 'qodwm0236@gmail.com', ip: '116.44.179.36', duration: '-', lastSeen: '2024-12-02 20:49:06', type: 'User', status: 'Logout', date: '2024-12-03 02:19:06' },
    { no: 5, pk: 5, id: 'qodwm@naver.com', ip: '116.44.179.36', duration: '-', lastSeen: '-', type: 'Admin', status: 'Login', date: '2024-12-02 23:27:42' },
  ];

  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('login_logs_title')}</h2>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_reg_date')}</label>
            <div className="flex items-center gap-2">
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
              <span className="text-text-muted font-bold">~</span>
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <div className="flex-1 flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[120px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_login_status')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                    <option>{t('filter_login_status')}</option>
                    <option>Login</option>
                    <option>Logout</option>
                </select>
            </div>
            <div className="flex-1 min-w-[100px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_user_type')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                    <option>{t('common_status')}: {t('common_total')}</option>
                    <option>Admin</option>
                    <option>User</option>
                </select>
            </div>
            <div className="flex-[2] min-w-[240px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_keyword')}</label>
                <div className="flex gap-2">
                    <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[100px] cursor-pointer">
                        <option>{t('common_id')}</option>
                        <option>{t('col_ip_address')}</option>
                    </select>
                    <div className="relative flex-1">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder={t('keyword_placeholder')}
                            className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> {t('common_search')}
                </button>
                <button className="px-4 py-2 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
                    <RotateCcw size={14} />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-2">
        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">
            {t('common_total')} : {logs.length} {t('common_list')} (1/1) {t('common_page')}
        </span>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">{t('common_id')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">{t('col_ip_address')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">{t('col_duration')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">{t('col_last_seen')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">{t('filter_user_type')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">{t('common_status')}</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">{t('common_date')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {logs.map((log) => (
                <tr key={log.pk} className="hover:bg-panel-hover transition-colors">
                  <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{log.no}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-main">{log.pk}</td>
                  <td className="py-4 px-4 text-xs font-medium text-text-main underline decoration-text-muted/30 underline-offset-4">{log.id}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-secondary">{log.ip}</td>
                  <td className="py-4 px-4 text-xs text-text-muted text-center italic">{log.duration}</td>
                  <td className="py-4 px-4 text-[11px] font-medium text-text-muted font-mono">{log.lastSeen}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${
                        log.type === 'Admin' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-secondary/10 text-secondary border border-secondary/20'
                    }`}>
                        {log.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${
                        log.status === 'Login' ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}>
                        {log.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[11px] font-medium text-text-muted text-right font-mono">{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all flex items-center gap-1">
                {t('common_previous')}
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20">
                1
            </div>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all flex items-center gap-1">
                {t('common_next')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginLogs;
