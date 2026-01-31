import * as React from 'react'

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type Variant = 'primary' | 'secondary'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  full?: boolean
}

export function Button({
  variant = 'primary',
  full = false,
  className,
  ...props
}: ButtonProps) {
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
        'inline-flex items-center justify-center gap-2',
        'rounded-xl px-4 py-2.5',
        'text-sm font-medium transition',
        'whitespace-nowrap',
        'cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        full && 'w-full',
        styles,
        className,
      )}
    />
  )
}
