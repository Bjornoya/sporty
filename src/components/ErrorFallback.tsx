import { AlertTriangle } from 'lucide-react'
import type { FallbackProps } from 'react-error-boundary'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-xl items-center px-4">
      <Alert className="w-full p-6">
        <AlertTriangle className="size-5" />
        <AlertTitle className="text-lg">Something went wrong</AlertTitle>
        <AlertDescription className="text-base">
          {error instanceof Error ? error.message : 'An unexpected error occurred.'}
        </AlertDescription>
        <div className="col-start-2 mt-4">
          <Button
            type="button"
            variant="outline"
            className="min-w-28 px-6"
            onClick={resetErrorBoundary}
          >
            Try again
          </Button>
        </div>
      </Alert>
    </div>
  )
}
