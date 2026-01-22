import * as React from 'react'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-xl border px-3 py-2.5 text-sm transition',
        'border-(--border-subtle) bg-(--bg-elevated)',
        'text-(--text-primary) placeholder:text-(--text-muted)',
        'focus:outline-none focus:ring-2 focus:ring-[rgba(99,102,241,0.35)] focus:border-(--primary)',
        className,
      )}
    />
  )
}
