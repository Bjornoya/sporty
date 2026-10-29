import { api } from '@/lib/client'
import type { Team } from '../types/Team'

type TeamsResponse = {
  teams?: Team[] | null
}

export const getTeamsByLeague = async (leagueName: string) => {
  const response = await api.get<TeamsResponse>('/search_all_teams.php', { l: leagueName })
  return response.teams ?? []
}
