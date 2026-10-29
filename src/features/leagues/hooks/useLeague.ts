import { useSuspenseQuery } from '@tanstack/react-query'
import { getLeagueById } from '../api/getLeagueById'

export const useLeague = (leagueId: string) => {
  return useSuspenseQuery({
    queryKey: ['league', leagueId],
    queryFn: () => getLeagueById(leagueId),
  })
}
