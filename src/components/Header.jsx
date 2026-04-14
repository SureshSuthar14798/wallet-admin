import React, { useState, useEffect } from 'react';
import { Bell, Search, UserCircle, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(true);

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
         
         <button className="w-9 h-9 flex items-center justify-center relative bg-inputBg rounded-xl border border-border-custom text-text-muted hover:text-primary transition-all">
              <Bell size={16} />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-danger rounded-full border-2 border-panel shadow-sm"></span>
         </button>

         <div className="h-8 w-px bg-border-custom mx-1"></div>

         <div className="flex items-center gap-3 pl-2 group cursor-pointer" onClick={handleLogout}>
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-text-main leading-tight group-hover:text-primary transition-colors">Admin_Alpha</div>
              <div className="text-[10px] font-black text-success uppercase tracking-widest flex items-center justify-end gap-1">
                <div className="w-1 h-1 rounded-full bg-success"></div> Online
              </div>
            </div>
            <div className="w-9 h-9 border border-border-custom rounded-xl overflow-hidden shadow-sm group-active:scale-95 transition-all bg-inputBg flex items-center justify-center">
              <UserCircle size={28} className="text-text-muted group-hover:text-primary transition-colors" />
            </div>
         </div>
      </div>
    </header>
  );
};

export default Header;
