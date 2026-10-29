import { api } from '@/lib/client'
import type { LeagueDetails } from '../types/League'

type LeagueDetailsResponse = {
  leagues?: LeagueDetails[] | null
}

export const getLeagueById = async (id: string) => {
  const response = await api.get<LeagueDetailsResponse>('/lookupleague.php', { id })
  return response.leagues?.[0]
}
