import type { League } from '../types/League'

export const filterLeagues = (leagues: League[], query: string) => {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return leagues
  }

  return leagues.filter(
    (league) =>
      league.strLeague.toLowerCase().includes(normalized) ||
      (league.strLeagueAlternate?.toLowerCase().includes(normalized) ?? false),
  )
}
