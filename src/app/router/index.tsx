import { authRoutes } from '@/modules/auth'
import { postsRoutes } from '@/modules/posts'
import { createBrowserRouter, Navigate } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
  },
  ...authRoutes,
  ...postsRoutes,
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />,
  },
])
