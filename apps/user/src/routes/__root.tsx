import { lazy, Suspense } from 'react'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

const Devtools = import.meta.env.DEV
  ? lazy(async () => {
      const [{ TanStackRouterDevtools }, { ReactQueryDevtools }] =
        await Promise.all([
          import('@tanstack/router-devtools'),
          import('@tanstack/react-query-devtools'),
        ])
      return {
        default: () => (
          <>
            <TanStackRouterDevtools position="bottom-right" />
            <ReactQueryDevtools buttonPosition="bottom-left" />
          </>
        ),
      }
    })
  : null

function RootLayout() {
  return (
    <>
      <div className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      {Devtools && (
        <Suspense fallback={null}>
          <Devtools />
        </Suspense>
      )}
    </>
  )
}
