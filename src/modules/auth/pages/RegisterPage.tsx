import { Button, Divider, Toast } from '@/shared/ui'
import { useState } from 'react'
import { Link } from 'react-router'
import { AuthField } from '../components/AuthField'

export function RegisterPage() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleFeatureInProgress = (feature: string) => {
    setToastMessage(`${feature} - Coming soon!`)
    setShowToast(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleFeatureInProgress('Registration')
  }

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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <AuthField label="Full name" type="text" placeholder="Luis Yauri" />

        <AuthField label="Email" type="email" placeholder="you@example.com" />

        <AuthField label="Password" type="password" placeholder="••••••••" />

        <AuthField
          label="Confirm password"
          type="password"
          placeholder="••••••••"
        />

        <label className="flex items-start gap-2 text-sm text-(--text-secondary)">
          <input
            type="checkbox"
            className="mt-1 accent-(--primary)"
            onChange={() => handleFeatureInProgress('Terms acceptance')}
          />
          <span>
            I agree to the{' '}
            <button
              type="button"
              onClick={() => handleFeatureInProgress('Terms of Service')}
              className="text-(--primary-soft) hover:text-(--primary) transition"
            >
              Terms of Service
            </button>{' '}
            and{' '}
            <button
              type="button"
              onClick={() => handleFeatureInProgress('Privacy Policy')}
              className="text-(--primary-soft) hover:text-(--primary) transition"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {showToast && (
          <Toast
            message={toastMessage}
            type="info"
            onClose={() => setShowToast(false)}
          />
        )}

        <Button type="submit" variant="primary" full>
          Create account
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
