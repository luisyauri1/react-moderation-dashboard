import { Button, Input } from '@/shared/ui'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { usePosts } from '../hooks/usePosts'

export function PostsPage() {
  const [q, setQ] = useState('')
  const [debouncedQ, setDebouncedQ] = useState('')

  useEffect(() => {
    const t = window.setTimeout(() => setDebouncedQ(q), 350)
    return () => window.clearTimeout(t)
  }, [q])

  const { data, loading, error } = usePosts({
    q: debouncedQ,
    limit: 10,
    skip: 0,
  })

  return (
    <div className="space-y-4">
      {/* Toolbar (glass panel) */}
      <div className="rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">All posts</h2>
            <p className="text-sm text-(--text-secondary)">
              {loading
                ? 'Loading...'
                : data
                  ? `${data.total} total posts`
                  : ' '}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Input
              placeholder="Search posts..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

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
          <div className="col-span-3">User</div>
          <div className="col-span-2">Tags</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {error ? (
          <div className="px-4 py-4 text-sm text-(--text-secondary)">
            Error: {error}
          </div>
        ) : loading && !data ? (
          <div className="px-4 py-4 text-sm text-(--text-secondary)">
            Loading posts...
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {(data?.posts ?? []).map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-12 items-center px-4 py-3 text-sm transition hover:bg-white/5"
              >
                <div className="col-span-6">
                  <p className="text-(--text-primary)">{post.title}</p>
                  <p className="text-xs text-(--text-secondary) line-clamp-1">
                    {post.body}
                  </p>
                </div>

                <div className="col-span-3 text-(--text-secondary)">
                  User #{post.userId}
                </div>

                <div className="col-span-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-(--text-primary)">
                    {post.tags?.[0] ?? '—'}
                  </span>
                </div>

                <div className="col-span-1 flex justify-end">
                  <Link to={`/app/posts/${post.id}`} className="inline-block">
                    <Button variant="secondary" type="button">
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            ))}

            {data && data.posts.length === 0 ? (
              <div className="px-4 py-6 text-sm text-(--text-secondary)">
                No results.
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
