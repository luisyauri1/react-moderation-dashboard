type ErrorPayload = {
  message?: unknown
  error?: unknown
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function extractErrorMessage(data: unknown, fallback: string): string {
  if (!isRecord(data)) return fallback

  const payload = data as ErrorPayload

  if (typeof payload.message === 'string' && payload.message.trim()) {
    return payload.message
  }

  if (typeof payload.error === 'string' && payload.error.trim()) {
    return payload.error
  }

  return fallback
}

export async function fetchJson<T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(input, {
    ...init,
    headers: {
      ...(init?.body ? { 'Content-Type': 'application/json' } : {}),
      ...(init?.headers ?? {}),
    },
  })

  let data: unknown = null

  try {
    const contentType = res.headers.get('content-type') ?? ''
    if (contentType.includes('application/json')) {
      data = await res.json()
    } else {
      data = await res.text()
    }
  } catch {
    // ignore parse errors
  }

  if (!res.ok) {
    throw new Error(extractErrorMessage(data, `HTTP ${res.status}`))
  }

  return data as T
}
