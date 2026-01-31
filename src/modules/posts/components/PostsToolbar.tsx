import { Button, GlassPanel, Input } from '@/shared/ui'
import { Link } from 'react-router'

type Filters = { tag: string; userId: string }

type Props = {
  statsText: string

  q: string
  onChangeQ: (value: string) => void

  filters: Filters
  onChangeFilters: (patch: Partial<Filters>) => void

  page: number
  totalPages: number
  pageInput: string
  onChangePageInput: (value: string) => void
  onGoToPageFromInput: () => void
  onPrev: () => void
  onNext: () => void

  limit: number
  onSetLimit: (n: number) => void

  onReset: () => void
}

export function PostsToolbar({
  statsText,
  q,
  onChangeQ,
  filters,
  onChangeFilters,
  page,
  totalPages,
  pageInput,
  onChangePageInput,
  onGoToPageFromInput,
  onPrev,
  onNext,
  limit,
  onSetLimit,
  onReset,
}: Props) {
  return (
    <GlassPanel className="p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-base font-semibold tracking-tight text-(--text-primary)">
            All posts
          </p>
          <p className="mt-1 text-sm text-(--text-secondary)">{statsText}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link to="/app/posts/new" className="block">
            <Button variant="primary" type="button">
              Create post
            </Button>
          </Link>

          <Button variant="secondary" type="button" onClick={onReset}>
            Clear
          </Button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="mb-2 text-xs font-medium text-(--text-secondary)">
            Search
          </p>
          <Input
            placeholder="Search posts…"
            value={q}
            onChange={(e) => onChangeQ(e.target.value)}
          />
        </div>

        <div className="lg:col-span-6">
          <p className="mb-2 text-xs font-medium text-(--text-secondary)">
            Filters (this page)
          </p>

          <div className="grid gap-2 sm:grid-cols-2">
            <Input
              placeholder="Tag…"
              value={filters.tag}
              onChange={(e) => onChangeFilters({ tag: e.target.value })}
            />
            <Input
              placeholder="User ID…"
              inputMode="numeric"
              value={filters.userId}
              onChange={(e) => onChangeFilters({ userId: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-(--border-subtle) pt-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            type="button"
            disabled={page <= 1}
            onClick={onPrev}
          >
            Prev
          </Button>

          <Button
            variant="secondary"
            type="button"
            disabled={page >= totalPages}
            onClick={onNext}
          >
            Next
          </Button>

          <span className="ml-1 text-sm text-(--text-secondary)">Page</span>

          <input
            className="h-10 w-20 rounded-xl border border-(--border-subtle) bg-(--bg-surface) px-3 text-sm text-(--text-primary) outline-none focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/30"
            value={pageInput}
            onChange={(e) => onChangePageInput(e.target.value)}
            onBlur={onGoToPageFromInput}
            inputMode="numeric"
            aria-label="Go to page"
          />

          <span className="text-sm text-(--text-muted)">/ {totalPages}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-(--text-secondary)">Page size</span>

          {[8, 12, 20].map((n) => (
            <Button
              key={n}
              variant={n === limit ? 'primary' : 'secondary'}
              type="button"
              onClick={() => onSetLimit(n)}
            >
              {n}
            </Button>
          ))}
        </div>
      </div>
    </GlassPanel>
  )
}
