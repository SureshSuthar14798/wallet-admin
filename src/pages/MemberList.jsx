import { Link } from 'react-router-dom';
import {
  Download,
  RotateCcw,
  Eye,
  Edit,
  Search
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MemberList = () => {
  const { t } = useLanguage();
  const mockMembers = [
    {
      no: 1,
      pk: 1,
      loginType: 'Google Login',
      id: 'qodwm0236@gmail.com',
      mobile: '-',
      usdt: '-',
      tron: '-',
      xrp: '-',
      eth: '-',
      btc: '-',
      aiw: '-',
      withdrawalStatus: 'Possible',
      status: 'Active',
      rating: '-',
      registrationDate: '2024-12-02 14:26:46'
    }
  ];

  return (
    <div className="animate-enter space-y-4 lg:space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">{t('member_list_title')}</h2>
        <button className="px-3 py-2 sm:px-5 sm:py-2.5 bg-primary/20 text-primary border border-primary rounded-xl text-xs sm:text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 shrink-0">
          <Download size={14} /> <span className="hidden xs:inline">{t('btn_download_excel')}</span><span className="xs:hidden">{t('btn_download_excel')}</span>
        </button>
      </div>

      {/* Filter Section */}
      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="grid grid-cols-1 md:flex md:flex-wrap items-end gap-4">
          <div className="space-y-2">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_reg_date')}</label>
            <div className="flex items-center gap-2">
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
              <span className="text-text-muted font-bold">~</span>
              <input type="date" className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:flex gap-3 flex-1 lg:flex-none">
            <div className="space-y-2">
              <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('common_status')}</label>
              <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2 text-xs font-bold focus:outline-none min-w-[120px] cursor-pointer">
                <option>{t('filter_member_status')}</option>
                <option>{t('common_active')}</option>
                <option>{t('common_inactive')}</option>
              </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_withdrawal')}</label>
                <select className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-2 text-xs font-bold focus:outline-none min-w-[120px] cursor-pointer">
                    <option>{t('common_status')}: {t('common_total')}</option>
                    <option>{t('label_possible')}</option>
                    <option>{t('label_impossible')}</option>
                </select>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <label className="text-xs font-black text-text-muted uppercase tracking-widest ml-1">{t('filter_keyword')}</label>
            <div className="flex gap-2">
              <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-2 text-xs font-bold focus:outline-none min-w-[100px] cursor-pointer">
                <option>{t('common_id')}</option>
                <option>{t('common_mobile')}</option>
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

          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <Search size={16} /> {t('common_search')}
            </button>
            <button className="px-4 py-2.5 bg-inputBg border border-border-custom text-text-secondary rounded-xl text-xs font-bold hover:bg-panel-hover transition-all flex items-center justify-center gap-2">
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-end px-2">
        <span className="text-xs font-black text-text-muted uppercase tracking-widest leading-none">
            {t('common_total')} : {mockMembers.length} {t('common_list')} (1/1) {t('common_page')}
        </span>
      </div>

      {/* Table Section */}
      <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden overflow-x-auto scrollbar-hide">
        <table className="w-full text-left min-w-[2000px]">
          <thead>
            <tr className="bg-inputBg/50 border-b border-border-custom">
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">No</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider">PK</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">{t('col_login_type')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">{t('col_account_id')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider whitespace-nowrap">{t('common_mobile')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_usdt')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_tron')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_xrp')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_eth')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_btc')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_wallet_aiw')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_view_holdings')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_withdraw_status')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_membership_status')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_user_rating')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('common_date')}</th>
              <th className="py-4 px-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center whitespace-nowrap">{t('col_correction')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-custom">
            {mockMembers.map((member) => (
              <tr key={member.pk} className="hover:bg-panel-hover transition-colors">
                <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{member.no}</td>
                <td className="py-4 px-4 text-xs font-bold text-text-main">{member.pk}</td>
                <td className="py-4 px-4 text-xs font-bold text-text-secondary">{member.loginType}</td>
                <td className="py-4 px-4 text-xs font-medium text-text-main underline decoration-text-muted/30 underline-offset-8">{member.id}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.mobile}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.usdt}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.tron}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.xrp}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.eth}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.btc}</td>
                <td className="py-4 px-4 text-xs text-text-muted text-center italic">{member.aiw}</td>
                <td className="py-4 px-4 text-center">
                  <button className="inline-flex p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-all">
                    <Eye size={14} />
                  </button>
                </td>
                <td className="py-4 px-4 text-xs font-bold text-text-main text-center">{member.withdrawalStatus === 'Possible' ? t('label_possible') : t('label_impossible')}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-2.5 py-1 text-xs uppercase tracking-wider font-bold rounded-lg ${member.status === 'Active' ? 'bg-success text-white' : 'bg-text-muted text-white'}`}>
                    {member.status === 'Active' ? t('common_active') : t('common_inactive')}
                  </span>
                </td>
                <td className="py-4 px-4 text-xs font-bold text-text-muted text-center">{member.rating}</td>
                <td className="py-4 px-4 text-xs font-medium text-text-main text-center whitespace-nowrap">{member.registrationDate}</td>
                <td className="py-4 px-4 text-center">
                  <Link
                    to={`/edit-member/${member.pk}`}
                    className="inline-flex p-1.5 bg-primary text-white rounded-lg hover:opacity-90 transition-all shadow-md shadow-primary/20"
                  >
                    <Edit size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="p-6 border-t border-border-custom bg-inputBg/10 flex justify-center items-center gap-3">
          <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 transition-all">{t('common_previous')}</button>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg shadow-primary/20">1</div>
          <button className="px-4 py-1.5 border border-border-custom rounded-full text-xs font-bold text-primary hover:bg-primary/10 transition-all">{t('common_next')}</button>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
