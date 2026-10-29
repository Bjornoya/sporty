import { QueryClient } from '@tanstack/react-query'

import { DEFAULT_QUERY_GC_TIME, DEFAULT_QUERY_STALE_TIME } from './constants'

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_QUERY_STALE_TIME,
        gcTime: DEFAULT_QUERY_GC_TIME,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 1,
      },
    },
  })
}
