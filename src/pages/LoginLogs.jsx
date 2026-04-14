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

const LoginLogs = () => {
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
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Users Login Logs Lists</h2>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest whitespace-nowrap">Registration Date</label>
            <div className="flex items-center gap-1.5">
                <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
                <span className="text-text-muted">~</span>
                <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>

          <div className="flex flex-1 items-center gap-2">
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[120px]">
                <option>Login Status</option>
                <option>Login</option>
                <option>Logout</option>
            </select>
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[100px]">
                <option>User</option>
                <option>Admin</option>
                <option>User</option>
            </select>
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[140px]">
                <option>Search Options</option>
                <option>ID</option>
                <option>IP Address</option>
            </select>
            <div className="relative flex-1">
                <input 
                    type="text" 
                    placeholder="Please select a search opt" 
                    className="w-full bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
            </div>
            <button className="px-6 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <Search size={14} /> Search
            </button>
            <button className="px-5 py-1.5 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all flex items-center gap-2">
                <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-2">
        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Total : 9 Count (1/1) Page</span>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Id</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Ip Address</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Duration(Seconds)</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Last Seen</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">User Type</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">Registration Date</th>
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
                Previous
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20">
                1
            </div>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all flex items-center gap-1">
                Next
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginLogs;
