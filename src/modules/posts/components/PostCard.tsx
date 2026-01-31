import { Button } from '@/shared/ui'
import { Link } from 'react-router'
import type { Post } from '../types/posts.types'

type Props = {
  post: Post
  deleting: boolean
  onDelete: (id: number) => void
}

export function PostCard({ post, deleting, onDelete }: Props) {
  return (
    <div className="group rounded-3xl border border-(--border-subtle) bg-(--bg-surface) shadow-[0_12px_40px_-18px_rgba(0,0,0,0.65)] transition hover:-translate-y-0.5 hover:border-(--border) hover:bg-(--bg-elevated)">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-tight text-(--text-primary)">
              {post.title}
            </p>
            <p className="mt-1 line-clamp-2 text-sm text-(--text-secondary)">
              {post.body}
            </p>
          </div>

          <span className="shrink-0 rounded-xl border border-(--border-subtle) bg-(--bg-surface) px-2 py-1 text-xs text-(--text-secondary)">
            #{post.id}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-(--border-subtle) bg-(--bg-surface) px-2 py-1 text-xs text-(--text-secondary)">
            User {post.userId}
          </span>

          {(post.tags ?? []).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border-subtle) bg-(--bg-surface) px-2 py-1 text-xs text-(--text-primary)"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link to={`/app/posts/${post.id}`}>
            <Button variant="secondary" type="button">
              View
            </Button>
          </Link>

          <Link to={`/app/posts/${post.id}`}>
            <Button variant="secondary" type="button">
              Edit
            </Button>
          </Link>

          <Button
            variant="secondary"
            type="button"
            disabled={deleting}
            onClick={() => onDelete(post.id)}
          >
            {deleting ? 'Deleting…' : 'Delete'}
          </Button>
        </div>
      </div>
    </div>
  )
}
