import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  UserPlus, 
  Search, 
  Filter, 
  Edit3, 
  Calendar, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  MoreVertical
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

  return (
    <div className="animate-enter space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Admin List</h2>
        <Link to="/admin-registration" className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
            Registration
        </Link>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-text-secondary whitespace-nowrap">Registration Date</label>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <input 
                        type="date" 
                        className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                </div>
                <span className="text-text-muted">—</span>
                <div className="relative">
                    <input 
                        type="date" 
                        className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                </div>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-2">
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-2 text-xs focus:outline-none min-w-[120px]">
                <option>=Status=</option>
                <option>Active</option>
                <option>Inactive</option>
            </select>
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-2 text-xs focus:outline-none min-w-[140px]">
                <option>=Search Option=</option>
                <option>Email</option>
                <option>Name</option>
                <option>Mobile</option>
            </select>
            <div className="relative flex-1 max-w-sm">
                <input 
                    type="text" 
                    placeholder="Please select a search-opt" 
                    className="w-full bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                <Search size={14} /> Search
            </button>
            <button className="px-5 py-2 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all flex items-center gap-2">
                <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* Stats Indicator */}
      <div className="flex justify-end px-2">
        <span className="text-[11px] font-bold text-text-muted">Total : {mockAdmins.length} Count (1/1) Page</span>
      </div>

      {/* Table Section */}
      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Email Id</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Mobile Number</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Part</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Last Login</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Registration Date</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Edit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {mockAdmins.map((admin) => (
                <tr key={admin.pk} className="hover:bg-panel-hover transition-colors">
                  <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{admin.no}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-main">{admin.pk}</td>
                  <td className="py-4 px-4 text-xs font-medium text-text-main underline decoration-text-muted/30 underline-offset-4">{admin.email}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-secondary text-center tracking-tight">{admin.mobile}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-main">{admin.name}</td>
                  <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{admin.part}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2 py-0.5 bg-emerald-500 text-white rounded text-[10px] font-bold uppercase tracking-wider">
                        {admin.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[11px] font-medium text-text-muted font-mono">{admin.lastLogin}</td>
                  <td className="py-4 px-4 text-[11px] font-medium text-text-muted font-mono">{admin.regDate}</td>
                  <td className="py-4 px-4 text-center">
                    <Link to={`/admin-edit/${admin.pk}`} className="inline-flex p-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-white transition-all">
                        <Edit3 size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-6 border-t border-border-custom bg-inputBg/20 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all flex items-center gap-1">
                Previous
            </button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20 cursor-default">
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

export default AdminManagement;
