import { useState } from 'react'
import type { CreatePostDto, UiPost } from '../types/post.types'
import { postService } from '../services/post.service'

export function useCreatePost() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState(false)

  const createPost = async (post: CreatePostDto): Promise<UiPost | null> => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const result = await postService.createPost(post)
      setSuccess(true)
      console.log('Post creado exitosamente:', result)
      return result
    } catch (err) {
      const errorObject =
        err instanceof Error ? err : new Error('Error desconocido')
      setError(errorObject)
      console.error('Error al crear post:', errorObject)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { createPost, isLoading, error, success }
}
