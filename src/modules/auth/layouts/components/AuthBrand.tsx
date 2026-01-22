export function AuthBrand({
  title = 'Moderation & Trust Console',
  subtitle = 'Policy enforcement • Audit trails • Risk signals',
  compact = false,
}: {
  title?: string
  subtitle?: string
  compact?: boolean
}) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-(--border-subtle) bg-[rgba(17,24,39,0.35)] px-4 py-3 backdrop-blur-xl">
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-(--border-subtle) bg-(--bg-surface)">
        <span className="text-sm font-semibold">LY</span>
      </div>

      <div>
        <div className="text-sm font-semibold leading-4">{title}</div>
        {!compact && (
          <div className="text-xs text-(--text-secondary)">{subtitle}</div>
        )}
      </div>
    </div>
  )
}
