import { useEffect, useMemo, useState } from 'react'
import { postsApi } from '../services/posts.api'
import type { Post } from '../types/posts.types'

type PostState = {
  key: string
  data: Post | null
  error: string | null
  done: boolean
}

export function usePost(postId?: number) {
  const key = useMemo(() => `post:${postId ?? 'none'}`, [postId])

  const [state, setState] = useState<PostState>(() => ({
    key,
    data: null,
    error: null,
    done: postId ? false : true,
  }))

  const derived =
    state.key === key
      ? state
      : { key, data: null, error: null, done: postId ? false : true }

  useEffect(() => {
    // Si no hay postId (modo "new"), no hacemos fetch y no seteamos estado
    if (!postId) return

    let alive = true

    postsApi
      .getById(postId)
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
  }, [key, postId])

  return {
    data: postId ? derived.data : null,
    error: postId ? derived.error : null,
    loading: postId ? !derived.done : false,
  }
}
