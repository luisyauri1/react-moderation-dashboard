import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const base =
  'relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--bg-surface) backdrop-blur-xl'
const shadow = 'shadow-[0_14px_50px_-18px_rgba(0,0,0,0.7)]'

export function GlassPanel({ className, children, ...rest }: Props) {
  return (
    <section
      className={[base, shadow, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-(--bg-elevated) opacity-45" />

      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-(--border-subtle) to-transparent opacity-90" />

      <div className="relative">{children}</div>

      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-(--border-subtle) opacity-85" />
    </section>
  )
}
