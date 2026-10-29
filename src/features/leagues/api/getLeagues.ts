import { api } from '@/lib/client'
import type { League } from '../types/League'

type LeaguesResponse = {
  leagues?: League[] | null
}

export const getLeagues = async () => {
  const response = await api.get<LeaguesResponse>('/all_leagues.php')
  return response.leagues ?? []
}
