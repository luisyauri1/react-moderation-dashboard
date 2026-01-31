import { NavLink } from 'react-router'
import type { ShellNavItem } from '../../shell.config'

type Props = {
  items: ShellNavItem[]
}

const base =
  'flex items-center rounded-xl px-3 py-2 text-sm transition border border-transparent'
const inactive =
  'text-(--text-secondary) hover:text-(--text-primary) hover:bg-white/5'
const active = 'bg-white/5 text-(--text-primary) border-white/10'

export function ShellSidebar({ items }: Props) {
  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${base} ${isActive ? active : inactive}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
