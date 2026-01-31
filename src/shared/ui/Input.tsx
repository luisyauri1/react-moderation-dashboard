import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={
        'w-full rounded-xl border border-(--border-subtle) bg-white/5 px-3 py-2 text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary) focus:ring-2 focus:ring-(--ring) ' +
        (props.className ?? '')
      }
    />
  )
}
