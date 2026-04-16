import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EditMember = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="animate-enter max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-text-main tracking-tight px-1">{t('member_edit_title')}</h2>
      <div className="bg-panel border border-border-custom rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 lg:gap-y-12">
          
          {/* Row 1 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('common_id')}
            </label>
            <input 
              type="text" 
              defaultValue="qodwm0236@gmail.com"
              readOnly
              className="w-full bg-inputBg/50 border border-border-custom text-text-muted rounded-xl px-5 py-4 text-sm font-bold cursor-not-allowed"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('member_pass_label')}
            </label>
            <input 
              type="password" 
              placeholder={t('member_pass_placeholder')}
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="text-xs text-danger font-medium mt-1.5">{t('member_pass_note')}</p>
          </div>

          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('nav_avatar_list')}
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-inputBg border border-border-custom flex items-center justify-center overflow-hidden shrink-0">
                <User size={28} className="text-text-muted" />
              </div>
              <div className="w-full flex gap-3">
                <div className="flex-1 bg-inputBg/50 border border-border-custom rounded-xl px-4 py-3 text-xs text-text-muted flex items-center truncate">
                  {t('nav_default_profile')}
                </div>
                <button className="px-5 py-3 bg-panel border border-primary/30 text-primary rounded-xl text-sm font-bold hover:bg-primary/5 transition-all whitespace-nowrap">
                  {t('profile_edit') || 'Change'}
                </button>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('member_secure_pass_label')} <span className="text-danger opacity-70">(8 digits)</span>
            </label>
            <input 
              type="password" 
              placeholder={t('member_secure_pass_placeholder') || 'Enter new security code'}
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <p className="text-xs text-danger font-medium mt-1.5">{t('member_secure_pass_note')}</p>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('filter_member_status')}
            </label>
            <div className="flex items-center gap-8 lg:gap-10 h-auto sm:h-14 py-2 sm:py-0">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="membership-status" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">{t('common_active')}</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="membership-status" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">{t('common_inactive')}</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('member_withdraw_ext_status')}
            </label>
            <div className="flex items-center gap-8 lg:gap-10 h-auto sm:h-14 py-2 sm:py-0">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="external-withdrawal" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">{t('label_possible')}</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="external-withdrawal" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">{t('label_impossible')}</span>
              </label>
            </div>
          </div>

          {/* Row 3 */}
          <div className="space-y-4">
            <label className="text-sm font-bold text-text-main flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('label_user_rate')}
            </label>
            <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
              <option value="">{t('label_select_rate')}</option>
              <option value="1">Rate 1</option>
              <option value="2">Rate 2</option>
            </select>
          </div>

          <div className="space-y-4 md:col-start-2 lg:col-start-3">
            <label className="text-sm font-bold text-text-main flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {t('member_withdraw_int_status')}
            </label>
            <div className="flex items-center gap-8 lg:gap-10 h-auto sm:h-14 py-2 sm:py-0">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="internal-withdrawal" defaultChecked className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">{t('label_possible')}</span>
              </label>
              <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input type="radio" name="internal-withdrawal" className="hidden peer" />
                  <div className="w-5 h-5 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">{t('label_impossible')}</span>
              </label>
            </div>
          </div>

        </div>

        <div className="mt-10 lg:mt-14 flex gap-3 sm:gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
            {t('common_save')}
          </button>
          <button 
            onClick={() => navigate('/members')}
            className="w-full sm:w-auto px-10 py-4 bg-panel border border-border-custom text-text-secondary rounded-xl text-sm font-bold hover:bg-panel-hover transition-all"
          >
            {t('common_list')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMember;
