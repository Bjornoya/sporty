import { QueryClientProvider } from '@tanstack/react-query'
import { createQueryClient } from '@/app/createQueryClient'
import { AppRouter } from '@/app/router'

const queryClient = createQueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}
