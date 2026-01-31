import { Outlet } from 'react-router'

import { shellConfig } from '../shell.config'
import { ShellBackground } from './components/ShellBackground'
import { ShellBrand } from './components/ShellBrand'
import { ShellSidebar } from './components/ShellSidebar'
import { ShellTopbar } from './components/ShellTopbar'

export function ShellLayout() {
  return (
    <div className="min-h-screen bg-(--bg-root) text-(--text-primary)">
      <ShellBackground />

      <div className="relative mx-auto min-h-screen max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-48px)] grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar panel (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <div className="group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] shadow-2xl backdrop-blur-xl">
                {/* Shine */}
                <div className="pointer-events-none absolute -inset-x-16 -top-16 h-28 rotate-12 bg-white/10 blur-2xl opacity-70 transition group-hover:opacity-90" />
                {/* Ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-white/10 transition group-hover:opacity-100" />

                <div className="relative p-5">
                  <ShellBrand brand={shellConfig.brand} />
                  <div className="mt-5">
                    <ShellSidebar items={shellConfig.nav} />
                  </div>
                </div>
              </div>

              {shellConfig.footer?.text && (
                <p className="mt-4 px-2 text-xs text-(--text-muted)">
                  © {new Date().getFullYear()} {shellConfig.footer.text}
                </p>
              )}
            </div>
          </aside>

          {/* Main area */}
          <section className="flex flex-col gap-6">
            {/* Topbar card */}
            <div className="group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute -inset-x-16 -top-16 h-28 rotate-12 bg-white/10 blur-2xl opacity-70 transition group-hover:opacity-90" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-white/10 transition group-hover:opacity-100" />

              <div className="relative p-4 lg:p-5">
                <ShellTopbar topbar={shellConfig.topbar} />
              </div>
            </div>

            {/* Content card */}
            <div className="group relative flex-1 overflow-hidden rounded-3xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] shadow-2xl backdrop-blur-xl">
              <div className="pointer-events-none absolute -inset-x-16 -top-16 h-28 rotate-12 bg-white/10 blur-2xl opacity-70 transition group-hover:opacity-90" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-white/10 transition group-hover:opacity-100" />

              <div className="relative p-4 lg:p-6">
                <Outlet />
              </div>
            </div>

            {/* Mobile hint */}
            {shellConfig.mobile?.showHint && (
              <div className="lg:hidden rounded-2xl border border-(--border-subtle) bg-[rgba(17,24,39,0.60)] p-3 backdrop-blur-xl">
                <p className="text-xs text-(--text-muted)">
                  {shellConfig.mobile.hintText ??
                    'Sidebar is desktop-only for now.'}
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
