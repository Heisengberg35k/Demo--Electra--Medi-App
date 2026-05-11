import React from 'react';
import { createBrowserRouter } from 'react-router';
import { PhoneFrame } from './components/PhoneFrame';
import { SplashScreen } from './components/mobile/SplashScreen';
import { WelcomeScreen } from './components/mobile/WelcomeScreen';
import { LoginScreen, RegisterScreen } from './components/mobile/AuthScreens';
import { WorkerApp } from './components/mobile/worker/WorkerApp';
import { OrgApp } from './components/mobile/organisation/OrgApp';
import { CustomerApp } from './components/mobile/customer/CustomerApp';
import { AdminLayout } from './components/admin/AdminLayout';

function MobileWrapper({ children }: { children: React.ReactNode }) {
  return <PhoneFrame>{children}</PhoneFrame>;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileWrapper><SplashScreen /></MobileWrapper>,
  },
  {
    path: '/welcome',
    element: <MobileWrapper><WelcomeScreen /></MobileWrapper>,
  },
  {
    path: '/login',
    element: <MobileWrapper><LoginScreen /></MobileWrapper>,
  },
  {
    path: '/register',
    element: <MobileWrapper><RegisterScreen /></MobileWrapper>,
  },
  {
    path: '/worker',
    element: <MobileWrapper><WorkerApp /></MobileWrapper>,
  },
  {
    path: '/organisation',
    element: <MobileWrapper><OrgApp /></MobileWrapper>,
  },
  {
    path: '/customer',
    element: <MobileWrapper><CustomerApp /></MobileWrapper>,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
  },
]);
