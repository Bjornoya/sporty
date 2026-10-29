import { useQuery } from '@tanstack/react-query'
import { getLeaguesBySport } from '../api/getLeaguesBySport'
import { ALL_SPORTS } from '../utils/constants'

export const useLeaguesBySport = (sport: string) => {
  return useQuery({
    queryKey: ['leagues', sport],
    queryFn: () => getLeaguesBySport(sport),
    enabled: sport !== ALL_SPORTS,
  })
}
