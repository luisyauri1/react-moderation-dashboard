import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  title?: ReactNode
  right?: ReactNode
}

const base =
  'group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--panel) shadow-sm backdrop-blur-xl'
const hoverRing =
  'ring-1 ring-transparent transition group-hover:ring-(--border-subtle)'

export function GlassPanel({
  title,
  right,
  className,
  children,
  ...rest
}: Props) {
  return (
    <section
      className={[base, hoverRing, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {(title || right) && (
        <header className="relative mb-4 flex items-start justify-between gap-3">
          {title ? (
            <div className="text-sm font-semibold tracking-tight">{title}</div>
          ) : (
            <span />
          )}
          {right ? <div className="shrink-0">{right}</div> : null}
        </header>
      )}
      <div className="relative">{children}</div>
    </section>
  )
}
