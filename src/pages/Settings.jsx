import React, { useState } from 'react';
import { Shield, Settings as SettingsIcon, Bell, Database } from 'lucide-react';

const Settings = () => {
  const [pulseMode, setPulseMode] = useState('live'); // 'live' or 'maintenance'
  const [authProtocol, setAuthProtocol] = useState('2fa'); // '2fa' or 'optional'
  const [telegramNotifications, setTelegramNotifications] = useState(true);

  return (
    <div className="animate-enter space-y-6 max-w-[1000px]">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-text-main tracking-tight">System Configuration</h2>
        <p className="text-xs text-text-muted font-medium">Global parameters and node security settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Parameters */}
        <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border-custom bg-inputBg/30 flex items-center gap-2">
            <SettingsIcon size={18} className="text-primary" />
            <h3 className="text-sm font-bold text-text-main">General Parameters</h3>
          </div>
          <div className="p-5 space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Platform Broadcast Name</label>
              <input type="text" defaultValue="Crypto Admin Global" className="w-full bg-inputBg border border-border-custom rounded-xl px-4 py-2 text-xs font-semibold text-text-main outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Support Endpoint (Email)</label>
              <input type="email" defaultValue="support@s-crypto.corp" className="w-full bg-inputBg border border-border-custom rounded-xl px-4 py-2 text-xs font-semibold text-text-main outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Node System Pulse</label>
              <div className="flex bg-inputBg p-1 rounded-xl gap-1 border border-border-custom">
                <button 
                  onClick={() => setPulseMode('live')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${pulseMode === 'live' ? 'bg-panel border border-border-custom shadow-sm text-primary' : 'text-text-muted hover:text-text-main'}`}
                >
                  Live Pulse
                </button>
                <button 
                  onClick={() => setPulseMode('maintenance')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${pulseMode === 'maintenance' ? 'bg-panel border border-border-custom shadow-sm text-warning' : 'text-text-muted hover:text-text-main'}`}
                >
                  Maintenance
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 bg-inputBg/30 border-t border-border-custom flex justify-end">
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all">Update Parameters</button>
          </div>
        </div>

        {/* Security Matrix */}
        <div className="bg-panel border border-border-custom rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-border-custom bg-inputBg/30 flex items-center gap-2">
            <Shield size={18} className="text-success" />
            <h3 className="text-sm font-bold text-text-main">Security Matrix</h3>
          </div>
          <div className="p-5 space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Admin Auth Protocol</label>
              <div className="flex bg-inputBg p-1 rounded-xl gap-1 border border-border-custom">
                <button 
                  onClick={() => setAuthProtocol('2fa')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authProtocol === '2fa' ? 'bg-panel border border-border-custom shadow-sm text-success' : 'text-text-muted hover:text-text-main'}`}
                >
                  2FA Enforced
                </button>
                <button 
                  onClick={() => setAuthProtocol('optional')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authProtocol === 'optional' ? 'bg-panel border border-border-custom shadow-sm text-text-muted' : 'text-text-muted hover:text-text-main'}`}
                >
                  Optional
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Session Timeout (Mins)</label>
              <input type="number" defaultValue="30" className="w-full bg-inputBg border border-border-custom rounded-xl px-4 py-2 text-xs font-semibold text-text-main outline-none focus:ring-2 focus:ring-success/20 transition-all" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest ml-0.5">Network Notification Hub</label>
              <div className="flex items-center justify-between p-2 rounded-xl border border-border-custom bg-inputBg">
                  <span className="text-xs font-bold text-text-secondary">Telegram Bot Notifications</span>
                  <div 
                    onClick={() => setTelegramNotifications(!telegramNotifications)}
                    className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors duration-300 ${telegramNotifications ? 'bg-success' : 'bg-text-muted/30'}`}
                  >
                      <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300 ${telegramNotifications ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-inputBg/30 border-t border-border-custom flex justify-end">
            <button className="px-5 py-2 bg-success text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all">Secure Matrix</button>
          </div>
        </div>
      </div>

      {/* Critical Hub */}
      <div className="bg-danger/5 border border-danger/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-danger rounded-xl flex items-center justify-center text-white shadow-lg shadow-danger/20">
                  <Database size={24} />
              </div>
              <div>
                  <h4 className="text-lg font-bold text-text-main leading-tight">Emergency Terminal Lockdown</h4>
                  <p className="text-xs text-text-muted font-medium">Instantly freeze all asset movement across global cold wallets.</p>
              </div>
          </div>
          <button className="w-full sm:w-auto px-8 py-3 bg-danger text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-danger/20 hover:opacity-90 transition-all active:scale-[0.98]">
            Shut Down Console
          </button>
      </div>

      <div className="flex justify-center flex-col items-center gap-1.5 opacity-30">
          <div className="text-xs font-bold text-text-muted uppercase tracking-[3px]">Crypto Admin Console v2.0.4-Stable</div>
          <div className="text-xs font-bold text-text-muted uppercase tracking-[2px]">Secured by Cluster Alpha-Prime</div>
      </div>
    </div>
  );
};

export default Settings;
