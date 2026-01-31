import { GlassPanel } from '@/shared/ui'
import type { Post } from '../types/posts.types'
import { PostCard } from './PostCard'

type Props = {
  posts: Post[]
  deletingId: number | null
  onDelete: (id: number) => void
  showEmpty: boolean
}

export function PostsGrid({ posts, deletingId, onDelete, showEmpty }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          deleting={deletingId === post.id}
          onDelete={onDelete}
        />
      ))}

      {showEmpty ? (
        <GlassPanel className="p-6 sm:col-span-2 lg:col-span-3">
          <p className="text-sm text-(--text-secondary)">
            No results on this page.
          </p>
        </GlassPanel>
      ) : null}
    </div>
  )
}
