import React from 'react';
import { 
  Download, 
  Search, 
  RotateCcw, 
  Settings2, 
  History, 
  ChevronLeft, 
  ChevronRight,
  Database
} from 'lucide-react';

const CoinTransactionList = () => {
  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Coin Transaction List</h2>
        <button className="px-5 py-2.5 bg-primary/20 text-primary border border-primary/30 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <Download size={14} /> Download Excel
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-6 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-4 flex items-center gap-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest whitespace-nowrap">Registration Date</label>
            <div className="flex items-center gap-2">
                <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
                <span className="text-text-muted">~</span>
                <input type="date" className="bg-inputBg border border-border-custom text-text-main rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-wrap items-center gap-2">
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[110px]">
                <option>=Coin Type=</option>
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
            </select>
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[150px]">
                <option>=Transaction Status=</option>
                <option>Success</option>
                <option>Pending</option>
                <option>Failed</option>
            </select>
            <select className="bg-inputBg border border-border-custom text-text-main rounded-lg px-3 py-1.5 text-xs focus:outline-none min-w-[140px]">
                <option>=Search Options=</option>
                <option>TXID</option>
                <option>Sender ID</option>
                <option>Address</option>
            </select>
            <div className="relative flex-1 min-w-[200px]">
                <input 
                    type="text" 
                    placeholder="Please select a search opt" 
                    className="w-full bg-inputBg border border-border-custom text-text-main rounded-lg px-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
            </div>
            <div className="flex gap-2">
                <button className="px-6 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
              <Search size={14} /> Search
            </button>
                <button className="px-5 py-1.5 bg-panel border border-border-custom text-text-secondary rounded-lg text-xs font-bold hover:bg-panel-hover transition-all flex items-center gap-2">
                    <RotateCcw size={12} /> Reset
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
          <table className="w-full text-left min-w-[1600px]">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Coin Type</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">TXID</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Sent Wallet Address</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Receiving Wallet Address</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Sender ID</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Received Member ID</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Transaction Status</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-right">Quantity</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Transaction Type</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider">Registration Date</th>
                <th className="py-4 px-4 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">Correction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="13" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                            <Database size={24} />
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

export default CoinTransactionList;
