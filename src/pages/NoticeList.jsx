import React, { useState } from 'react';
import {
  RotateCcw,
  ClipboardList,
  Type,
  FileText,
  X,
  Search} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NoticeList = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="animate-enter space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('notice_list_title')}</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-primary text-white rounded-xl text-[10px] sm:text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
          >
            {t('common_registration')}
          </button>
        </div>

        {/* Filter Section */}
        <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_reg_date')}</label>
              <div className="flex items-center gap-2">
                <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
                <span className="text-text-muted font-bold">~</span>
                <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
              </div>
            </div>

            <div className="flex flex-wrap flex-1 items-end gap-3">
              <div className="flex-1 min-w-[120px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('common_status')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none cursor-pointer">
                  <option>{t('notice_use_status')}</option>
                  <option>{t('status_used')}</option>
                  <option>{t('status_not_used')}</option>
                </select>
              </div>
              <div className="flex-[2] min-w-[200px] space-y-2">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_search_option')}</label>
                <div className="flex gap-2">
                    <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[100px] cursor-pointer">
                        <option>{t('notice_title_label')}</option>
                        <option>{t('notice_content_label')}</option>
                        <option>PK</option>
                    </select>
                    <div className="relative flex-1">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder={t('notice_title_placeholder')}
                            className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                    </div>
                </div>
              </div>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <Search size={16} /> {t('common_search')}
                </button>
                <button className="px-4 py-2.5 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end px-2">
          <span className="text-[10px] font-black text-text-muted uppercase tracking-widest leading-none">
            {t('common_total')} : 0 {t('common_list')} (1/1) {t('common_page')}
          </span>
        </div>

        <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-inputBg/50 border-b border-border-custom">
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">No.</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider">PK</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider">{t('notice_title_label')}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">{t('notice_use_status')}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider">{t('common_date')}</th>
                  <th className="py-4 px-6 text-[10px] font-bold text-text-muted uppercase tracking-wider text-center">{t('col_correction')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="py-24 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                        <ClipboardList size={24} />
                      </div>
                      <span className="text-xs font-bold text-text-muted">{t('common_no_data')}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_previous')}</button>
            <button className="px-4 py-1.5 border border-border-custom rounded-full text-[11px] font-bold text-primary hover:bg-primary/10 opacity-50">{t('common_next')}</button>
          </div>
        </div>

      </div>
      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-panel border border-border-custom w-full max-w-2xl rounded-[20px] shadow-2xl relative z-10 animate-scale-in overflow-hidden">
            <div className="p-5 border-b border-border-custom relative">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-text-main tracking-tight">{t('notice_reg_title')}</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-10 h-10 bg-inputBg border border-border-custom rounded-xl flex items-center justify-center text-text-muted hover:text-text-main hover:bg-panel-hover transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 pb-0 space-y-4">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                  <Type size={14} className="text-primary" /> {t('notice_title_label')}
                </label>
                <input
                  type="text"
                  placeholder={t('notice_title_placeholder')}
                  className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                  <FileText size={14} className="text-primary" /> {t('notice_content_label')}
                </label>
                <textarea
                  rows="10"
                  placeholder={t('notice_content_placeholder')}
                  className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted resize-none"
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                  {t('notice_use_status')}
                </label>
                <div className="flex items-center gap-8 pl-1 pb-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="notice-status" defaultChecked className="hidden peer" />
                    <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs font-bold text-text-secondary group-hover:text-text-main transition-colors">{t('status_used')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="radio" name="notice-status" className="hidden peer" />
                    <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs text-text-secondary group-hover:text-text-main transition-colors">{t('status_not_used')}</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              <button
                className="px-8 py-3.5 bg-primary text-white rounded-[18px] text-xs font-black shadow-lg shadow-primary/30 hover:opacity-90 transition-all flex items-center gap-2 tracking-widest uppercase"
                onClick={() => setIsModalOpen(false)}
              >
                {t('common_save')}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-3.5 bg-inputBg border border-border-custom text-text-secondary rounded-[18px] text-xs font-black hover:bg-panel-hover transition-all tracking-widest uppercase"
              >
                {t('common_list')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeList;
