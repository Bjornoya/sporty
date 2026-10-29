import { useSuspenseQuery } from '@tanstack/react-query'
import { getLeagues } from '../api/getLeagues'

export const useLeagues = () => {
  return useSuspenseQuery({
    queryKey: ['leagues'],
    queryFn: getLeagues,
  })
}
