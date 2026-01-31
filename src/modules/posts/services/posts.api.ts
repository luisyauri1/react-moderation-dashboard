import type { PaginatedPosts, Post, PostComment } from '../types/posts.types'

const API_BASE = 'https://dummyjson.com'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })

  if (!res.ok) {
    const msg = await res.text().catch(() => '')
    throw new Error(`Request failed: ${res.status} ${res.statusText} ${msg}`)
  }

  return (await res.json()) as T
}

export const postsApi = {
  list: (params?: { limit?: number; skip?: number; q?: string }) => {
    const limit = params?.limit ?? 30
    const skip = params?.skip ?? 0
    const q = params?.q?.trim()

    if (q) {
      return request<PaginatedPosts>(
        `/posts/search?q=${encodeURIComponent(q)}&limit=${limit}&skip=${skip}`,
      )
    }

    return request<PaginatedPosts>(`/posts?limit=${limit}&skip=${skip}`)
  },

  getById: (id: number) => request<Post>(`/posts/${id}`),

  getComments: (id: number) =>
    request<{
      comments: PostComment[]
      total: number
      skip: number
      limit: number
    }>(`/posts/${id}/comments`),

  create: (payload: {
    title: string
    body?: string
    userId: number
    tags?: string[]
  }) =>
    request<Post>(`/posts/add`, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  update: (
    id: number,
    payload: Partial<Pick<Post, 'title' | 'body' | 'tags'>>,
  ) =>
    request<Post>(`/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    }),

  remove: (id: number) =>
    request<{ id: number; isDeleted: boolean; deletedOn: string }>(
      `/posts/${id}`,
      {
        method: 'DELETE',
      },
    ),
}
