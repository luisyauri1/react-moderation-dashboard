import { Button, Divider } from '@/shared/ui'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthField } from '../components/AuthField'
import { useLogin } from '../hooks/useLogin'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, loading, error } = useLogin()

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(username, password)
    navigate('/app/posts')
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
            <input type="checkbox" className="accent-(--primary)" />
            Remember me
          </label>

          <button
            type="button"
            className="text-(--primary-soft) hover:text-(--primary) transition"
          >
            Forgot password?
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-(--border) bg-(--panel-2) px-3 py-2 text-sm text-(--danger)">
            {error}
          </div>
        )}

        <Button type="submit" variant="primary" full disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>

        <Divider label="or" />

        <Button type="button" variant="secondary" full>
          Continue with Google
        </Button>
      </form>

      <footer>
        <p className="text-center text-sm text-(--text-secondary)">
          Don’t have an account?{' '}
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
