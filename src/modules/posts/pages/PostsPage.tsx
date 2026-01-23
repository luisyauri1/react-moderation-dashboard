import { Button, Divider, Input } from '@/shared/ui'
import { Link } from 'react-router'

export function PostsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">All posts</h2>
          <p className="text-sm text-(--text-secondary)">
            Quick view of the latest content
          </p>
        </div>

        <div className="flex gap-2">
          <Input placeholder="Search posts..." />
          <Button variant="secondary" type="button">
            Filter
          </Button>
          <Link to="/posts/new" className="block">
            <Button variant="primary" type="button">
              Create
            </Button>
          </Link>
        </div>
      </div>

      <Divider />

      {/* Table shell*/}
      <div className="overflow-hidden rounded-2xl border border-(--border)">
        <div className="grid grid-cols-12 bg-(--panel-2) px-4 py-3 text-xs text-(--text-secondary)">
          <div className="col-span-6">Title</div>
          <div className="col-span-3">Author</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        <div className="divide-y divide-(--border)">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="grid grid-cols-12 items-center px-4 py-3 text-sm hover:bg-(--panel-2) transition"
            >
              <div className="col-span-6">
                <p className="text-(--text)">Post title #{id}</p>
                <p className="text-xs text-(--text-secondary)">
                  Short description placeholder…
                </p>
              </div>

              <div className="col-span-3 text-(--text-secondary)">Emily</div>

              <div className="col-span-2">
                <span className="inline-flex items-center rounded-full border border-(--border) bg-(--panel-2) px-2 py-1 text-xs text-(--text)">
                  Draft
                </span>
              </div>

              <Link to={`/posts/${id}`} className="block">
                <Button variant="secondary" type="button">
                  View
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
