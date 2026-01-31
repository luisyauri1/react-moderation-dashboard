import { authRoutes } from '@/modules/auth'
import { shellRoutes } from '@/modules/shell'
import { createBrowserRouter, Navigate } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
  },
  ...authRoutes,
  ...shellRoutes,
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />,
  },
])
