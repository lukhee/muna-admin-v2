import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginView from './components/views/auth/Login'
import RegisterView from './components/views/auth/Register'
import NotFoundView from './components/views/error/NotFoundView'
import MainLayout from './components/layout/MainLayout'

const routes = [
//   {
//     path: 'app',
//     element: <DashboardLayout />,
//     children: [
//       { path: 'account', element: <AccountView /> },
//       { path: 'customers', element: <CustomerListView /> },
//       { path: 'dashboard', element: <DashboardView /> },
//       { path: 'products', element: <ProductListView /> },
//       { path: 'settings', element: <SettingsView /> },
//       { path: '*', element: <Navigate to="/404" /> }
//     ]
//   },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
    //   { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
