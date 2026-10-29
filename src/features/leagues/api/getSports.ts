import { api } from '@/lib/client'
import type { Sport } from '../types/Sport'

type SportsResponse = {
  sports?: Sport[] | null
}

export const getSports = async () => {
  const response = await api.get<SportsResponse>('/all_sports.php')
  return response.sports ?? []
}
