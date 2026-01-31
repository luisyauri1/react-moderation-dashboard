import { Button } from '@/shared/ui'
import type { ShellConfig } from '../../shell.config'

type Props = {
  topbar: ShellConfig['topbar']
}

export function ShellTopbar({ topbar }: Props) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold tracking-tight">{topbar.title}</p>
        {topbar.subtitle ? (
          <p className="text-xs text-(--text-secondary)">{topbar.subtitle}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" type="button">
          Logout
        </Button>
      </div>
    </div>
  )
}
