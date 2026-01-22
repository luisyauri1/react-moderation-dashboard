import { Outlet } from 'react-router'

import { AuthBackground } from './components/AuthBackground'
import { AuthBrand } from './components/AuthBrand'
import { AuthFeatureCard } from './components/AuthFeatureCard'
import { AuthKpi } from './components/AuthKpi'

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-(--bg-root) text-(--text-primary)">
      <AuthBackground />

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-4 py-10 lg:grid-cols-2 lg:px-8">
        {/* Panel izquierdo */}
        <aside className="hidden lg:block">
          <div className="max-w-md">
            <AuthBrand />

            <h1 className="mt-8 text-4xl font-semibold tracking-tight">
              Secure access to your{' '}
              <span className="text-(--primary-soft)">moderation workflow</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-(--text-secondary)">
              Review reports, manage actions, and track decisions with an
              audit-ready experience built for speed and compliance.
            </p>

            <div className="mt-8 grid gap-3">
              <AuthFeatureCard
                title="Audit-ready decisions"
                desc="Every action logged with traceable context."
              />
              <AuthFeatureCard
                title="Fast review loops"
                desc="Designed for high-volume queues and triage."
              />
              <AuthFeatureCard
                title="Role-based access"
                desc="Granular permissions for teams and reviewers."
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <AuthKpi label="SLA" value="< 5m" />
              <AuthKpi label="Queues" value="Live" />
              <AuthKpi label="Policies" value="Synced" />
            </div>
          </div>
        </aside>

        {/* Auth card */}
        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md">
            <div className="mb-6 lg:hidden">
              <AuthBrand compact />
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-6 shadow-2xl backdrop-blur-xl transition lg:p-8 hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              {/* Shine */}
              <div className="pointer-events-none absolute -inset-x-16 -top-16 h-28 rotate-12 bg-white/10 blur-2xl opacity-70 transition group-hover:opacity-90" />
              {/* Ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-white/10 transition group-hover:opacity-100" />

              <div className="relative">
                <Outlet />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-(--text-muted)">
              © {new Date().getFullYear()} Luis Yauri • Trust & Safety Platform
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
