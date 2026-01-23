import { useEffect, useRef, useState } from 'react'
import { authApi } from '../services/authApi'
import type { LoginResponse } from '../types/auth'

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => {
      controllerRef.current?.abort()
    }
  }, [])

  const login = async (username: string, password: string) => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    try {
      setLoading(true)
      setError(null)

      const data: LoginResponse = await authApi.login(
        { username, password, expiresInMins: 30 },
        controller.signal,
      )

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)

      return data
    } catch (e) {
      if (controller.signal.aborted) return

      const message = e instanceof Error ? e.message : 'Authentication failed'
      setError(message)
      throw e
    } finally {
      if (controllerRef.current === controller) {
        setLoading(false)
      }
    }
  }

  return { login, loading, error }
}
