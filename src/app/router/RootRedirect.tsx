import { Navigate } from 'react-router'

export function RootRedirect() {
  const token = localStorage.getItem('auth_token')
  return <Navigate to={token ? '/app/posts' : '/auth/login'} replace />
}
