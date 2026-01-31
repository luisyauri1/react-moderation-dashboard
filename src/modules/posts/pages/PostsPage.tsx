import { Button, Input } from '@/shared/ui'
import { Link } from 'react-router'

export function PostsPage() {
  return (
    <div className="space-y-4">
      {/* Toolbar (glass panel) */}
      <div className="rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">All posts</h2>
            <p className="text-sm text-(--text-secondary)">
              Quick view of the latest content
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Input placeholder="Search posts..." />

            <Button variant="secondary" type="button">
              Filter
            </Button>

            <Link to="/app/posts/new" className="block">
              <Button variant="primary" type="button">
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Table (glass panel) */}
      <div className="overflow-hidden rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-12 border-b border-white/10 bg-white/5 px-4 py-3 text-xs text-(--text-secondary)">
          <div className="col-span-6">Title</div>
          <div className="col-span-3">Author</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        <div className="divide-y divide-white/10">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="grid grid-cols-12 items-center px-4 py-3 text-sm transition hover:bg-white/5"
            >
              <div className="col-span-6">
                <p className="text-(--text-primary)">Post title #{id}</p>
                <p className="text-xs text-(--text-secondary)">
                  Short description placeholder…
                </p>
              </div>

              <div className="col-span-3 text-(--text-secondary)">Emily</div>

              <div className="col-span-2">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-(--text-primary)">
                  Draft
                </span>
              </div>

              <div className="col-span-1 flex justify-end">
                <Link to={`/app/posts/${id}`} className="inline-block">
                  <Button variant="secondary" type="button">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
