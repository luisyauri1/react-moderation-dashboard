import { useState, useEffect } from 'react'
import type { UiPost } from '../types/post.types'
import { postService } from '../services/post.service'
import { useDebounce } from '../../../shared/hooks/useDebounce'

export function usePosts(query = '') {
  const [posts, setPosts] = useState<UiPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    const controller = new AbortController()

    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const data = await postService.getPosts(
          debouncedQuery,
          controller.signal,
        )
        setPosts(data)
        setError(null)
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return
        }
        setError(err instanceof Error ? err : new Error('Error desconocido'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()

    return () => {
      controller.abort()
    }
  }, [debouncedQuery])

  return { posts, isLoading, error }
}
