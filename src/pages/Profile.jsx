import React from 'react';
import { User, Mail, Shield, Smartphone, Key, Save, Building } from 'lucide-react';

const Profile = () => {
  return (
    <div className="animate-enter max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-text-main tracking-tight">My Profile</h2>
          <p className="text-xs text-text-muted font-medium">Manage your administrative ID and security settings</p>
        </div>
      </div>

      <div className="bg-panel border border-border-custom rounded-[24px] p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        
        <form className="space-y-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            
            {/* Admin ID - Read Only */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                <Mail size={12} className="text-primary" /> Admin ID
              </label>
              <input 
                type="text" 
                defaultValue="qodwm@naver.com" 
                readOnly
                className="w-full bg-inputBg border border-border-custom text-text-muted rounded-xl px-4 py-3 text-xs font-bold cursor-not-allowed opacity-70"
              />
            </div>

            {/* Admin Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                <User size={12} className="text-primary" /> Admin Name
              </label>
              <input 
                type="text" 
                defaultValue="Super Admin" 
                className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                <Smartphone size={12} className="text-primary" /> Administrator Mobile Number
              </label>
              <div className="flex gap-2">
                <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-3 py-3 text-xs font-bold focus:outline-none min-w-[100px]">
                    <option>Select code</option>
                    <option>+82</option>
                    <option>+1</option>
                </select>
                <input 
                    type="text" 
                    defaultValue="9999651556" 
                    className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Manager's Department */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                <Building size={12} className="text-primary" /> Manager's Department
              </label>
              <input 
                type="text" 
                defaultValue="1" 
                readOnly
                className="w-full bg-inputBg border border-border-custom text-text-muted rounded-xl px-4 py-3 text-xs font-bold cursor-not-allowed opacity-70"
              />
            </div>

            {/* Admin Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-text-muted uppercase tracking-[2px] flex items-center gap-2">
                <Key size={12} className="text-primary" /> Admin Password
              </label>
              <input 
                type="password" 
                placeholder="Enter new password to change"
                className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

          </div>

          <div className="pt-6 border-t border-border-custom">
            <button className="px-10 py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
                <Save size={16} /> Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="bg-primary/5 border border-primary rounded-[20px] p-6 flex gap-4 items-start">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <Shield size={20} />
        </div>
        <div>
            <h4 className="text-sm font-bold text-text-main mb-1">Security Tip</h4>
            <p className="text-xs text-text-muted leading-relaxed">Ensure your password is at least 12 characters long and contains a mix of letters, numbers, and symbols to maintain high-level administrative security.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
