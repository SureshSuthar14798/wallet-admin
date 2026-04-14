import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Save, Upload } from 'lucide-react';

const AvatarRegistration = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  return (
    <div className="animate-enter max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">Register your avatar</h2>
      </div>

      <div className="bg-panel border border-border-custom rounded-2xl p-8 shadow-sm">
        <div className="space-y-8">
          
          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> Avatar Name
            </label>
            <input 
              type="text" 
              placeholder="Please enter your avatar name."
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> Avatar Image File
            </label>
            <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="Upload File"
                  readOnly
                  className="flex-1 bg-inputBg border border-border-custom text-text-muted rounded-xl px-4 py-3 text-sm focus:outline-none cursor-default"
                />
                <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef}
                    accept="image/*"
                />
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-primary/20 text-primary border border-primary rounded-xl text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <Upload size={16} /> File Selection
                </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold text-text-main flex items-center gap-1">
              <ChevronRight size={14} className="text-primary" /> Whether Or Not To Use
            </label>
            <div className="flex items-center gap-8 h-[46px pl-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="avatar-status" defaultChecked className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-primary peer-checked:bg-primary transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm font-bold text-text-main transition-colors">Used</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="avatar-status" className="hidden peer" />
                  <div className="w-4 h-4 rounded-full border-2 border-border-custom peer-checked:border-border-custom peer-checked:bg-border-custom transition-all flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">Not Used</span>
              </label>
            </div>
          </div>

        </div>

        <div className="mt-10 flex gap-3">
          <button className="px-8 py-2.5 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2">
            <Save size={16} /> Save
          </button>
          <button 
            onClick={() => navigate('/avatars')}
            className="px-8 py-2.5 bg-panel border-2 border-border-custom text-text-main rounded-lg text-sm font-bold hover:bg-panel-hover transition-all"
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarRegistration;
