import React from 'react';
import { 
  FileCheck, 
  Search, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  UserCheck,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react';

const KYCDetails = () => {
  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Kyc Detail List</h2>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
          <div className="w-full lg:w-auto space-y-2">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1 min-w-[120px]">Registration Date</label>
            <div className="flex items-center gap-2 flex-1">
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
              <span className="text-text-muted font-bold">~</span>
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <div className="flex-1 flex flex-wrap items-end gap-3 justify-end">
            <div className="flex-1 min-w-[120px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Status</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                    <option>Status</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                </select>
            </div>
            <div className="flex-[2] min-w-[240px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">Search Keyword</label>
                <div className="flex gap-2">
                    <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[100px] cursor-pointer">
                        <option>Name</option>
                        <option>PK</option>
                    </select>
                    <div className="relative flex-1">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Enter keyword..."
                            className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> Search
                </button>
                <button className="px-4 py-2 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
                <RotateCcw size={14} />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-2">
        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Total : 0 Count (1/1) Page</span>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[1400px]">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Name</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Date Of Birth</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Address</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">City</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Country</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Zipcode</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Government Issued Document</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Correction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="11" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                            <FileCheck size={24} />
                        </div>
                        <span className="text-xs font-bold text-text-muted">No data available in table</span>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">Previous</button>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default KYCDetails;
