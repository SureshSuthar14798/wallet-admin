import React, { useState, useEffect, useRef } from 'react';
import { Bell, Search, UserCircle, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const notifications = [
    { id: 1, title: 'New User Registered', time: '5m ago', unread: true },
    { id: 2, title: 'System Update Completed', time: '1h ago', unread: false },
    { id: 3, title: 'Server Memory Alert', time: '2h ago', unread: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <header className="h-16 bg-glass backdrop-blur-md border-b border-border-custom px-6 flex items-center justify-between sticky top-0 z-40 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        {/* <div className="relative w-full max-w-[280px] group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search parameters..." 
            className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl pl-10 pr-4 py-2 text-[11px] font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/40"
          />
        </div> */}
      </div>

      <div className="flex items-center gap-3">
         <div className="flex items-center gap-1 p-1 bg-inputBg rounded-xl border border-border-custom">
            <button 
                onClick={toggleTheme} 
                className={`p-1.5 rounded-lg transition-all ${!isDark ? 'bg-panel-solid shadow-sm text-primary border border-border-custom' : 'text-text-muted hover:text-text-main'}`}
            >
                <Sun size={14} />
            </button>
            <button 
                onClick={toggleTheme} 
                className={`p-1.5 rounded-lg transition-all ${isDark ? 'bg-panel-solid shadow-sm text-primary border border-border-custom' : 'text-text-muted hover:text-text-main'}`}
            >
                <Moon size={14} />
            </button>
         </div>
         
         <div className="relative" ref={notifRef}>
             <button 
                 onClick={() => setShowNotifications(!showNotifications)}
                 className={`w-9 h-9 flex items-center justify-center relative rounded-xl border transition-all focus:outline-none ${showNotifications ? 'bg-panel border-primary shadow-sm shadow-primary/10 text-primary' : 'bg-inputBg border-border-custom text-text-muted hover:text-primary'}`}
             >
                  <Bell size={16} />
                  <span className="absolute top-2.5 right-2.5 w-[6px] h-[6px] bg-danger rounded-full border border-panel shadow-sm block"></span>
             </button>

             {showNotifications && (
                 <div className="absolute right-0 mt-2 w-72 bg-panel border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden animate-scale-in transform origin-top-right">
                     <div className="px-5 py-4 border-b border-border-custom flex justify-between items-center bg-inputBg/30">
                         <h3 className="text-sm font-bold text-text-main tracking-tight">Notifications</h3>
                         <span className="text-[10px] font-black text-primary uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity">Mark all read</span>
                     </div>
                     <div className="max-h-80 overflow-y-auto scrollbar-hide flex flex-col">
                        {notifications.map(n => (
                            <div key={n.id} className="p-5 border-b border-border-custom last:border-0 hover:bg-inputBg/50 cursor-pointer transition-colors flex gap-3 items-start group">
                                <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 transition-colors ${n.unread ? 'bg-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'bg-text-muted/30 group-hover:bg-text-muted/50'}`}></div>
                                <div className="space-y-1">
                                    <div className={`text-xs leading-tight ${n.unread ? 'font-bold text-text-main' : 'font-medium text-text-secondary'}`}>{n.title}</div>
                                    <div className="text-[10px] font-black text-text-muted tracking-widest uppercase">{n.time}</div>
                                </div>
                            </div>
                        ))}
                     </div>
                     <div className="p-3 border-t border-border-custom bg-inputBg/30 text-center">
                         <button className="text-[10px] font-black text-text-muted uppercase tracking-widest hover:text-primary transition-colors py-1 px-4 rounded-lg">View All Notifications</button>
                     </div>
                 </div>
             )}
         </div>

         <div className="h-8 w-px bg-border-custom mx-1"></div>

         <div className="flex items-center gap-3 pl-2 group cursor-pointer relative" ref={profileRef} onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-text-main leading-tight group-hover:text-primary transition-colors">Admin_Alpha</div>
              <div className="text-[10px] font-black text-success uppercase tracking-widest flex items-center justify-end gap-1">
                <div className="w-1 h-1 rounded-full bg-success"></div> Online
              </div>
            </div>
            <div className="w-9 h-9 border border-border-custom rounded-xl overflow-hidden shadow-sm group-active:scale-95 transition-all bg-inputBg flex items-center justify-center">
              <UserCircle size={28} className="text-text-muted group-hover:text-primary transition-colors" />
            </div>

            {showProfileMenu && (
                 <div className="absolute right-0 top-full mt-2 w-44 bg-panel border border-border-custom rounded-2xl shadow-xl z-50 overflow-hidden animate-scale-in transform origin-top-right">
                     <div className="p-1.5 flex flex-col">
                        <button 
                            onClick={() => navigate('/profile')}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-text-secondary hover:text-text-main hover:bg-inputBg transition-all"
                        >
                            <UserCircle size={18} /> View Profile
                        </button>
                        <div className="h-px bg-border-custom my-1 mx-2"></div>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-danger hover:bg-danger hover:text-white transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                            Logout
                        </button>
                     </div>
                 </div>
             )}
         </div>
      </div>
    </header>
  );
};

export default Header;
