import { Outlet } from 'react-router'

export function PostsLayout() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-(--text-primary)">
          Posts
        </h1>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Review content and manage posts.
        </p>
      </header>

      <Outlet />
    </div>
  )
}
