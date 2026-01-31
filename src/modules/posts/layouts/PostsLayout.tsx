import { Divider } from '@/shared/ui'
import { NavLink, Outlet } from 'react-router'

const linkBase =
  'rounded-xl px-3 py-2 text-sm transition border border-transparent'
const linkInactive =
  'text-(--text-secondary) hover:text-(--text-primary) hover:bg-white/5'
const linkActive = 'bg-white/5 text-(--text-primary) border-white/10'

export function PostsLayout() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Manage content and review posts
        </p>

        <Divider className="my-4" />

        <nav className="flex flex-wrap gap-2">
          <NavLink
            to="/app/posts"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            All posts
          </NavLink>

          <NavLink
            to="/app/posts/new"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            New post
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  )
}
