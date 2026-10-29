import { useQuery } from '@tanstack/react-query'
import { getLeaguesBySport } from '../api/getLeaguesBySport'

export const useLeaguesBySport = (sport: string) => {
  return useQuery({
    queryKey: ['leagues', sport],
    queryFn: () => getLeaguesBySport(sport),
    enabled: Boolean(sport),
  })
}
