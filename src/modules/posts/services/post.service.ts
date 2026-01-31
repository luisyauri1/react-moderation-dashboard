import type { UiPost } from '../types/post.types'

const API_URL = 'https://dummyjson.com'

export const postService = {
  async getPosts(query?: string, signal?: AbortSignal): Promise<UiPost[]> {
    const url = query
      ? `${API_URL}/posts/search?q=${encodeURIComponent(query)}`
      : `${API_URL}/posts`

    const response = await fetch(url, { signal })

    if (!response.ok) {
      throw new Error(`Error al obtener posts: ${response.statusText}`)
    }

    const data = await response.json()
    return data.posts || []
  },
}
