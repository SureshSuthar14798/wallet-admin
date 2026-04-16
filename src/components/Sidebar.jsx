import { 
  UserCog, 
  Users, 
  List, 
  Image as ImageIcon, 
  Coins, 
  Settings, 
  Wallet, 
  Gift, 
  Plus, 
  History, 
  Headset, 
  Megaphone, 
  HelpCircle, 
  FileText, 
  Activity, 
  User, 
  ChevronDown, 
  ChevronRight, 
  LogOut,
  TrendingUp,
  X 
} from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useLanguage } from '../context/LanguageContext';

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Define menu items first so they can be used for initial state calculation
  const menuItems = [
    { 
      path: '/admin-management', 
      name: t('nav_admin_management'), 
      icon: <UserCog size={16} /> 
    },
    { 
      name: t('nav_member_management'), 
      icon: <Users size={16} />,
      id: 'member',
      submenu: [
        { path: '/members', name: t('nav_member_list'), icon: <List size={14} /> },
        { path: '/avatars', name: t('nav_avatar_list'), icon: <ImageIcon size={14} /> },
        { path: '/edit-member', name: t('nav_member_edit'), icon: <UserCog size={14} />, hidden: true },
        { path: '/avatar-registration', name: t('nav_avatar_reg'), icon: <Plus size={14} />, hidden: true },
      ]
    },
    { 
      name: t('nav_coin_management'), 
      icon: <Coins size={16} />,
      id: 'coin',
      submenu: [
        { path: '/coin-transactions', name: t('nav_coin_transaction_list'), icon: <List size={14} /> },
        { path: '/coin-settings', name: t('nav_coin_setting'), icon: <Settings size={14} /> },
        { path: '/main-wallet', name: t('nav_main_wallet'), icon: <Wallet size={14} /> },
        { path: '/coin-management', name: t('coin_management'), icon: <TrendingUp size={14} />, hidden: true },
      ]
    },
    { 
      name: t('nav_airdrop_management'), 
      icon: <Gift size={16} />,
      id: 'airdrop',
      submenu: [
        { path: '/airdrop-create', name: t('nav_airdrop_create'), icon: <Plus size={14} /> },
        { path: '/airdrop-history', name: t('nav_airdrop_history'), icon: <History size={14} /> },
      ]
    },
    { 
      name: t('nav_service_center'), 
      icon: <Headset size={16} />,
      id: 'service',
      submenu: [
        { path: '/notices', name: t('nav_notice'), icon: <Megaphone size={14} /> },
        { path: '/faqs', name: t('nav_faq_list'), icon: <HelpCircle size={14} /> },
        { path: '/service-center', name: t('service_center'), icon: <Settings size={14} />, hidden: true },
      ]
    },
    { 
      path: '/kyc-details', 
      name: t('nav_kyc_details'), 
      icon: <FileText size={16} /> 
    },
    { 
      path: '/login-logs', 
      name: t('nav_login_logs'), 
      icon: <Activity size={16} /> 
    },
    { 
      path: '/profile', 
      name: t('nav_my_profile'), 
      icon: <User size={16} /> 
    },
  ];

  const [openSubmenu, setOpenSubmenu] = useState(() => {
    // Initial calculation to open the correct submenu on refresh
    const activeItem = menuItems.find(item => 
      item.submenu && item.submenu.some(sub => 
        location.pathname.startsWith(sub.path)
      )
    );
    return activeItem ? activeItem.id : null;
  });

  // Also update when pathname changes if it hits a different submenu
  React.useEffect(() => {
    const activeItem = menuItems.find(item => 
      item.submenu && item.submenu.some(sub => 
        location.pathname.startsWith(sub.path)
      )
    );
    if (activeItem) {
      setOpenSubmenu(activeItem.id);
    }
  }, [location.pathname]);

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 w-[290px] bg-panel border-r border-border-custom flex flex-col z-[60] transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="h-16 flex items-center justify-between px-6 border-b border-border-custom bg-panel-solid/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center shadow-lg shadow-primary/20">
            <Wallet size={16} className="text-white" />
          </div>
          <span className="text-sm font-black text-text-main uppercase tracking-widest">Crypto Admin</span>
        </div>
        <button onClick={onClose} className="lg:hidden p-1.5 text-text-muted hover:text-text-main transition-colors">
            <X size={20} />
        </button>
      </div>

      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => {
          if (item.submenu) {
            const isOpen = openSubmenu === item.id;
            const isAnyChildActive = item.submenu.some(sub => 
              location.pathname === sub.path || location.pathname.startsWith(sub.path + '/')
            );

            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => setOpenSubmenu(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold text-[12px] uppercase tracking-widest border border-transparent ${
                    isAnyChildActive ? 'text-primary' : 'text-text-secondary hover:text-text-main hover:bg-panel-hover'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={isAnyChildActive ? 'opacity-100' : 'opacity-60'}>{item.icon}</div>
                    {item.name}
                  </div>
                  {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                
                {isOpen && (
                  <div className="ml-[25px] space-y-1 border-l border-border-custom transition-all">
                    {item.submenu.filter(sub => !sub.hidden).map((sub) => {
                      const isActive = location.pathname === sub.path || location.pathname.startsWith(sub.path + '/');
                      return (
                        <NavLink 
                          key={sub.path} 
                          to={sub.path} 
                          onClick={() => { if(window.innerWidth < 1024) onClose(); }}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all font-bold text-[12px] uppercase tracking-widest ${
                            isActive 
                              ? 'text-primary' 
                              : 'text-text-muted hover:text-text-main hover:bg-panel-hover'
                          }`}
                        >
                          <div className={isActive ? 'opacity-100' : 'opacity-40'}>•</div>
                          {sub.name}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const isActive = location.pathname === item.path;
          return (
            <NavLink 
              key={item.path} 
              to={item.path} 
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-[12px] uppercase tracking-widest ${
                isActive 
                  ? 'text-white bg-primary shadow-sm shadow-primary/5' 
                  : 'text-text-secondary hover:text-text-main hover:bg-panel-hover'
              }`}
            >
              <div className={`${isActive ? 'opacity-100 scale-110' : 'opacity-60'} transition-transform`}>{item.icon}</div>
              {item.name}
            </NavLink>
          );
        })}
      </div>

      <div className="p-4 border-t border-border-custom bg-panel-solid/30">
        <button 
          onClick={() => {
            localStorage.removeItem('isLoggedIn');
            toast.success(t('toast_logoutSuccess'));
            setTimeout(() => {
                window.location.href = '/login';
            }, 500);
          }}
          className="w-full flex items-center justify-center gap-3 py-3 bg-panel border border-border-custom text-[10px] font-black uppercase tracking-[2px] text-danger hover:bg-danger hover:text-white rounded-xl transition-all shadow-sm"
        >
          <LogOut size={16} />
          {t('nav_signOut')}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;