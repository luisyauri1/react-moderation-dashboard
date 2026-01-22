import { Button, Divider } from '@/shared/ui'
import { Link } from 'react-router'
import { AuthField } from '../components/AuthField'

export function LoginPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Access the moderation console securely
        </p>
      </header>

      <form className="space-y-4">
        <AuthField label="Email" type="email" placeholder="you@example.com" />
        <AuthField label="Password" type="password" placeholder="••••••••" />

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

        <Button type="submit" variant="primary">
          Sign in
        </Button>

        <Divider label="or" />

        <Button type="button" variant="secondary">
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
