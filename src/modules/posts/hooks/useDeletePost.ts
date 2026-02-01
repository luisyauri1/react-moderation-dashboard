import { useState } from 'react'
import { postService } from '../services/post.service'

export function useDeletePost() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const deletePost = async (postId: number): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      await postService.deletePost(postId)
      return true
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { deletePost, isLoading, error }
}
