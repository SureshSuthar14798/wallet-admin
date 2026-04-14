import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, ShieldCheck, Eye } from 'lucide-react';

const MainWallet = () => {
  return (
    <div className="animate-enter space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Main Wallet</h2>
          <p className="text-xs text-text-muted font-medium">Internal system hot/cold wallet management</p>
        </div>
        <div className="flex gap-2">
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                <RefreshCcw size={14} /> Refresh Balance
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-hover rounded-[24px] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Wallet size={20} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Primary Reserve</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-[10px] font-black uppercase">Mainnet</span>
                    <ShieldCheck size={18} />
                  </div>
              </div>
              <div className="mb-8">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Total Assets (USD)</div>
                  <div className="text-4xl font-black tracking-tight">$42,850,201.45</div>
              </div>
              <div className="flex gap-4 pt-6 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-[10px] font-black uppercase opacity-60 mb-0.5">Hot Wallet</div>
                    <div className="text-sm font-bold">12,450.21 BTC</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black uppercase opacity-60 mb-0.5">Cold Storage</div>
                    <div className="text-sm font-bold">384,120.00 BTC</div>
                  </div>
              </div>
          </div>

          <div className="bg-panel border border-border-custom rounded-[24px] p-8 space-y-6 flex flex-col justify-center">
              <button className="w-full flex items-center justify-between p-4 bg-inputBg border border-border-custom rounded-2xl group hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowDownLeft size={20}/></div>
                      <div className="text-xs font-black uppercase tracking-widest text-text-main">Top Up</div>
                  </div>
                  <Eye size={16} className="text-text-muted" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-inputBg border border-border-custom rounded-2xl group hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform"><RefreshCcw size={20}/></div>
                      <div className="text-xs font-black uppercase tracking-widest text-text-main">Transfer</div>
                  </div>
                  <Eye size={16} className="text-text-muted" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-inputBg border border-border-custom rounded-2xl group hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowUpRight size={20}/></div>
                      <div className="text-xs font-black uppercase tracking-widest text-text-main">Cold Sync</div>
                  </div>
                  <Eye size={16} className="text-text-muted" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default MainWallet;
