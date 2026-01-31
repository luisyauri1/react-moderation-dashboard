import { NavLink } from 'react-router'

type Props = {
  brand: {
    name: string
    accent?: string
    tagline?: string
  }
}

export function ShellBrand({ brand }: Props) {
  return (
    <NavLink
      to="/app/posts"
      className="group inline-block rounded-lg px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)/40"
      aria-label="Go to dashboard"
    >
      <div>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xl font-semibold tracking-tight text-(--text-primary)">
          <span>{brand.name}</span>

          {brand.accent ? (
            <span className="text-base font-medium text-(--primary)">
              {brand.accent}
            </span>
          ) : null}
        </p>

        {brand.tagline ? (
          <p className="mt-1 text-sm text-(--text-secondary)">
            {brand.tagline}
          </p>
        ) : null}

        <div className="mt-2 h-px w-10 bg-(--primary-soft) opacity-70 transition-opacity group-focus-visible:opacity-100" />
      </div>
    </NavLink>
  )
}
