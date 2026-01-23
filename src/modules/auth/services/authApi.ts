import { fetchJson } from '@/shared/lib/fetch'
import type { LoginRequest, LoginResponse } from '../types/auth'

const BASE_URL = 'https://dummyjson.com'

export const authApi = {
  login: (payload: LoginRequest, signal?: AbortSignal) =>
    fetchJson<LoginResponse>(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        ...payload,
        expiresInMins: payload.expiresInMins ?? 30,
      }),
      credentials: 'omit',
      signal,
    }),
}
