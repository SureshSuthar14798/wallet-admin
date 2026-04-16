import React, { useState } from 'react';
import { Search, Filter, MoreVertical, ArrowDownLeft, ArrowUpRight, RefreshCcw } from 'lucide-react';

const mockTransactions = [
  { id: 'TX-82910', type: 'Deposit', amount: '0.45 BTC', value: '$28,140.00', from: 'Gate.io Internal', to: 'Main Hot Wallet', time: '14:20:45', status: 'Completed' },
  { id: 'TX-82911', type: 'Withdrawal', amount: '2.5 ETH', value: '$6,250.00', from: 'User_4821', to: '0x7a...d3f', time: '14:18:12', status: 'Completed' },
  { id: 'TX-82912', type: 'Swap', amount: '500 USDT', value: '$500.00', from: 'Internal Swap', to: 'User_9124', time: '14:15:30', status: 'Pending' },
  { id: 'TX-82913', type: 'Deposit', amount: '12.4 SOL', value: '$1,860.00', from: 'Binance', to: 'User_1024', time: '14:10:05', status: 'Completed' },
  { id: 'TX-82914', type: 'Staking', amount: '100 DOT', value: '$800.00', from: 'Rewards', to: 'Staking-Pool-A', time: '14:05:22', status: 'Completed' },
  { id: 'TX-82915', type: 'Withdrawal', amount: '0.1 BTC', value: '$6,400.00', from: 'User_3312', to: '0x1b...e4a', time: '14:02:10', status: 'Failed' },
  { id: 'TX-82916', type: 'Deposit', amount: '1,000 USDC', value: '$1,000.00', from: 'Circle', to: 'Main Cold Wallet', time: '13:58:45', status: 'Completed' },
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const getTypeStyle = (type) => {
    switch(type) {
      case 'Deposit': return { icon: <ArrowDownLeft size={14} />, color: 'emerald', text: 'Deposit' };
      case 'Withdrawal': return { icon: <ArrowUpRight size={14} />, color: 'rose', text: 'Withdraw' };
      case 'Swap': return { icon: <RefreshCcw size={14} />, color: 'violet', text: 'Swap' };
      case 'Staking': return { icon: <RefreshCcw size={14} />, color: 'indigo', text: 'Stake' };
      default: return { icon: null, color: 'slate', text: type };
    }
  };

  const filteredTransactions = mockTransactions.filter(tx => {
    const matchesSearch = tx.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tx.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.to.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'All') return matchesSearch;
    if (activeTab === 'Pending') return matchesSearch && tx.status === 'Pending';
    if (activeTab === 'Flagged') return matchesSearch && tx.status === 'Failed';
    return matchesSearch;
  });

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">System Ledger</h2>
          <p className="text-xs text-text-muted font-medium">Monitoring global asset flow across nodes</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-panel border border-border-custom rounded-xl text-xs font-bold text-text-secondary hover:bg-panel-hover transition-all flex items-center gap-2 shadow-sm">
                <Filter size={14} /> Filter
            </button>
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all">Export Report</button>
        </div>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border-custom flex justify-between items-center bg-inputBg/30">
          <div className="relative w-full max-w-[360px]">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search by TxID, address..." 
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-10 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/40"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="hidden sm:flex bg-inputBg p-1 rounded-xl gap-1 border border-border-custom">
            {['All', 'Pending', 'Flagged'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-panel shadow-sm text-primary border border-border-custom' 
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-inputBg/30">
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Transaction ID</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Type</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest text-right">Amount</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Source / Dest</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Time</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-text-muted uppercase tracking-widest text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map(tx => {
                  const typeStyle = getTypeStyle(tx.type);
                  return (
                    <tr key={tx.id} className="hover:bg-panel-hover transition-colors group">
                      <td className="py-3.5 px-6">
                         <span className="text-xs font-bold font-mono text-primary bg-primary/5 px-2 py-1 rounded border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all cursor-pointer">
                          {tx.id}
                         </span>
                      </td>
                      <td className="py-3.5 px-6">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 bg-${typeStyle.color}-500/10 text-${typeStyle.color}-500 rounded-lg border border-${typeStyle.color}-500/10`}>
                            {typeStyle.icon}
                          </div>
                          <span className="text-xs font-bold text-text-secondary">{typeStyle.text}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <div className="text-xs font-bold text-text-main">{tx.amount}</div>
                        <div className="text-xs font-medium text-text-muted">{tx.value}</div>
                      </td>
                      <td className="py-3.5 px-6">
                        <div className="text-xs font-semibold text-text-muted leading-tight">From: <span className="text-text-secondary truncate max-w-[100px] inline-block align-bottom">{tx.from}</span></div>
                        <div className="text-xs font-semibold text-text-muted leading-tight">To: <span className="text-text-secondary truncate max-w-[100px] inline-block align-bottom">{tx.to}</span></div>
                      </td>
                      <td className="py-3.5 px-6 text-xs font-medium text-text-muted">{tx.time}</td>
                      <td className="py-3.5 px-6">
                         <div className="flex items-center gap-1.5">
                             <div className={`w-1.5 h-1.5 rounded-full ${tx.status === 'Completed' ? 'bg-emerald-500' : tx.status === 'Failed' ? 'bg-rose-500' : 'bg-amber-500 animate-pulse'}`}></div>
                             <span className={`text-xs font-bold ${tx.status === 'Completed' ? 'text-emerald-500' : tx.status === 'Failed' ? 'text-rose-500' : 'text-amber-500'}`}>
                              {tx.status}
                             </span>
                         </div>
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <button className="p-2 text-text-muted hover:text-text-main transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-text-muted text-xs font-medium italic">No transactions found matching the filter.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-border-custom bg-inputBg/30 flex justify-center text-xs font-bold text-text-muted">
            <button className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest">View 30-Day Activity History <ArrowUpRight size={14}/></button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
