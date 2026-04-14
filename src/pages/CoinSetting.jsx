import { Save, Info } from 'lucide-react';

const CoinSetting = () => {
  const coins = ['AIW', 'BTC', 'ETH', 'XRP'];

  return (
    <div className="animate-enter space-y-6 pb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Coin Settings</h2>
          <p className="text-xs text-text-muted font-medium mt-1">Configure transaction fees and withdrawal limits for each asset</p>
        </div>
        <button className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
            <Save size={16} /> Save All Settings
        </button>
      </div>

      <div className="space-y-8">
        {coins.map((coin) => (
          <div key={coin} className="bg-panel border border-border-custom rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-inputBg/50 px-6 py-3 border-b border-border-custom flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]"></div>
                <h3 className="text-xs font-black text-text-main uppercase tracking-[2px]">{coin} Protocol Config</h3>
              </div>
              <Info size={14} className="text-text-muted" />
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
              {/* Row 1: Fees */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                   {coin} Transaction Fee (Fixed)
                </label>
                <div className="relative group">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 group-hover:border-primary/30 transition-all" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted uppercase">{coin}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">
                   {coin} Exchange Fee (Ratio)
                </label>
                <div className="relative group">
                    <input type="text" defaultValue="0" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 group-hover:border-primary/30 transition-all" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted uppercase">%</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Internal Withdrawal</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name={`${coin}-internal`} defaultChecked className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xs font-bold text-text-secondary group-hover:text-text-main transition-colors">Possible</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name={`${coin}-internal`} className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-rose-500 peer-checked:bg-rose-500 transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xs font-bold text-text-secondary group-hover:text-text-main transition-colors">Impossible</span>
                    </label>
                </div>
              </div>

              {/* Row 2: Limits & External */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Max Withdrawal Limit</label>
                <div className="relative group">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 group-hover:border-primary/30 transition-all" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted uppercase">{coin}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">Min Withdrawal Limit</label>
                <div className="relative group">
                    <input type="text" defaultValue="0.00000000" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 group-hover:border-primary/30 transition-all" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted uppercase">{coin}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest">External Withdrawal</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name={`${coin}-external`} defaultChecked className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xs font-bold text-text-secondary group-hover:text-text-main transition-colors">Possible</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name={`${coin}-external`} className="hidden peer" />
                        <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-rose-500 peer-checked:bg-rose-500 transition-all flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xs font-bold text-text-secondary group-hover:text-text-main transition-colors">Impossible</span>
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
