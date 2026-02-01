import { Button, GlassPanel } from '@/shared/ui'
import { Link } from 'react-router'
import type { Post } from '../types/post.types'

type Props = {
  post: Post
  deleting: boolean
  onDelete: (postId: number) => void
}

export function PostCard({ post, deleting, onDelete }: Props) {
  return (
    <GlassPanel className="group transition-all duration-300 hover:scale-[1.02] hover:bg-(--bg-elevated)">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-base font-bold tracking-tight text-(--text-primary)">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--text-secondary)">
              {post.body}
            </p>
          </div>
          <span className="shrink-0 rounded-lg bg-white/5 px-2 py-1 text-[10px] font-mono text-(--text-secondary)">
            ID: {post.id}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400 capitalize"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-1.5 text-(--text-secondary)"
              title="Likes"
            >
              <span className="text-xs font-semibold text-emerald-400">
                👍 {post.reactions.likes}
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 text-(--text-secondary)"
              title="Dislikes"
            >
              <span className="text-xs font-semibold text-rose-400">
                👎 {post.reactions.dislikes}
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 text-(--text-secondary)"
              title="Views"
            >
              <span className="text-xs font-semibold text-blue-400">
                👁️ {post.views}
              </span>
            </div>
          </div>

          <div className="text-[10px] text-(--text-secondary)">
            User: {post.userId}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Link to={`/app/posts/${post.id}`} className="flex-1">
            <Button variant="secondary" className="w-full text-xs py-1.5">
              View
            </Button>
          </Link>
          <Link to={`/app/posts/${post.id}/edit`} className="flex-1">
            <Button variant="secondary" className="w-full text-xs py-1.5">
              Edit
            </Button>
          </Link>
          <Button
            variant="secondary"
            className="text-xs py-1.5 text-rose-400 hover:bg-rose-400/10"
            disabled={deleting}
            onClick={() => onDelete(post.id)}
          >
            {deleting ? '...' : 'Delete'}
          </Button>
        </div>
      </div>
    </GlassPanel>
  )
}
