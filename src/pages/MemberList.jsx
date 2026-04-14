import { Link } from 'react-router-dom';
import {
  Download,
  RotateCcw,
  Eye,
  Edit,
  Search
} from 'lucide-react';

const MemberList = () => {
  const mockMembers = [
    {
      no: 1,
      pk: 1,
      loginType: 'Google Login',
      id: 'qodwm0236@gmail.com',
      mobile: '-',
      usdt: '-',
      tron: '-',
      xrp: '-',
      eth: '-',
      btc: '-',
      aiw: '-',
      withdrawalStatus: 'Possible',
      status: 'Active',
      rating: '-',
      registrationDate: '2024-12-02 14:26:46'
    }
  ];

  return (
    <div className="animate-enter space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Member List</h2>
        <button className="px-5 py-2.5 bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
          <Download size={14} /> Download Excel
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest whitespace-nowrap">Registration Date</label>
            <div className="flex items-center gap-1.5">
              <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
              <span className="text-text-muted">~</span>
              <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>
          
          <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[130px] shrink-0">
            <option>=Member status=</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[220px] shrink-0">
            <option>=Withdrawal And Exchange Status=</option>
            <option>Possible</option>
            <option>Impossible</option>
          </select>

          <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[130px] shrink-0">
            <option>=Search Options=</option>
            <option>ID (Email)</option>
            <option>Mobile</option>
          </select>

          <div className="relative flex-1 min-w-[180px]">
            <input
              type="text"
              placeholder="Please select a search opt"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          <div className="flex gap-2 shrink-0">
            <button className="px-6 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <Search size={14} /> Search
            </button>
            <button className="px-5 py-1.5 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all flex items-center gap-2">
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-end px-2">
        <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Total : {mockMembers.length} Count (1/1) Page</span>
      </div>

      {/* Table Section */}
      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden overflow-x-auto scrollbar-hide">
        <table className="w-full text-left min-w-[2000px]">
          <thead>
            <tr className="bg-inputBg/50 border-b border-border-custom">
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">Login Type</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">ID (Account)</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">Mobile Number</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">USDT Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">TRON Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">XRP Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">ETH Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">BTC Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">AIW Wallet Address</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">View Coin Holdings</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">Withdrawal And Exchange Status</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">Membership Status</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">User Rating</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">Registration Date</th>
              <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">Correction</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-custom">
            {mockMembers.map((member) => (
              <tr key={member.pk} className="hover:bg-panel-hover transition-colors">
                <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{member.no}</td>
                <td className="py-4 px-4 text-xs font-bold text-text-main">{member.pk}</td>
                <td className="py-4 px-4 text-[11px] font-bold text-text-secondary">{member.loginType}</td>
                <td className="py-4 px-4 text-xs font-medium text-text-main underline decoration-text-muted/30 underline-offset-8">{member.id}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.mobile}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.usdt}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.tron}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.xrp}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.eth}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.btc}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.aiw}</td>
                <td className="py-4 px-4 text-center">
                  <button className="inline-flex p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-all">
                    <Eye size={14} />
                  </button>
                </td>
                <td className="py-4 px-4 text-xs font-bold text-text-main text-center">{member.withdrawalStatus}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-lg ${member.status === 'Active' ? 'bg-success text-white' : 'bg-text-muted text-white'}`}>
                    {member.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{member.rating}</td>
                <td className="py-4 px-4 text-xs font-medium text-text-main text-center whitespace-nowrap">{member.registrationDate}</td>
                <td className="py-4 px-4 text-center">
                  <Link
                    to={`/edit-member/${member.pk}`}
                    className="inline-flex p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-md shadow-primary/20"
                  >
                    <Edit size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
          <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all">Previous</button>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20">1</div>
          <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 transition-all">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
