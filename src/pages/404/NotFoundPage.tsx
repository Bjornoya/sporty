import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60svh] flex-col items-center justify-center text-center">
      <p className="font-heading text-8xl font-medium tracking-tight text-muted-foreground sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
        That route does not exist. Head back to the leagues list to keep browsing.
      </p>
      <Button asChild size="lg" className="mt-8 text-base">
        <Link to="/">View leagues</Link>
      </Button>
    </div>
  )
}
