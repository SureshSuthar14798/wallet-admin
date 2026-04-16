import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Loader from './components/Loader';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import './App.css';

// Lazy loading pages for better performance and to show loader
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));
const Transactions = lazy(() => import('./pages/Transactions'));
const Settings = lazy(() => import('./pages/Settings'));
const AdminManagement = lazy(() => import('./pages/AdminManagement'));
const AdminRegistration = lazy(() => import('./pages/AdminRegistration'));
const AdminEdit = lazy(() => import('./pages/AdminEdit'));
const MemberList = lazy(() => import('./pages/MemberList'));
const EditMember = lazy(() => import('./pages/EditMember'));
const AvatarList = lazy(() => import('./pages/AvatarList'));
const AvatarRegistration = lazy(() => import('./pages/AvatarRegistration'));
const CoinManagement = lazy(() => import('./pages/CoinManagement'));
const ServiceCenter = lazy(() => import('./pages/ServiceCenter'));
const KYCDetails = lazy(() => import('./pages/KYCDetails'));
const LoginLogs = lazy(() => import('./pages/LoginLogs'));
const Profile = lazy(() => import('./pages/Profile'));
const NoticeList = lazy(() => import('./pages/NoticeList'));
const FaqList = lazy(() => import('./pages/FaqList'));
const AirdropCreate = lazy(() => import('./pages/AirdropCreate'));
const AirdropHistory = lazy(() => import('./pages/AirdropHistory'));
const CoinTransactionList = lazy(() => import('./pages/CoinTransactionList'));
const CoinSetting = lazy(() => import('./pages/CoinSetting'));
const MainWallet = lazy(() => import('./pages/MainWallet'));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the professional loader on initial boot/refresh
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/admin-management" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="settings" element={<Settings />} />
            
            <Route path="admin-management" element={<AdminManagement />} />
            <Route path="admin-registration" element={<AdminRegistration />} />
            <Route path="admin-edit/:id" element={<AdminEdit />} />
            <Route path="members" element={<MemberList />} />
            <Route path="edit-member/:id" element={<EditMember />} />
            <Route path="avatars" element={<AvatarList />} />
            <Route path="avatar-registration" element={<AvatarRegistration />} />
            
            {/* Detailed Routes */}
            <Route path="coin-management" element={<CoinManagement />} />
            <Route path="coin-transactions" element={<CoinTransactionList />} />
            <Route path="coin-settings" element={<CoinSetting />} />
            <Route path="main-wallet" element={<MainWallet />} />
            
            <Route path="airdrop-create" element={<AirdropCreate />} />
            <Route path="airdrop-history" element={<AirdropHistory />} />
            
            <Route path="service-center" element={<ServiceCenter />} />
            <Route path="notices" element={<NoticeList />} />
            <Route path="faqs" element={<FaqList />} />
            
            <Route path="kyc-details" element={<KYCDetails />} />
            <Route path="login-logs" element={<LoginLogs />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
