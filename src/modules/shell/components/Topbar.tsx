import { Button } from '@/shared/ui'

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-(--border) bg-(--panel) px-6">
      <div className="text-sm text-(--text-secondary)">Welcome back</div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" type="button">
          Logout
        </Button>
      </div>
    </header>
  )
}
