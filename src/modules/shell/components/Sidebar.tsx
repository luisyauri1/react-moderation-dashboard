import { NavLink } from 'react-router'

const base = 'flex items-center rounded-xl px-3 py-2 text-sm transition'
const inactive =
  'text-(--text-secondary) hover:text-(--text) hover:bg-(--panel-2)'
const active = 'bg-(--panel-2) text-(--text) shadow-sm'

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-(--border) bg-(--panel) p-4">
      <div className="mb-6 px-2">
        <h1 className="text-lg font-semibold tracking-tight">Admin</h1>
        <p className="text-xs text-(--text-secondary)">Moderation</p>
      </div>

      <nav className="space-y-1">
        <NavLink
          to="/app/posts"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Posts
        </NavLink>

        <NavLink
          to="/app/users"
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  )
}
