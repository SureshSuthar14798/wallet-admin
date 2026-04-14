import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronRight, Eye, EyeOff, Save } from 'lucide-react';

const AdminEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animate-enter max-w-7xl mx-auto space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Admin Edit</h2>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl p-4 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          
          {/* Row 1 */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Id
            </label>
            <input 
              type="text" 
              defaultValue="qodwm@naver.com"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Name
            </label>
            <input 
              type="text" 
              defaultValue="Super Admin"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Administrator Mobile Number
            </label>
            <div className="flex flex-row gap-2">
              <select className="bg-inputBg border border-border-custom text-text-main rounded-xl px-2 sm:px-3 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all w-28 sm:w-32 cursor-pointer shadow-inner">
                <option value="">code</option>
                <option value="+82">+82 (KR)</option>
                <option value="+1">+1 (US)</option>
                <option value="+91">+91 (IN)</option>
              </select>
              <input 
                type="text" 
                defaultValue="9999651556"
                className="flex-1 bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Part
            </label>
            <input 
              type="text" 
              defaultValue="1"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Password
            </label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all pr-12 shadow-inner"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            <p className="text-[10px] text-color-danger font-bold tracking-tight px-1 italic opacity-80">Note: New password will replace current one.</p>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Status
            </label>
            <div className="flex items-center gap-6 h-[46px] bg-inputBg/50 border border-border-custom rounded-xl px-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="admin-status" defaultChecked className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-[11px] font-bold text-text-secondary peer-checked:text-text-main uppercase tracking-wider transition-colors">Active</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="admin-status" className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-[11px] font-bold text-text-secondary peer-checked:text-text-main uppercase tracking-wider transition-colors">Inactive</span>
              </label>
            </div>
          </div>

          {/* Row 3 - Full Width */}
          <div className="space-y-3 lg:col-span-3">
            <label className="text-[10px] font-black text-text-muted uppercase tracking-widest flex items-center gap-2 mb-1">
              <ChevronRight size={14} className="text-primary" /> Admin Notes
            </label>
            <input 
              type="text" 
              defaultValue="Sales Department Team Leader / Hong Gil-dong"
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
            />
          </div>

        </div>

        <div className="mt-10 flex gap-3">
          <button className="px-8 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
            <Save size={16} /> Save
          </button>
          <button 
            onClick={() => navigate('/admin-management')}
            className="px-8 py-2.5 bg-panel border-2 border-border-custom text-text-main rounded-lg text-sm font-bold hover:bg-panel-hover transition-all"
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
