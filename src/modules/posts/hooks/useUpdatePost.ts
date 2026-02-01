import { useState } from 'react'
import type { Post, UpdatePostDto } from '../types/post.types'
import { postService } from '../services/post.service'

export function useUpdatePost() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const updatePost = async (
    postId: number,
    data: UpdatePostDto,
  ): Promise<Post | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const updatedPost = await postService.updatePost(postId, data)
      return updatedPost
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { updatePost, isLoading, error }
}
