import type { RouteObject } from 'react-router'
import { ShellLayout } from './layouts/ShellLayout'
import { postsRoutes } from '@/modules/posts'

export const shellRoutes: RouteObject[] = [
  {
    path: 'app',
    element: <ShellLayout />,
    children: [...postsRoutes],
  },
]
