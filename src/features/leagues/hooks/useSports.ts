import { useQuery } from '@tanstack/react-query'
import { getSports } from '../api/getSports'

export const useSports = () => {
  return useQuery({
    queryKey: ['sports'],
    queryFn: getSports,
  })
}
