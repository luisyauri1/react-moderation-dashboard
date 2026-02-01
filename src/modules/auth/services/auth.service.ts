import type { LoginRequest, LoginResponse } from '../types/auth'

const API_URL = 'https://dummyjson.com'

export const authService = {
  async login(
    payload: LoginRequest,
    signal?: AbortSignal,
  ): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        expiresInMins: payload.expiresInMins ?? 30,
      }),
      signal,
    })

    if (!response.ok) {
      throw new Error(`Error al iniciar sesión: ${response.statusText}`)
    }

    return await response.json()
  },
}
