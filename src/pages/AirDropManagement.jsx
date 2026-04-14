import React from 'react';
import { 
  Send, 
  Search, 
  RotateCcw, 
  Download, 
  History, 
  User, 
  Coins, 
  AlertCircle,
  CreditCard,
  FileText
} from 'lucide-react';

const AirDropManagement = () => {
  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Air Drop Management</h2>
        <button className="px-5 py-2.5 bg-primary/20 text-primary border border-primary rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <Download size={14} /> Download Excel
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Table & Filters */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-panel border border-border-custom rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest whitespace-nowrap">Registration Date</label>
                <div className="flex items-center gap-1.5">
                    <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
                    <span className="text-text-muted">~</span>
                    <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[150px]">
                    <option>=Search Options=</option>
                    <option>Email</option>
                    <option>Name</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Please enter user email" 
                    className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button className="px-6 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <Search size={14} /> Search
            </button>
                <button className="px-5 py-1.5 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all">Reset</button>
            </div>
          </div>

          <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden min-h-[400px]">
            <div className="flex justify-end p-2">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">Total : 0 Count (1/1) Page</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-inputBg/50 border-b border-border-custom">
                    <th className="py-4 px-4 text-center w-12"><input type="checkbox" className="rounded-sm bg-inputBg border-border-custom" /></th>
                    <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Name</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Crypto</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Registration Date</th>
                    <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="py-16 text-center text-xs font-bold text-text-muted">
                        No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-border-custom flex justify-center items-center gap-2">
                <button className="px-3 py-1 border border-border-custom rounded-lg text-[10px] font-bold text-primary hover:bg-primary/10">Previous</button>
                <button className="px-3 py-1 border border-border-custom rounded-lg text-[10px] font-bold text-primary hover:bg-primary/10">Next</button>
            </div>
          </div>
        </div>

        {/* Right Side: AirDrop Form */}
        <div className="lg:col-span-4 bg-panel border border-border-custom rounded-2xl p-6 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><Coins size={80} /></div>
          
          <div className="space-y-4 relative z-10">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Crypto</label>
              <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>Crypto</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Type</label>
              <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>Credit</option>
                <option>Debit</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Amount</label>
              <input type="text" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Reason</label>
              <input type="text" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Reason Detail</label>
              <textarea className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold min-h-[80px] resize-none"></textarea>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Number of Payment</label>
              <input type="text" defaultValue="0" readOnly className="w-full bg-inputBg/50 border border-border-custom text-text-muted rounded-xl px-4 py-3 text-xs font-bold" />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Payment Amount</label>
              <input type="text" readOnly className="w-full bg-inputBg/50 border border-border-custom text-text-muted rounded-xl px-4 py-3 text-xs font-bold min-h-[48px]" />
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 px-4 py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                Pay To All
              </button>
              <button className="px-6 py-3 bg-panel border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirDropManagement;
