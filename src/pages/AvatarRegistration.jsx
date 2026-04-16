import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Save, Upload } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AvatarRegistration = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  return (
    <div className="animate-enter max-w-4xl mx-auto space-y-6 lg:space-y-8">
      <div className="mb-4 lg:mb-8 px-1">
        <h2 className="text-2xl lg:text-3xl font-bold text-text-main tracking-tight">{t('avatar_reg_title')}</h2>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl p-5 sm:p-8 shadow-sm">
        <div className="space-y-8">
          
          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> {t('avatar_name_label')}
            </label>
            <input 
              type="text" 
              placeholder={t('avatar_name_placeholder')}
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> {t('avatar_img_label')}
            </label>
            <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder={t('upload_file') || 'Upload File'}
                  readOnly
                  className="flex-1 bg-inputBg border border-border-custom text-text-muted rounded-xl px-4 py-3 text-sm focus:outline-none cursor-default"
                />
                <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef}
                    accept="image/*"
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-primary/20 text-primary border border-primary rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Upload size={16} /> {t('btn_file_selection')}
                </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> {t('notice_use_status')}
            </label>
            <div className="flex items-center gap-8 h-[46px pl-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="avatar-status" defaultChecked className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">{t('status_used')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="avatar-status" className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">{t('status_not_used')}</span>
              </label>
            </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <Save size={16} /> {t('common_save')}
          </button>
          <button 
            onClick={() => navigate('/avatars')}
            className="w-full sm:w-auto px-10 py-3.5 bg-panel border border-border-custom text-text-secondary rounded-xl text-sm font-bold hover:bg-panel-hover transition-all flex items-center justify-center"
          >
            {t('common_list')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarRegistration;
