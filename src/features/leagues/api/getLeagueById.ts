import { api } from '@/lib/client'
import type { LeagueDetails } from '../types/League'

type LeagueDetailsResponse = {
  leagues?: LeagueDetails[] | null
}

export const getLeagueById = async (id: string) => {
  const response = await api.get<LeagueDetailsResponse>('/lookupleague.php', { id })
  const league = response.leagues?.[0]

  if (!league) {
    throw new Error('League not found.')
  }

  return league
}
