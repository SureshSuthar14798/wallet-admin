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

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState('member'); // Default open or based on location

  const menuItems = [
    { 
      path: '/admin-management', 
      name: 'Admin Management', 
      icon: <UserCog size={16} /> 
    },
    { 
      name: 'Member Management', 
      icon: <Users size={16} />,
      id: 'member',
      submenu: [
        { path: '/members', name: 'Member List', icon: <List size={14} /> },
        { path: '/avatars', name: 'Avatar List', icon: <ImageIcon size={14} /> },
      ]
    },
    { 
      name: 'Coin Management', 
      icon: <Coins size={16} />,
      id: 'coin',
      submenu: [
        { path: '/coin-transactions', name: 'Coin Transaction List', icon: <List size={14} /> },
        { path: '/coin-settings', name: 'Coin Setting', icon: <Settings size={14} /> },
        { path: '/main-wallet', name: 'Main Wallet', icon: <Wallet size={14} /> },
      ]
    },
    { 
      name: 'Air Drop Management', 
      icon: <Gift size={16} />,
      id: 'airdrop',
      submenu: [
        { path: '/airdrop-create', name: 'Airdrop Create', icon: <Plus size={14} /> },
        { path: '/airdrop-history', name: 'Airdrop History', icon: <History size={14} /> },
      ]
    },
    { 
      name: 'Service Center', 
      icon: <Headset size={16} />,
      id: 'service',
      submenu: [
        { path: '/notices', name: 'Notice', icon: <Megaphone size={14} /> },
        { path: '/faqs', name: 'Faq List', icon: <HelpCircle size={14} /> },
      ]
    },
    { 
      path: '/kyc-details', 
      name: 'KYC Details', 
      icon: <FileText size={16} /> 
    },
    { 
      path: '/login-logs', 
      name: 'Users Login Logs', 
      icon: <Activity size={16} /> 
    },
    { 
      path: '/profile', 
      name: 'My Profile', 
      icon: <User size={16} /> 
    },
  ];

  return (
    <aside className={`
      fixed lg:static inset-y-0 left-0 w-[260px] bg-panel border-r border-border-custom flex flex-col z-[60] transition-transform duration-300 ease-in-out
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
        {/* Dashboard Link always visible */}
        {/* <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest border ${
            isActive 
              ? 'text-white border-primary/20 bg-gradient-to-r from-primary via-primary/[0.05] to-transparent shadow-sm shadow-primary/5' 
              : 'text-text-secondary hover:text-text-main hover:bg-panel-hover border-transparent'
          }`}
        >
          <div className="opacity-100"><TrendingUp size={16} /></div>
          Dashboard
        </NavLink> */}

        {menuItems.map((item) => {
          if (item.submenu) {
            const isOpen = openSubmenu === item.id;
            const isAnyChildActive = item.submenu.some(sub => location.pathname === sub.path);

            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => setOpenSubmenu(isOpen ? null : item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest border border-transparent ${
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
                    {item.submenu.map((sub) => {
                      const isActive = location.pathname === sub.path;
                      return (
                        <NavLink 
                          key={sub.path} 
                          to={sub.path} 
                          onClick={() => { if(window.innerWidth < 1024) onClose(); }}
                          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all font-bold text-[10px] uppercase tracking-widest ${
                            isActive 
                              ? 'text-primary bg-primary/5' 
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
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest border ${
                isActive 
                  ? 'text-white border-border-custom bg-gradient-to-r from-primary via-primary/[0.05] to-transparent shadow-sm shadow-primary/5' 
                  : 'text-text-secondary hover:text-text-main hover:bg-panel-hover border-transparent'
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
            toast.success('Logged out successfully');
            setTimeout(() => {
                window.location.href = '/login';
            }, 500);
          }}
          className="w-full flex items-center justify-center gap-3 py-3 bg-panel border border-border-custom text-[10px] font-black uppercase tracking-[2px] text-danger hover:bg-danger hover:text-white rounded-xl transition-all shadow-sm"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;