import { Button, Divider } from '@/shared/ui'
import { Link } from 'react-router'
import { AuthField } from '../components/AuthField'

export function RegisterPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">
          Create account
        </h2>
        <p className="mt-1 text-sm text-(--text-secondary)">
          Create your account to access the moderation console
        </p>
      </header>

      <form className="space-y-4">
        <AuthField label="Full name" type="text" placeholder="Luis Yauri" />

        <AuthField label="Email" type="email" placeholder="you@example.com" />

        <AuthField label="Password" type="password" placeholder="••••••••" />

        <AuthField
          label="Confirm password"
          type="password"
          placeholder="••••••••"
        />

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-(--text-secondary)">
          <input type="checkbox" className="mt-1 accent-(--primary)" />
          <span>
            I agree to the{' '}
            <a
              href="#"
              className="text-(--primary-soft) hover:text-(--primary) transition"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="text-(--primary-soft) hover:text-(--primary) transition"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <Button type="submit" variant="primary">
          Create account
        </Button>

        <Divider label="or" />

        <Button type="button" variant="secondary">
          Continue with Google
        </Button>
      </form>

      <footer>
        <p className="text-center text-sm text-(--text-secondary)">
          Already have an account?{' '}
          <Link
            to="/auth/login"
            className="text-(--primary-soft) hover:text-(--primary) transition"
          >
            Sign in
          </Link>
        </p>
      </footer>
    </div>
  )
}
