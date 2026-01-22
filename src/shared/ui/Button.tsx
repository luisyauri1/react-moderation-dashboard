import * as React from 'react'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type Variant = 'primary' | 'secondary'

export function Button({
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles =
    variant === 'primary'
      ? cn(
          'bg-(--primary) text-white hover:bg-(--primary-hover)',
          'shadow-[0_12px_30px_rgba(99,102,241,0.20)]',
        )
      : cn(
          'border border-(--border-subtle) bg-(--bg-surface) text-(--text-primary)',
          'hover:bg-(--bg-elevated)',
        )

  return (
    <button
      {...props}
      className={cn(
        'w-full rounded-xl py-2.5 text-sm font-medium transition',
        styles,
        className,
      )}
    />
  )
}
