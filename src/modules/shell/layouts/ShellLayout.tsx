import { Outlet } from 'react-router'
import { GlassPanel } from '@/shared/ui'

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
          <aside className="hidden lg:block">
            <div className="sticky top-6">
              <GlassPanel className="p-0">
                <div className="p-5">
                  <ShellBrand brand={shellConfig.brand} />
                  <div className="mt-5">
                    <ShellSidebar items={shellConfig.nav} />
                  </div>
                </div>
              </GlassPanel>

              {shellConfig.footer?.text && (
                <p className="mt-4 px-2 text-xs text-(--text-muted)">
                  © {new Date().getFullYear()} {shellConfig.footer.text}
                </p>
              )}
            </div>
          </aside>

          <section className="flex flex-col gap-6">
            <GlassPanel className="p-0">
              <div className="p-4 lg:p-5">
                <ShellTopbar topbar={shellConfig.topbar} />
              </div>
            </GlassPanel>

            <GlassPanel className="flex-1 p-0">
              <div className="p-4 lg:p-6">
                <Outlet />
              </div>
            </GlassPanel>

            {shellConfig.mobile?.showHint && (
              <GlassPanel className="lg:hidden p-3 rounded-2xl">
                <p className="text-xs text-(--text-muted)">
                  {shellConfig.mobile.hintText ??
                    'Sidebar is desktop-only for now.'}
                </p>
              </GlassPanel>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
