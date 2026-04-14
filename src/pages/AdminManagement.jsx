import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  RotateCcw,
  Edit3,
  UserPlus,
  Shield,
  Activity,
  Users,
  CheckCircle,
  Database,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AdminManagement = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  
  const mockAdmins = [
    { 
      no: 1, 
      pk: 1, 
      email: 'qodwm@naver.com', 
      mobile: '9999651556', 
      name: 'Super Admin', 
      part: 1, 
      status: 'Active', 
      lastLogin: '2021-12-07 11:13:49', 
      regDate: '2024-06-05 03:08:02' 
    }
  ];

  const stats = [
    { label: 'Total Admins', value: '12', icon: Shield, color: 'text-primary' },
    { label: 'Active Now', value: '4', icon: Activity, color: 'text-emerald-500' },
    { label: 'Pending Access', value: '0', icon: Users, color: 'text-amber-500' },
    { label: 'System Healthy', value: '100%', icon: CheckCircle, color: 'text-blue-500' },
  ];

  return (
    <div className="animate-enter space-y-8 pb-12">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
            <h2 className="text-3xl font-black text-text-main tracking-tight bg-gradient-to-r from-text-main to-text-muted bg-clip-text">Admin Management</h2>
            <p className="text-sm text-text-muted font-medium">Manage administrative access and system permissions</p>
        </div>
        <Link 
          to="/admin-registration" 
          className="group relative px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-2xl text-[10px] sm:text-xs font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 sm:gap-3 overflow-hidden shrink-0"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <UserPlus size={16} /> <span className="hidden xs:inline">Admin Registration</span><span className="xs:hidden">Add Admin</span>
        </Link>
      </div>

      {/* Modern Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
            <div key={i} className="bg-panel border border-border-custom p-6 rounded-[24px] shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-inputBg border border-border-custom transition-transform group-hover:scale-110 duration-500`}>
                        <stat.icon size={20} className={stat.color} />
                    </div>
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-widest bg-inputBg px-2 py-1 rounded-lg">Live</span>
                </div>
                <div>
                    <div className="text-2xl font-black text-text-main leading-tight mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</div>
                </div>
            </div>
        ))}
      </div>

      {/* Advanced Filter Panel */}
      <div className="bg-panel border border-border-custom rounded-[28px] p-2 shadow-xl relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[30px] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-panel rounded-[26px] p-6 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:flex-1 space-y-3">
                    <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Registration Timeline</label>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input type="date" className="w-full sm:flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        <span className="text-text-muted font-bold hidden sm:inline">to</span>
                        <input type="date" className="w-full sm:flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                </div>

                <div className="w-full lg:flex-[1.5] space-y-3">
                     <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] ml-1">Advanced Search</label>
                     <div className="flex flex-col sm:flex-row gap-2">
                        <div className="grid grid-cols-2 sm:flex gap-2">
                            <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                                <option>Status: All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <button className="sm:hidden p-2.5 bg-inputBg border border-border-custom text-text-muted rounded-xl hover:text-text-main transition-all flex items-center justify-center">
                                <RotateCcw size={16} />
                            </button>
                        </div>
                        <div className="relative flex-1">
                            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                            <input 
                                type="text" 
                                placeholder="Search by ID, Name or Mobile..." 
                                className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-11 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                            />
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 sm:flex-initial px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                                Go
                            </button>
                            <button className="hidden sm:flex p-2.5 bg-inputBg border border-border-custom text-text-muted rounded-xl hover:text-text-main transition-all">
                                <RotateCcw size={16} />
                            </button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      {/* Premium Table Container */}
      <div className="bg-panel border border-border-custom rounded-[32px] shadow-2xl overflow-hidden relative group">
        <div className="p-6 border-b border-border-custom flex justify-between items-center bg-inputBg/20">
            <h3 className="text-lg font-black text-text-main tracking-tight">Access Directory</h3>
            <span className="text-[10px] font-black text-text-muted uppercase tracking-widest bg-inputBg px-3 py-1.5 rounded-full shadow-inner border border-border-custom">
                {mockAdmins.length} Total Records
            </span>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[1100px]">
            <thead>
              <tr className="bg-inputBg/40">
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom">Admin ID</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom">Contact</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom">Full Name</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom text-center">Part</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom">Status</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom">Activity History</th>
                <th className="py-5 px-6 text-[10px] font-black text-text-muted uppercase tracking-widest border-b border-border-custom text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/50">
              {mockAdmins.length > 0 ? (
                mockAdmins.map((admin) => (
                  <tr key={admin.pk} className="hover:bg-inputBg/30 transition-all group/row">
                    <td className="py-5 px-6">
                        <div className="text-sm font-black text-text-main mb-0.5">{admin.email}</div>
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-wide">PK: {admin.pk} <span className="mx-1">•</span> No: {admin.no}</div>
                    </td>
                    <td className="py-5 px-6">
                        <div className="text-xs font-bold text-text-secondary font-mono tracking-tight">{admin.mobile}</div>
                    </td>
                    <td className="py-5 px-6">
                        <div className="text-xs font-black text-text-main">{admin.name}</div>
                    </td>
                    <td className="py-5 px-6 text-center">
                        <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                            {admin.part}
                        </span>
                    </td>
                    <td className="py-5 px-6 text-xs font-bold text-text-main">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${admin.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]'}`}></div>
                            <span className={admin.status === 'Active' ? 'text-emerald-500' : 'text-rose-500'}>{admin.status}</span>
                        </div>
                    </td>
                    <td className="py-5 px-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-muted">
                                <span className="uppercase tracking-widest">Login:</span>
                                <span className="font-mono">{admin.lastLogin}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-muted">
                                <span className="uppercase tracking-widest">Reg:</span>
                                <span className="font-mono">{admin.regDate}</span>
                            </div>
                        </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link to={`/admin-edit/${admin.pk}`} className="inline-flex items-center gap-2 px-4 py-2 bg-inputBg border border-border-custom text-text-main rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all group/edit">
                          Details <ArrowRight size={12} className="group-hover/edit:translate-x-1 transition-transform" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-32 text-center">
                    <div className="flex flex-col items-center gap-4 text-text-muted/20">
                      <div className="w-20 h-20 rounded-full bg-inputBg border-2 border-dashed border-border-custom flex items-center justify-center">
                        <Database size={40} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-text-muted uppercase tracking-normal">No Administration Data Found</h4>
                        <p className="text-[10px] font-medium text-text-muted/60">Try adjusting your filters or search keywords</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Premium Pagination */}
        <div className="p-8 flex justify-center items-center gap-4 border-t border-border-custom bg-gradient-to-b from-transparent to-inputBg/10">
            <button className="w-10 h-10 border border-border-custom rounded-2xl flex items-center justify-center text-text-muted hover:bg-panel-hover transition-all opacity-50"><ChevronLeft size={18} /></button>
            <div className="flex gap-2">
                {[1].map(p => (
                    <button key={p} className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all ${p === 1 ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'text-text-muted hover:bg-panel-hover'}`}>{p}</button>
                ))}
            </div>
            <button className="w-10 h-10 border border-border-custom rounded-2xl flex items-center justify-center text-text-muted hover:bg-panel-hover transition-all opacity-50"><ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
