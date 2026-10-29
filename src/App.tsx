import { QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { createQueryClient } from '@/app/createQueryClient'
import { AppRouter } from '@/app/router'
import { ErrorFallback } from '@/components/ErrorFallback'

const queryClient = createQueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <AppRouter />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}
