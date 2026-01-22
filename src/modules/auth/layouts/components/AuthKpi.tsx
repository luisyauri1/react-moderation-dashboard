export function AuthKpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-(--border-subtle) bg-[rgba(17,24,39,0.28)] p-3 backdrop-blur-xl">
      <div className="text-[11px] text-(--text-muted)">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  )
}
