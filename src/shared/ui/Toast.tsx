import { useEffect, useState } from 'react'

type ToastType = 'info' | 'success' | 'warning' | 'error'

type ToastProps = {
  message: string
  type?: ToastType
  duration?: number
  onClose?: () => void
}

const toastStyles: Record<ToastType, string> = {
  info: 'from-blue-500/20 to-cyan-500/20 ring-blue-500/30 text-blue-300',
  success:
    'from-emerald-500/20 to-green-500/20 ring-emerald-500/30 text-emerald-300',
  warning:
    'from-amber-500/20 to-yellow-500/20 ring-amber-500/30 text-amber-300',
  error: 'from-red-500/20 to-rose-500/20 ring-red-500/30 text-red-300',
}

const toastIcons: Record<ToastType, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

export function Toast({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className={`animate-fade-in rounded-xl bg-gradient-to-r p-4 ring-1 ${toastStyles[type]}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl">{toastIcons[type]}</span>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  )
}
