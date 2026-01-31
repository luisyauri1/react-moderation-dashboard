import { useEffect, useMemo, useState } from 'react'
import { postsApi } from '../services/posts.api'
import type { PaginatedPosts } from '../types/posts.types'

type UsePostsParams = {
  q?: string
  limit?: number
  skip?: number
}

type PostsState = {
  key: string
  data: PaginatedPosts | null
  error: string | null
  done: boolean
}

export function usePosts(params: UsePostsParams) {
  const req = useMemo(
    () => ({
      q: (params.q ?? '').trim(),
      limit: params.limit ?? 30,
      skip: params.skip ?? 0,
    }),
    [params.q, params.limit, params.skip],
  )

  const key = useMemo(() => JSON.stringify(req), [req])

  const [state, setState] = useState<PostsState>(() => ({
    key,
    data: null,
    error: null,
    done: false,
  }))

  const derived =
    state.key === key ? state : { key, data: null, error: null, done: false }

  useEffect(() => {
    let alive = true

    postsApi
      .list(req)
      .then((res) => {
        if (!alive) return
        setState({ key, data: res, error: null, done: true })
      })
      .catch((e: unknown) => {
        if (!alive) return
        setState({
          key,
          data: null,
          error: e instanceof Error ? e.message : 'Unknown error',
          done: true,
        })
      })

    return () => {
      alive = false
    }
  }, [key, req])

  return {
    data: derived.data,
    error: derived.error,
    loading: !derived.done,
  }
}
