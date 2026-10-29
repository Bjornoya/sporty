import { api } from '@/lib/client'
import type { League } from '../types/League'

type SearchLeaguesResponse = {
  countries?: League[] | null
  leagues?: League[] | null
}

export const getLeaguesBySport = async (sport: string) => {
  const response = await api.get<SearchLeaguesResponse>('/search_all_leagues.php', { s: sport })
  return response.countries ?? response.leagues ?? []
}
