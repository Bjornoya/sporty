import { useQuery } from '@tanstack/react-query'
import { getLeagueById } from '../api/getLeagueById'

export const useLeague = (leagueId: string) => {
  return useQuery({
    queryKey: ['league', leagueId],
    queryFn: () => getLeagueById(leagueId),
  })
}
