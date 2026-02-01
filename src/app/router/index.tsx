import { authRoutes } from '@/modules/auth'
import { shellRoutes } from '@/modules/shell'
import { createBrowserRouter } from 'react-router'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { RootRedirect } from './RootRedirect'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRedirect />,
  },
  ...authRoutes.map((route) => ({
    ...route,
    element: <PublicRoute>{route.element}</PublicRoute>,
  })),
  ...shellRoutes.map((route) => ({
    ...route,
    element: <ProtectedRoute>{route.element}</ProtectedRoute>,
  })),
  {
    path: '*',
    element: <RootRedirect />,
  },
])
