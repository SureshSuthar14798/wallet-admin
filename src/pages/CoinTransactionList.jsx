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
import { useLanguage } from '../context/LanguageContext';

const CoinTransactionList = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('coin_tx_list_title')}</h2>
        <button className="px-3 py-2 sm:px-5 sm:py-2.5 bg-primary/20 text-primary border border-primary rounded-xl text-xs sm:text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 shrink-0">
            <Download size={14} /> <span className="hidden xs:inline">{t('btn_download_excel')}</span><span className="xs:hidden">{t('btn_download_excel')}</span>
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_reg_date')}</label>
            <div className="flex items-center gap-2">
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
              <span className="text-text-muted font-bold">~</span>
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <div className="flex-1 flex flex-wrap items-end gap-3 justify-end">
            <div className="flex-1 min-w-[120px] space-y-2">
                <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('col_crypto')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                    <option>{t('col_crypto')}</option>
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                </select>
            </div>
            <div className="flex-1 min-w-[150px] space-y-2">
                <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('common_status')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                    <option>{t('common_status')}: {t('common_total')}</option>
                    <option>Success</option>
                    <option>Pending</option>
                    <option>Failed</option>
                </select>
            </div>
            <div className="flex-[2] min-w-[240px] space-y-2">
                <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_keyword')}</label>
                <div className="flex gap-2">
                    <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[100px] cursor-pointer">
                        <option>{t('col_txid')}</option>
                        <option>{t('col_sender_id')}</option>
                        <option>{t('col_address')}</option>
                    </select>
                    <div className="relative flex-1">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder={t('keyword_placeholder')}
                            className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                <Search size={16} /> {t('common_search')}
                </button>
                <button className="px-4 py-2 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
                <RotateCcw size={14} />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-2">
        <span className="text-xs font-black text-text-muted uppercase tracking-widest leading-none">
            {t('common_total')} : 0 {t('common_list')} (1/1) {t('common_page')}
        </span>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[1600px]">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">No</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">PK</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_crypto')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_txid')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_sent_address')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_recv_address')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_sender_id')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_recv_member_id')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">{t('col_tx_status')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">{t('col_quantity')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('col_tx_type')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_date')}</th>
                <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">{t('col_correction')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="13" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                            <Database size={24} />
                        </div>
                        <span className="text-xs font-bold text-text-muted">{t('common_no_data')}</span>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_previous')}</button>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_next')}</button>
        </div>
      </div>
    </div>
  );
};

export default CoinTransactionList;
