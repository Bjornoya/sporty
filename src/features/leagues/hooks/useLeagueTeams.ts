import { useQuery } from '@tanstack/react-query'
import { getTeamsByLeague } from '../api/getTeamsByLeague'

export const useLeagueTeams = (leagueName: string) => {
  return useQuery({
    queryKey: ['league-teams', leagueName],
    queryFn: () => getTeamsByLeague(leagueName),
  })
}
