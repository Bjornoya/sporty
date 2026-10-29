import { QueryClient } from '@tanstack/react-query';

import { DEFAULT_QUERY_STALE_TIME } from './constants';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_QUERY_STALE_TIME,
      },
    },
  });
};
