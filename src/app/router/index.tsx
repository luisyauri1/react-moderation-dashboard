import { authRoutes } from '@/modules/auth'
import { createBrowserRouter, Navigate } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
  },
  authRoutes,
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />,
  },
])
