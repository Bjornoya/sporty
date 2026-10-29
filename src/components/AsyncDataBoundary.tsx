import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { Suspense, type ComponentType, type PropsWithChildren, type ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type AsyncDataBoundaryProps = {
  loader: ReactNode | ComponentType
  error: ComponentType<{
    message: string
    onReset: () => void
  }>
}

function isFunction(value: unknown): value is ComponentType {
  return typeof value === 'function'
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'An unexpected error occurred.'
}

export const AsyncDataBoundary = ({
  loader: Loader,
  error: ErrorComponent,
  children,
}: PropsWithChildren<AsyncDataBoundaryProps>) => {
  const loaderElement = isFunction(Loader) ? <Loader /> : Loader

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => {
            const errorMessage = getErrorMessage(error)

            return <ErrorComponent message={errorMessage} onReset={resetErrorBoundary} />
          }}
        >
          <Suspense fallback={loaderElement}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
