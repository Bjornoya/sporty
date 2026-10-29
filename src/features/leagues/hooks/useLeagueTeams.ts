import { useSuspenseQuery } from '@tanstack/react-query'
import { getTeamsByLeague } from '../api/getTeamsByLeague'

export const useLeagueTeams = (leagueName: string) => {
  return useSuspenseQuery({
    queryKey: ['league-teams', leagueName],
    queryFn: () => getTeamsByLeague(leagueName),
  })
}
