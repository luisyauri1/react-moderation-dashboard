export function AuthFeatureCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="rounded-2xl border border-(--border-subtle) bg-[rgba(17,24,39,0.35)] p-4 backdrop-blur-xl transition hover:bg-[rgba(17,24,39,0.45)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-medium">{title}</div>
          <div className="mt-1 text-xs text-(--text-secondary)">{desc}</div>
        </div>

        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-(--accent) opacity-70" />
      </div>
    </div>
  )
}
