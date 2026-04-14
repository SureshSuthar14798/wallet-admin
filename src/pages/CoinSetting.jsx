import { Save, Info } from 'lucide-react';

const CoinSetting = () => {
  const coins = ['AIW', 'BTC', 'ETH', 'XRP'];

  return (
    <div className="animate-enter space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Coin Settings</h2>
          <p className="text-[10px] sm:text-xs text-text-muted font-bold uppercase tracking-wider mt-1 opacity-70">Protocol fees & withdrawal architecture</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-black shadow-lg shadow-primary/30 hover:opacity-90 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
            <Save size={16} /> Save All
        </button>
      </div>

      <div className="space-y-6">
        {coins.map((coin) => (
          <div key={coin} className="bg-panel border border-border-custom rounded-[20px] overflow-hidden shadow-sm hover:border-primary/20 transition-all group">
            <div className="bg-inputBg/30 px-4 sm:px-6 py-4 border-b border-border-custom flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(139,92,246,0.6)]"></div>
                <h3 className="text-[11px] font-black text-text-main uppercase tracking-[2.5px]">{coin} Protocol</h3>
              </div>
              <Info size={14} className="text-text-muted opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
              {/* Row 1: Fees */}
              <div className="space-y-1 lg:space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> {coin} Transaction Fee
                </label>
                <div className="relative">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted/60 uppercase">{coin}</span>
                </div>
              </div>

              <div className="space-y-1 lg:space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> {coin} Exchange Fee
                </label>
                <div className="relative">
                    <input type="text" defaultValue="0" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted/60 uppercase">%</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> Internal Withdrawal
                </label>
                <div className="flex gap-6 bg-inputBg/50 border border-border-custom rounded-xl px-4 py-2.5 h-[46px] items-center">
                    <label className="flex items-center gap-2 cursor-pointer group/radio">
                        <input type="radio" name={`${coin}-internal`} defaultChecked className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-[10px] font-black text-text-secondary peer-checked:text-text-main transition-colors uppercase tracking-wider">Possible</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/radio">
                        <input type="radio" name={`${coin}-internal`} className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-rose-500 peer-checked:bg-rose-500 transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-[10px] font-black text-text-secondary peer-checked:text-text-main transition-colors uppercase tracking-wider">Impossible</span>
                    </label>
                </div>
              </div>

              {/* Row 2: Limits & External */}
              <div className="space-y-1 lg:space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> Max Withdrawal
                </label>
                <div className="relative">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted/60 uppercase">{coin}</span>
                </div>
              </div>

              <div className="space-y-1 lg:space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> Min Withdrawal
                </label>
                <div className="relative">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted/60 uppercase">{coin}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary/40"></div> External Withdrawal
                </label>
                <div className="flex gap-6 bg-inputBg/50 border border-border-custom rounded-xl px-4 py-2.5 h-[46px] items-center">
                    <label className="flex items-center gap-2 cursor-pointer group/radio">
                        <input type="radio" name={`${coin}-external`} defaultChecked className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-[10px] font-black text-text-secondary peer-checked:text-text-main transition-colors uppercase tracking-wider">Possible</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group/radio">
                        <input type="radio" name={`${coin}-external`} className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-rose-500 peer-checked:bg-rose-500 transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-[10px] font-black text-text-secondary peer-checked:text-text-main transition-colors uppercase tracking-wider">Impossible</span>
                    </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinSetting;
