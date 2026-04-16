import React from 'react';
import { Users, CreditCard, Activity, TrendingUp, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const Dashboard = () => {
  return (
    <div className="animate-enter space-y-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Managed', value: '$42.8M', trend: '+12.4%', icon: <CreditCard size={20}/>, color: 'primary' },
          { label: 'Active Nodes', value: '1,284', trend: '+5.2%', icon: <Users size={20}/>, color: 'success' },
          { label: 'Network Load', value: '24.8%', trend: '-2.1%', icon: <Activity size={20}/>, color: 'secondary' },
          { label: 'Market Cap', value: '$812B', trend: '+0.8%', icon: <TrendingUp size={20}/>, color: 'warning' }
        ].map((item, i) => (
          <div key={i} className="bg-panel border border-border-custom p-5 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                {item.icon}
              </div>
              <span className={`text-xs font-bold ${item.trend.startsWith('+') ? 'text-success' : 'text-danger'} bg-inputBg px-2 py-1 rounded-lg border border-border-custom`}>
                {item.trend}
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{item.label}</p>
              <h3 className="text-2xl font-bold text-text-main tracking-tight">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 bg-panel border border-border-custom p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-text-main">Transaction Volume</h3>
              <p className="text-xs text-text-muted font-medium">Real-time network throughput analysis</p>
            </div>
            <div className="flex bg-inputBg p-1 rounded-xl border border-border-custom">
              {['1H', '1D', '1W', '1M'].map(t => (
                <button key={t} className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${t === '1D' ? 'bg-primary text-white shadow-md' : 'text-text-muted hover:text-text-main'}`}>{t}</button>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: 'var(--text-muted)'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: 'var(--text-muted)'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-panel)', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold', color: 'var(--text-primary)' }}
                  itemStyle={{ color: 'var(--color-primary)' }}
                />
                <Area type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Info Sidebar Section */}
        <div className="bg-panel border border-border-custom p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-text-main mb-6">Security Pulse</h3>
          <div className="space-y-4">
            {[
              { label: 'Audit Trail', status: 'Running', color: 'success' },
              { label: 'DDoS Defense', status: 'Active', color: 'primary' },
              { label: 'Global KYC', status: 'Verified', color: 'secondary' },
              { label: 'DB Integrity', status: 'Healthy', color: 'success' }
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-inputBg rounded-xl border border-border-custom">
                <span className="text-xs font-bold text-text-secondary">{s.label}</span>
                <span className={`text-xs font-black uppercase tracking-wider px-2 py-1 bg-${s.color === 'success' ? 'emerald' : s.color === 'primary' ? 'violet' : 'cyan'}-500/10 text-${s.color === 'success' ? 'emerald' : s.color === 'primary' ? 'violet' : 'cyan'}-500 rounded-lg`}>{s.status}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3.5 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-black uppercase tracking-widest hover:bg-panel-hover transition-all">
            Full Audit Report
          </button>
        </div>
      </div>

      {/* Activity Log - High Density Table */}
      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-border-custom flex justify-between items-center bg-inputBg/50">
            <h3 className="text-lg font-bold text-text-main">Recent Activity</h3>
            <button className="p-2 text-text-muted hover:text-primary transition-colors"><Search size={18}/></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-inputBg/50">
                <th className="py-3 px-5 text-xs font-bold text-text-muted uppercase tracking-widest">Admin Event</th>
                <th className="py-3 px-5 text-xs font-bold text-text-muted uppercase tracking-widest">Node ID</th>
                <th className="py-3 px-5 text-xs font-bold text-text-muted uppercase tracking-widest">Execution Time</th>
                <th className="py-3 px-5 text-xs font-bold text-text-muted uppercase tracking-widest">Integrity Hash</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <tr key={i} className="hover:bg-panel-hover transition-colors">
                  <td className="py-3.5 px-5 text-xs font-bold text-text-primary">System Parameter Re-index</td>
                  <td className="py-3.5 px-5 text-xs font-mono text-primary font-bold tracking-tight">NODE-0{i}</td>
                  <td className="py-3.5 px-5 text-xs font-medium text-text-secondary">2 min ago</td>
                  <td className="py-3.5 px-5">
                    <span className="text-xs font-mono text-text-muted bg-inputBg px-2 py-0.5 rounded border border-border-custom">0x7a...{i}f2</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
