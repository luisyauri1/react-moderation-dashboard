import { Divider } from '@/shared/ui'
import { NavLink, Outlet } from 'react-router'

const linkBase =
  'rounded-xl px-3 py-2 text-sm transition border border-transparent'
const linkInactive =
  'text-(--text-secondary) hover:text-(--text) hover:bg-(--panel-2)'
const linkActive = 'text-(--text) bg-(--panel-2) border-(--border) shadow-sm'

export function PostsLayout() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-(--border) bg-(--panel) p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Manage content and review posts
        </p>

        <Divider className="my-4" />

        <nav className="flex flex-wrap gap-2">
          <NavLink
            to="/posts"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            All posts
          </NavLink>

          <NavLink
            to="/posts/new"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            New post
          </NavLink>
        </nav>
      </header>

      <main className="rounded-2xl border border-(--border) bg-(--panel) p-6 shadow-sm">
        <Outlet />
      </main>
    </div>
  )
}
