import { createBrowserRouter, Navigate } from 'react-router'
import { LoginPage } from '../../modules/auth/pages/LoginPage'
import { RegisterPage } from '../../modules/auth/pages/RegisterPage'
import { AuthLayout } from '../../shared/layouts/AuthLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />,
  },
])
