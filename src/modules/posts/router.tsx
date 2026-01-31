import type { RouteObject } from 'react-router'
import { PostsLayout } from './layouts/PostsLayout'
import { PostDetailPage } from './pages/PostDetailPage'
import { PostsPage } from './pages/PostsPage'

export const postsRoutes: RouteObject[] = [
  {
    path: 'posts',
    element: <PostsLayout />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'new', element: <PostDetailPage /> },
      { path: ':postId', element: <PostDetailPage /> },
    ],
  },
]
