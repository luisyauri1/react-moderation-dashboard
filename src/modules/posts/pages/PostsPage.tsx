import { useMemo, useState } from 'react'
import { PostsToolbar } from '../components/PostsToolbar'
import { PostsGrid } from '../components/PostsGrid'

type UiPost = {
  id: number
  title: string
  body: string
  userId: number
  tags?: string[]
}

const mockPost: UiPost = {
  id: 1,
  title: 'Design system notes',
  body: 'Small notes about tokens, spacing, and component conventions.',
  userId: 12,
  tags: ['design', 'ui'],
}

export function PostsPage() {
  const [searchText, setSearchText] = useState('')
  const [deletingId, setDeletingId] = useState<number | null>(null)

  const visiblePosts = useMemo(() => {
    const query = searchText.trim().toLowerCase()
    if (!query) return [mockPost]

    const matches =
      mockPost.title.toLowerCase().includes(query) ||
      mockPost.body.toLowerCase().includes(query) ||
      (mockPost.tags ?? []).some((tag) => tag.toLowerCase().includes(query)) ||
      String(mockPost.userId).includes(query)

    return matches ? [mockPost] : []
  }, [searchText])

  const handleDelete = async (postId: number) => {
    // UI-only: simula “deleting…”
    setDeletingId(postId)
    window.setTimeout(() => setDeletingId(null), 450)
  }

  return (
    <div className="space-y-4">
      <PostsToolbar
        title="Posts"
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />

      <PostsGrid
        posts={visiblePosts}
        deletingId={deletingId}
        onDelete={handleDelete}
        showEmpty={visiblePosts.length === 0}
      />
    </div>
  )
}
