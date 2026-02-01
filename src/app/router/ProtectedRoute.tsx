import { Navigate } from 'react-router'

type Props = {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const token = localStorage.getItem('auth_token')

  if (!token) {
    return <Navigate to="/auth/login" replace />
  }

  return <>{children}</>
}
