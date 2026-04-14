import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/admin-management');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-main transition-colors p-4">
      <div className="w-full max-w-[400px] bg-panel border-border-custom rounded-3xl p-8 shadow-sm animate-enter border">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-[14px] flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <Wallet className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-text-main mb-1">Admin Console</h1>
          <p className="text-sm text-text-muted font-medium">Crypto Admin Wallet Management</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-muted ml-1 uppercase">Email</label>
            <input 
              type="email" 
              placeholder="admin@s-crypto.com" 
              className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-text-muted ml-1 uppercase">Password</label>
            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-inputBg border border-border-custom text-text-main rounded-2xl px-5 py-3.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-text-muted/40 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <button type="submit" className="w-full py-4 bg-primary text-white rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all mt-4 border border-white/10">
            Sign In
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6">
            <span className="text-[11px] font-bold text-text-muted hover:text-primary cursor-pointer transition-colors uppercase tracking-wider">Privacy</span>
            <span className="text-[11px] font-bold text-text-muted hover:text-primary cursor-pointer transition-colors uppercase tracking-wider">Security</span>
            <span className="text-[11px] font-bold text-text-muted hover:text-primary cursor-pointer transition-colors uppercase tracking-wider">Help</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
