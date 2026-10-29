import { useSuspenseQuery } from '@tanstack/react-query'
import { getLeaguesBySport } from '../api/getLeaguesBySport'

export const useLeaguesBySport = (sport: string) => {
  return useSuspenseQuery({
    queryKey: ['leagues', sport],
    queryFn: () => getLeaguesBySport(sport),
  })
}
