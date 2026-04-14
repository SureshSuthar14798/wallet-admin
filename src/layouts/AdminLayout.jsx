import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen bg-main transition-colors duration-500 font-sans overflow-hidden">
      {/* Sidebar - with state for mobile responsive */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity animate-fade"
          onClick={closeSidebar}
        ></div>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide relative">
           <div className="max-w-[1400px] mx-auto animate-enter">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
