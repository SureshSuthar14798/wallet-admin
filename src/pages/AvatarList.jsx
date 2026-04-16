import React from 'react';
import { 
  Link 
} from 'react-router-dom';
import { 
  Plus, 
  Search, 
  RotateCcw,
  Edit,
  Trash2,
  Image as ImageIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AvatarList = () => {
  const { t } = useLanguage();
  const mockAvatars = [
    { no: 1, pk: 1, name: 'Default Avatar', category: 'General', status: 'Active', regDate: '2024-06-05 03:08:02' }
  ];

  return (
    <div className="animate-enter space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('nav_avatar_list')}</h2>
        <Link 
          to="/avatar-registration" 
          className="px-4 py-2 sm:px-6 sm:py-2.5 bg-primary text-white rounded-xl text-xs sm:text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2 shrink-0"
        >
          <Plus size={16} /> {t('common_registration')}
        </Link>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 justify-end">
            <div className="flex-1 sm:max-w-xs space-y-2">
              <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('common_keyword')}</label>
              <div className="relative">
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
                <button className="px-4 py-2 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
                    <RotateCcw size={14} />
                </button>
            </div>
        </div>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-inputBg/50 border-b border-border-custom">
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider text-center">No.</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_preview')}</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_name')}</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_category')}</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider text-center">{t('common_status')}</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider">{t('common_date')}</th>
                <th className="py-4 px-6 text-xs font-bold text-text-muted uppercase tracking-wider text-center">{t('common_actions')}</th>
              </tr>
            </thead>
            <tbody>
              {mockAvatars.length > 0 ? (
                mockAvatars.map((avatar) => (
                  <tr key={avatar.pk} className="hover:bg-panel-hover transition-colors">
                    <td className="py-4 px-6 text-xs font-bold text-text-muted text-center">{avatar.no}</td>
                    <td className="py-4 px-6">
                        <div className="w-10 h-10 rounded-xl bg-inputBg border border-border-custom flex items-center justify-center text-text-muted">
                            <ImageIcon size={20} />
                        </div>
                    </td>
                    <td className="py-4 px-6 text-xs font-black text-text-main">{avatar.name}</td>
                    <td className="py-4 px-6 text-xs font-bold text-text-secondary">{avatar.category}</td>
                    <td className="py-4 px-6 text-center">
                        <span className={`px-2.5 py-1 text-xs uppercase tracking-wider font-bold rounded-lg ${avatar.status === 'Active' ? 'bg-success text-white' : 'bg-text-muted text-white'}`}>
                            {avatar.status}
                        </span>
                    </td>
                    <td className="py-4 px-6 text-xs font-medium text-text-main">{avatar.regDate}</td>
                    <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                             <button className="p-1.5 bg-primary text-white rounded-lg hover:opacity-90">
                                <Edit size={14} />
                             </button>
                             <button className="p-1.5 bg-danger/10 text-danger border border-danger/20 rounded-lg hover:bg-danger hover:text-white transition-all">
                                <Trash2 size={14} />
                             </button>
                        </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan="7" className="py-24 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-inputBg border border-border-custom rounded-2xl flex items-center justify-center text-text-muted/40">
                          <ImageIcon size={24} />
                        </div>
                        <span className="text-xs font-bold text-text-muted">{t('common_no_data')}</span>
                      </div>
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AvatarList;
