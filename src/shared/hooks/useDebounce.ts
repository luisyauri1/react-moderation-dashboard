import { useState, useEffect } from 'react'

/**
 * Hook para debouncing de valores.
 * @param value El valor a ser debounced.
 * @param delay El retraso en milisegundos (por defecto 500).
 * @returns El valor debounced.
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
