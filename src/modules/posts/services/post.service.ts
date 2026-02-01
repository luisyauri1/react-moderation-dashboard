import type { CreatePostDto, Post } from '../types/post.types'

const API_URL = 'https://dummyjson.com'

export const postService = {
  async getPosts(query?: string, signal?: AbortSignal): Promise<Post[]> {
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

  async getPostById(postId: number, signal?: AbortSignal): Promise<Post> {
    const response = await fetch(`${API_URL}/posts/${postId}`, { signal })

    if (!response.ok) {
      throw new Error(`Error al obtener el post: ${response.statusText}`)
    }

    return await response.json()
  },

  async createPost(post: CreatePostDto): Promise<Post> {
    const response = await fetch(`${API_URL}/posts/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })

    if (!response.ok) {
      throw new Error(`Error al crear el post: ${response.statusText}`)
    }

    return await response.json()
  },
}
