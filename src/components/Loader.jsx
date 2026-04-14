import React from 'react';

const Loader = ({ fullScreen = true }) => {
  const containerClass = fullScreen 
    ? "fixed inset-0 z-[100] flex items-center justify-center bg-main/80 backdrop-blur-sm"
    : "flex w-full items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-4 animate-fade">
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin shadow-[0_0_15px_rgba(139,92,246,0.3)]"></div>
          
          {/* Inner pulse */}
          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-ping"></div>
        </div>
        <div className="text-primary/80 text-xs font-semibold tracking-[0.2em] uppercase animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Loader;
