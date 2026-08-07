import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@health-care/ui/components/button'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">A+ United Healthcare</h1>
      <p className="text-muted-foreground">Project scaffold is ready.</p>
      <Button>Get started</Button>
    </main>
  )
}
