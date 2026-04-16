import { 
  Search, 
  Download, 
  Coins, 
  Users,
  CreditCard,
  FileText,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AirdropCreate = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('airdrop_management_title')}</h2>
        <button className="px-3 py-2 sm:px-5 sm:py-2.5 bg-primary/20 text-primary border border-primary rounded-xl text-xs sm:text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 shrink-0">
            <Download size={14} /> <span className="hidden xs:inline">{t('btn_download_excel')}</span><span className="xs:hidden">{t('btn_download_excel')}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Table & Filters */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1 min-w-[120px]">{t('filter_reg_date')}</label>
                <div className="flex items-center gap-1.5 flex-1">
                    <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-2 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
                    <span className="text-text-muted font-bold">~</span>
                    <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-2 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex flex-1 gap-2">
                    <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[120px] cursor-pointer">
                        <option>{t('filter_search_option')}</option>
                        <option>{t('common_email')}</option>
                        <option>{t('common_name')}</option>
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
                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-6 py-2 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                        <Search size={16} /> {t('common_search')}
                    </button>
                    <button className="px-4 py-2 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all">
                        <RotateCcw size={14} />
                    </button>
                </div>
            </div>
          </div>

          <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden min-h-[460px]">
            <div className="flex justify-end p-2 px-4 pt-4">
                <span className="text-xs font-black text-text-muted uppercase tracking-widest leading-none">
                    {t('common_total')} : 0 {t('common_list')} (1/1) {t('common_page')}
                </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-inputBg/50 border-b border-border-custom">
                    <th className="py-4 px-4 text-center w-12"><input type="checkbox" className="rounded-sm bg-inputBg border-border-custom" /></th>
                    <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_name')}</th>
                    <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">{t('col_crypto')}</th>
                    <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_date')}</th>
                    <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-right">{t('col_total_price')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="py-24 text-center">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/20">
                                <Users size={24} />
                            </div>
                            <span className="text-xs font-bold text-text-muted">{t('common_no_data')}</span>
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-border-custom flex justify-center items-center gap-3">
                <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_previous')}</button>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20">1</div>
                <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_next')}</button>
            </div>
          </div>
        </div>

        {/* Right Side: AirDrop Form */}
        <div className="lg:col-span-4 space-y-4">
            <div className="bg-panel border border-border-custom rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><Coins size={120} /></div>
              <div className="space-y-5 relative z-10 mt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                     <Coins size={12} className="text-primary" /> {t('col_crypto')}
                  </label>
                  <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                    <option>{t('col_crypto')}</option>
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>USDT</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                     <CreditCard size={12} className="text-primary" /> {t('col_tx_type')}
                  </label>
                  <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
                    <option>Credit</option>
                    <option>Debit</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest flex">{t('col_quantity')}</label>
                  <input type="text" placeholder="0.00" className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest flex">{t('col_reason')}</label>
                  <input type="text" placeholder={t('col_reason')} className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest flex items-center gap-2">
                     <FileText size={12} className="text-primary" /> {t('col_reason_detail')}
                  </label>
                  <textarea placeholder={t('col_reason_detail')} className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"></textarea>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest leading-none flex">{t('label_num_payments')}</label>
                  <input type="text" defaultValue="0" readOnly className="w-full border border-border-custom rounded-xl px-4 py-3 text-xs font-bold" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-text-muted uppercase tracking-widest leading-none flex">{t('label_payment_amount')}</label>
                  <input type="text" readOnly className="w-full border border-border-custom rounded-xl px-4 py-3 text-xs font-bold min-h-[48px]" />
                </div>

                <div className="flex gap-3 pt-2">
                  <button className="flex-1 px-4 py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                    {t('btn_pay_to_all')}
                  </button>
                  <button className="px-6 py-3 bg-panel border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all">
                    {t('wallet_clear_button')}
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AirdropCreate;
