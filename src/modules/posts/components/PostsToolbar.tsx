import { Button, GlassPanel, Input } from '@/shared/ui'
import { Link } from 'react-router'

type Props = {
  title?: string
  statsText?: string

  searchText: string
  onSearchTextChange: (value: string) => void
}

export function PostsToolbar({
  title = 'Posts',
  statsText,
  searchText,
  onSearchTextChange,
}: Props) {
  return (
    <GlassPanel className="p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-base font-semibold tracking-tight text-(--text-primary)">
            {title}
          </p>
          {statsText ? (
            <p className="mt-1 text-sm text-(--text-secondary)">{statsText}</p>
          ) : null}
        </div>

        <Link to="/app/posts/new" className="shrink-0">
          <Button variant="primary" type="button">
            Create
          </Button>
        </Link>
      </div>

      <div className="mt-4">
        <Input
          placeholder="Search posts…"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
        />
      </div>
    </GlassPanel>
  )
}
