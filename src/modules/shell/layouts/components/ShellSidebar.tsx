import { NavLink } from 'react-router'
import type { ShellNavItem } from '../../shell.config'

type Props = {
  items: ShellNavItem[]
}

const base =
  'group relative flex items-center rounded-xl px-4 py-3 text-base font-medium transition outline-none'
const inactive =
  'text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-elevated)'
const active = 'bg-(--bg-elevated) text-(--text-primary)'

export function ShellSidebar({ items }: Props) {
  return (
    <nav className="space-y-1.5">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              base,
              isActive ? active : inactive,
              'focus-visible:ring-2 focus-visible:ring-(--primary)/35',
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={[
                  'absolute left-0 top-1/2 -translate-y-1/2 rounded-r',
                  isActive
                    ? 'h-6 w-1.5 bg-(--primary)'
                    : 'h-6 w-1.5 bg-transparent',
                ].join(' ')}
                aria-hidden="true"
              />

              <span className="relative">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
