import React, { useState } from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  Copy, 
  TrendingUp,
  RefreshCcw,
  Eraser,
  HelpCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';

const MainWallet = () => {
  const { t } = useLanguage();
  const [selectedCoin, setSelectedCoin] = useState('ETH');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const depositAddress = "0x362824dba6d1c9da585067401d6affe840574be4";

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    toast.success(t('toast_copySuccess'));
  };

  const handleReset = () => {
    setWithdrawAddress('');
    setWithdrawAmount('');
    toast.success(t('toast_resetSuccess'));
  };

  const handleWithdraw = () => {
    if (!withdrawAddress || !withdrawAmount) {
        toast.error(t('toast_fillFields'));
        return;
    }
    toast.promise(
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: t('toast_withdrawLoading'),
          success: <b>{t('toast_withdrawSuccess')}</b>,
          error: <b>{t('toast_withdrawError')}</b>,
        }
    );
  };

  const [isCoinDropdownOpen, setIsCoinDropdownOpen] = useState(false);
  
  const coins = [
    { id: 'ETH', name: 'Ethereum', color: 'bg-blue-500' },
    { id: 'BTC', name: 'Bitcoin', color: 'bg-orange-500' },
    { id: 'USDT', name: 'Tether', color: 'bg-emerald-500' },
    { id: 'XRP', name: 'Ripple', color: 'bg-sky-400' },
  ];

  const selectedCoinData = coins.find(c => c.id === selectedCoin) || coins[0];

  return (
    <div className="animate-enter space-y-6 pb-8">
      {/* Compact Premium Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-black text-text-main tracking-tight bg-gradient-to-r from-text-main to-text-muted bg-clip-text">
            {t('wallet_main_title')}
          </h2>
          <p className="text-[11px] text-text-muted font-medium italic opacity-80">
            {t('wallet_liquidity_bridge')}
          </p>
        </div>
        <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                  {t('wallet_live_nodes')}
                </span>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Asset Overview (More Compact) */}
        <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-hover rounded-[28px] p-6 text-white relative overflow-hidden shadow-xl shadow-primary/20 group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
                
                <div className="relative z-10 space-y-8">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                <Wallet size={18} />
                            </div>
                            <div>
                                <div className="text-[9px] font-black uppercase tracking-widest opacity-70">
                                  {t('wallet_internal_ledger')}
                                </div>
                                <div className="text-xs font-bold tracking-tight leading-none">
                                  {t('wallet_hot_storage')}
                                </div>
                            </div>
                        </div>
                        <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase border border-white/20 tracking-wider">
                          {t('wallet_active')}
                        </span>
                    </div>

                    <div>
                        <div className="text-[9px] font-black uppercase tracking-[0.15em] opacity-60 mb-1">
                          {t('wallet_available_liquidity')}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <div className="text-4xl font-black tracking-tighter">0.00</div>
                            <div className="text-xl font-black opacity-50">{selectedCoin}</div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="text-[9px] font-black uppercase tracking-widest opacity-60">
                              {t('wallet_sync_frequency')}
                            </div>
                            <div className="text-[11px] font-bold tracking-tight leading-none">
                              {t('wallet_realtime_flow')}
                            </div>
                        </div>
                        <TrendingUp size={20} className="opacity-30" />
                    </div>
                </div>
            </div>

            <div className="bg-panel border border-border-custom rounded-[28px] p-6 space-y-4 shadow-sm">
                <div className="space-y-3">
                    <label className="text-[9px] font-black text-text-muted uppercase tracking-[0.15em] ml-1 flex items-center gap-2">
                        <ArrowDownLeft size={12} className="text-emerald-500" /> {t('wallet_receiving_address')}
                    </label>
                    <div className="p-3 bg-inputBg border border-border-custom rounded-xl relative group/addr">
                        <div className="text-[10px] font-mono text-text-secondary break-all leading-relaxed mr-8">
                            {depositAddress}
                        </div>
                        <button 
                            onClick={handleCopy}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-all p-1.5 hover:bg-panel-hover rounded-lg"
                        >
                            <Copy size={14} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 px-1">
                        <div className="w-1 h-1 rounded-full bg-primary/40"></div>
                        <p className="text-[9px] text-text-muted font-medium opacity-60">
                          {t('wallet_node_direct', { coin: selectedCoin })}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Transaction Hub (More Compact) */}
        <div className="lg:col-span-7">
            <div className="bg-panel border border-border-custom rounded-[32px] p-1.5 shadow-xl relative group overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-[34px] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative bg-panel rounded-[28px] p-6 sm:p-8 space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-0.5">
                            <h3 className="text-lg font-black text-text-main tracking-tight">
                              {t('wallet_withdrawal_hub')}
                            </h3>
                            <p className="text-[9px] text-text-muted font-bold tracking-[0.1em] uppercase opacity-70">
                              {t('wallet_asset_outflow')}
                            </p>
                        </div>
                        
                        <div className="w-full sm:w-48 space-y-1.5 relative">
                            <label className="text-[9px] font-black text-text-muted uppercase tracking-widest ml-1">
                              {t('wallet_coin_asset')}
                            </label>
                            
                            {/* Custom Dropdown */}
                            <div className="relative">
                                <button 
                                    onClick={() => setIsCoinDropdownOpen(!isCoinDropdownOpen)}
                                    className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2.5 text-[11px] font-black flex items-center justify-between hover:border-primary/40 transition-all shadow-inner"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className={`w-5 h-5 rounded-lg ${selectedCoinData.color} flex items-center justify-center text-[8px] text-white`}>
                                            {selectedCoinData.id.substring(0, 1)}
                                        </div>
                                        {selectedCoinData.name} ({selectedCoinData.id})
                                    </div>
                                    <RefreshCcw size={12} className={`text-text-muted transition-transform duration-500 ${isCoinDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isCoinDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-30" onClick={() => setIsCoinDropdownOpen(false)}></div>
                                        <div className="absolute top-full left-0 w-full mt-2 bg-panel border border-border-custom rounded-2xl shadow-2xl z-40 overflow-hidden animate-scale-in">
                                            {coins.map(coin => (
                                                <button
                                                    key={coin.id}
                                                    onClick={() => {
                                                        setSelectedCoin(coin.id);
                                                        setIsCoinDropdownOpen(false);
                                                    }}
                                                    className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-inputBg transition-colors ${selectedCoin === coin.id ? 'bg-inputBg' : ''}`}
                                                >
                                                    <div className={`w-6 h-6 rounded-lg ${coin.color} flex items-center justify-center text-[10px] text-white font-black`}>
                                                        {coin.id.substring(0, 1)}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-black text-text-main">{coin.name}</span>
                                                        <span className="text-[9px] font-bold text-text-muted uppercase tracking-widest">
                                                          {t('wallet_network_suffix', { coin: coin.id })}
                                                        </span>
                                                    </div>
                                                    {selectedCoin === coin.id && (
                                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-text-muted uppercase tracking-[0.15em] ml-1 flex items-center gap-2">
                                <ArrowUpRight size={12} className="text-primary" /> {t('wallet_destination_target')}
                            </label>
                            <input 
                                type="text" 
                                value={withdrawAddress}
                                onChange={(e) => setWithdrawAddress(e.target.value)}
                                placeholder={t('wallet_dest_placeholder')}
                                className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3.5 text-[11px] font-medium focus:outline-none focus:border-primary/40 transition-all shadow-inner placeholder:text-text-muted/30"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-text-muted uppercase tracking-[0.15em] ml-1 flex items-center gap-2">
                                <CreditCard size={12} className="text-primary" /> {t('wallet_disbursement_qty')}
                            </label>
                            <div className="relative group/val">
                                <input 
                                    type="number" 
                                    value={withdrawAmount}
                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                    placeholder={t('wallet_qty_placeholder')}
                                    className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-4 pr-16 py-3.5 text-xs font-black focus:outline-none focus:border-primary/40 transition-all shadow-inner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-text-muted uppercase tracking-widest bg-panel-hover px-2 py-1 rounded-lg">
                                    {selectedCoin}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3">
                        <button 
                            onClick={handleWithdraw}
                            className="flex-[2] px-6 py-3.5 bg-primary text-white rounded-xl text-[10px] font-black shadow-lg shadow-primary/20 hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 uppercase tracking-widest group"
                        >
                            <RefreshCcw size={14} className="group-hover:rotate-180 transition-transform duration-500" /> 
                            {t('wallet_authorize_withdrawal')}
                        </button>
                        <button 
                            onClick={handleReset}
                            className="flex-1 px-6 py-3.5 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-[10px] font-black hover:bg-panel-hover transition-all uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                            <Eraser size={14} /> {t('wallet_clear_button')}
                        </button>
                    </div>

                    <div className="bg-inputBg/30 border border-border-custom rounded-xl p-4 flex items-start gap-3">
                        <HelpCircle size={16} className="text-primary flex-shrink-0 mt-0.5 opacity-60" />
                        <div className="text-[9px] text-text-muted leading-relaxed font-medium">
                            <span className="font-bold text-text-secondary block mb-0.5 uppercase tracking-wider">
                              {t('wallet_safety_check')}:
                            </span>
                            {t('wallet_safety_desc')}
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MainWallet;
