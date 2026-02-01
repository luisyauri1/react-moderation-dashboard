import { useState, useEffect } from 'react'
import type { Post } from '../types/post.types'
import { postService } from '../services/post.service'

export function usePost(postId?: string) {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!postId || postId === 'new') {
      setPost(null)
      return
    }

    const controller = new AbortController()

    const fetchPost = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await postService.getPostById(
          Number(postId),
          controller.signal,
        )
        setPost(data)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()

    return () => controller.abort()
  }, [postId])

  return { post, isLoading, error }
}
