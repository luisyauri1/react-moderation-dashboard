type DividerProps = {
  label?: string
  className?: string
}

export function Divider({ label = 'or', className }: DividerProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <div className="h-px flex-1 bg-(--border-subtle)" />
      <span className="text-xs text-(--text-muted)">{label}</span>
      <div className="h-px flex-1 bg-(--border-subtle)" />
    </div>
  )
}
