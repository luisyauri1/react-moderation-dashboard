import { useState } from 'react'
import { PostsToolbar } from '../components/PostsToolbar'
import { PostsGrid } from '../components/PostsGrid'
import { usePosts } from '../hooks/usePosts'
import { useDeletePost } from '../hooks/useDeletePost'

export function PostsPage() {
  const [searchText, setSearchText] = useState('')
  const { posts, isLoading, setPosts } = usePosts(searchText)
  const { deletePost } = useDeletePost()
  const [deletingId, setDeletingId] = useState<number | null>(null)

  const handleDelete = async (postId: number) => {
    setDeletingId(postId)

    const success = await deletePost(postId)

    if (success) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
    }

    setDeletingId(null)
  }

  return (
    <div className="space-y-4">
      <PostsToolbar
        title="Posts"
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />

      <PostsGrid
        posts={posts}
        deletingId={deletingId}
        onDelete={handleDelete}
        showEmpty={!isLoading && posts.length === 0}
      />

      {isLoading && (
        <div className="flex justify-center py-8 text-slate-500">
          Cargando posts...
        </div>
      )}
    </div>
  )
}
