import { Button } from '@/shared/ui'
import type { ShellConfig } from '../../shell.config'

type Props = {
  topbar: ShellConfig['topbar']
}

export function ShellTopbar({ topbar }: Props) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="min-w-0">
        <p className="text-lg font-semibold tracking-tight text-(--text-primary)">
          {topbar.title}
        </p>

        {topbar.subtitle ? (
          <p className="mt-1 text-sm text-(--text-secondary)">
            {topbar.subtitle}
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="secondary" type="button">
          Logout
        </Button>
      </div>
    </div>
  )
}
