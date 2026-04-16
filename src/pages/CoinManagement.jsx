import React from 'react';
import { Coins, Search, Filter, Plus, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CoinManagement = () => {
  const { t } = useLanguage();
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$64,230.50', change: '+2.4%', status: 'Listed' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,450.20', change: '-1.2%', status: 'Listed' },
    { name: 'Solana', symbol: 'SOL', price: '$145.80', change: '+5.7%', status: 'Listed' },
  ];

  return (
    <div className="animate-enter space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('nav_coin_management')}</h2>
          <p className="text-xs text-text-muted font-medium">{t('nav_coin_management_subtitle')}</p>
        </div>
        <div className="flex gap-2">
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                <Plus size={14} /> {t('btn_add_asset')}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coins.map((coin) => (
          <div key={coin.symbol} className="bg-panel border border-border-custom rounded-2xl p-6 transition-all hover:border-primary/30">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary border border-primary/20">
                {coin.symbol[0]}
              </div>
              <span className="text-xs font-black px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/20 uppercase tracking-widest leading-none">
                {t('status_listed')}
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-main">{coin.name}</h3>
              <p className="text-xs text-text-muted font-medium mb-4">{coin.symbol}</p>
              <div className="flex justify-between items-end">
                <div className="text-lg font-black text-text-main tracking-tight">{coin.price}</div>
                <div className={`text-xs font-bold ${coin.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {coin.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinManagement;
