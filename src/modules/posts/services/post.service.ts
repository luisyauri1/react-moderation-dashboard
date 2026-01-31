import type { UiPost } from '../types/post.types'

const API_URL = 'https://dummyjson.com'

export const postService = {
  async getPosts(signal?: AbortSignal): Promise<UiPost[]> {
    const response = await fetch(`${API_URL}/posts`, { signal })

    if (!response.ok) {
      throw new Error(`Error al obtener posts: ${response.statusText}`)
    }

    const data = await response.json()
    return data.posts || []
  },
}
