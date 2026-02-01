import { Button, Divider, Toast } from '@/shared/ui'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthField } from '../components/AuthField'
import { useLogin } from '../hooks/useLogin'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error } = useLogin()

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(username, password)
    navigate('/app/posts')
  }

  const handleFeatureInProgress = (feature: string) => {
    setToastMessage(`${feature} - Coming soon!`)
    setShowToast(true)
  }

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Access the moderation console securely
        </p>
      </header>

      <form className="space-y-4" onSubmit={onSubmit}>
        <AuthField
          label="Email"
          type="text"
          placeholder="emilys"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />

        <AuthField
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-(--text-secondary)">
            <input
              type="checkbox"
              className="accent-(--primary)"
              onChange={() => handleFeatureInProgress('Remember me')}
            />
            Remember me
          </label>

          <button
            type="button"
            className="text-(--primary-soft) hover:text-(--primary) transition"
            onClick={() => handleFeatureInProgress('Forgot password')}
          >
            Forgot password?
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-(--border) bg-(--panel-2) px-3 py-2 text-sm text-(--danger)">
            {error}
          </div>
        )}

        {showToast && (
          <Toast
            message={toastMessage}
            type="info"
            onClose={() => setShowToast(false)}
          />
        )}

        <Button type="submit" variant="primary" full disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>

        <Divider label="or" />

        <Button
          type="button"
          variant="secondary"
          full
          onClick={() => handleFeatureInProgress('Continue with Google')}
        >
          Continue with Google
        </Button>
      </form>

      <footer>
        <p className="text-center text-sm text-(--text-secondary)">
          Don't have an account?{' '}
          <Link
            to="/auth/register"
            className="text-(--primary-soft) hover:text-(--primary) transition"
          >
            Sign up
          </Link>
        </p>
      </footer>
    </div>
  )
}
