import React, { useState } from 'react';
import { Search, Filter, MoreVertical, UserCheck, ShieldAlert, Clock } from 'lucide-react';

const mockUsers = [
  { id: 'USR-001', name: 'Kim Min-su', email: 'ms.kim@crypto.kr', status: 'Active', wallets: 3, balance: '$12,450.00', date: '2024-10-20' },
  { id: 'USR-002', name: 'Park Ji-won', email: 'jw.park@toss.im', status: 'Active', wallets: 5, balance: '$84,200.50', date: '2024-10-18' },
  { id: 'USR-003', name: 'Lee Do-hyun', email: 'dh.lee@kakao.com', status: 'Suspended', wallets: 1, balance: '$50.00', date: '2024-10-15' },
  { id: 'USR-004', name: 'Choi Yu-jin', email: 'yj.choi@naver.com', status: 'Pending KYC', wallets: 0, balance: '$0.00', date: '2024-10-22' },
  { id: 'USR-005', name: 'Jung Hae-in', email: 'hi.jung@gmail.com', status: 'Active', wallets: 2, balance: '$3,150.20', date: '2024-10-21' },
  { id: 'USR-006', name: 'Kang So-ra', email: 'sr.kang@outlook.com', status: 'Active', wallets: 4, balance: '$15,800.00', date: '2024-10-19' },
  { id: 'USR-007', name: 'Yoo Jae-suk', email: 'js.yoo@running.kr', status: 'Active', wallets: 8, balance: '$1,240,000.00', date: '2024-10-10' },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">User Management</h2>
          <p className="text-xs text-text-muted font-medium">Manage and verify platform participants</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-panel border border-border-custom rounded-xl text-xs font-bold text-text-secondary hover:bg-panel-hover transition-all flex items-center gap-2 shadow-sm">
                <Filter size={14} /> Filter
            </button>
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all">Add User</button>
        </div>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-custom bg-inputBg/50">
          <div className="relative w-full max-w-[360px]">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search by name, email..." 
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-10 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-inputBg/30">
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest text-center">No</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">User Profile</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Account Status</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Total Assets</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Joined Date</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {mockUsers.map((user, idx) => (
                <tr key={user.id} className="hover:bg-panel-hover transition-colors">
                  <td className="py-4 px-6 text-xs font-bold text-text-muted text-center">{idx + 1}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xs border border-primary/20">
                            {user.name[0]}
                        </div>
                        <div>
                            <div className="text-xs font-bold text-text-main leading-tight">{user.name}</div>
                            <div className="text-xs font-medium text-text-muted">{user.email}</div>
                        </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                     <div className="flex items-center gap-2">
                         {user.status === 'Active' ? <UserCheck size={14} className="text-emerald-500"/> : user.status === 'Suspended' ? <ShieldAlert size={14} className="text-rose-500"/> : <Clock size={14} className="text-amber-500"/>}
                         <span className={`text-xs font-bold ${
                             user.status === 'Active' ? 'text-emerald-500' : 
                             user.status === 'Suspended' ? 'text-rose-500' :
                             'text-amber-500'
                         }`}>
                            {user.status}
                        </span>
                     </div>
                  </td>
                  <td className="py-4 px-6 text-xs font-bold text-text-main uppercase tracking-tight">{user.balance}</td>
                  <td className="py-4 px-6 text-xs font-medium text-text-muted">{user.date}</td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-text-muted hover:text-text-main transition-colors">
                        <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border-custom bg-inputBg/30 flex justify-between items-center text-xs font-bold text-text-muted">
            <button className="px-4 py-1.5 bg-panel border border-border-custom rounded-lg hover:text-text-main shadow-sm disabled:opacity-50" disabled>Prev</button>
            <div className="flex gap-1.5">
                {[1,2,3,4].map(p => (
                    <button key={p} className={`w-7 h-7 rounded-lg transition-all ${p === 1 ? 'bg-primary text-white shadow-sm' : 'hover:bg-panel-hover'}`}>{p}</button>
                ))}
            </div>
            <button className="px-4 py-1.5 bg-panel border border-border-custom rounded-lg hover:text-text-main shadow-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
