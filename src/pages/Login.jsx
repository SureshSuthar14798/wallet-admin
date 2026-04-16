import React, { useState } from 'react';
import { Shield, Eye, EyeOff, Lock, User, Wallet } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userId === 'admin' && formData.password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success(t('login_welcome'));
      setTimeout(() => {
        window.location.href = '/admin-management';
      }, 1000);
    } else {
      toast.error(t('login_denied'));
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      
      <div className="w-full max-w-md animate-enter">
          <div className="bg-panel border border-border-custom rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <div className="flex flex-col items-center mb-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Wallet size={32} className="text-white" />
                  </div>
                  <h1 className="text-3xl font-black text-text-main tracking-tighter mb-2">{t('login_title')}</h1>
                  <div className="flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-[0.2em] bg-inputBg px-3 py-1 rounded-full border border-border-custom">
                      <Shield size={12} className="text-primary" /> {t('login_subtitle')}
                  </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('common_id')}</label>
                      <div className="relative group/input">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within/input:text-primary" size={18} />
                          <input 
                              type="text" 
                              required
                              value={formData.userId}
                              onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                              placeholder={t('login_id_placeholder')}
                              className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl pl-12 pr-4 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                          />
                      </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-widest ml-1">{t('admin_password_label')}</label>
                      <div className="relative group/input">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within/input:text-primary" size={18} />
                          <input 
                              type={showPassword ? "text" : "password"}
                              required
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              placeholder={t('login_password_placeholder')}
                              className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl pl-12 pr-12 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                          />
                          <button 
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                          >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                      </div>
                  </div>

                  <button 
                      type="submit"
                      className="w-full bg-primary text-white rounded-2xl py-4 text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all mt-4 flex items-center justify-center gap-3 group/btn"
                  >
                      {t('login_button')} <Shield size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
              </form>

              <div className="mt-10 pt-8 border-t border-border-custom flex flex-col items-center gap-4">
                  <p className="text-[10px] font-bold text-text-muted text-center uppercase tracking-widest leading-relaxed">
                      {t('login_restricted')}<br/>
                      <span className="opacity-50">{t('login_personnel_only')}</span>
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
