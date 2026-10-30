import { useMemo } from 'react'
import { useLeagues } from '../../hooks/useLeagues'
import { useLeaguesBySport } from '../../hooks/useLeaguesBySport'
import type { League } from '../../types/League'
import { filterLeagues } from '../../utils/filterLeagues'
import { LeagueGrid } from '../LeagueGrid/LeagueGrid'

type LeagueResultsProps = {
  query: string
  sport: string
}

export const LeagueResults = ({ query, sport }: LeagueResultsProps) => {
  if (sport) {
    return <SportResults query={query} sport={sport} />
  }

  return <CatalogResults query={query} />
}

function CatalogResults({ query }: { query: string }) {
  const { data: leagues } = useLeagues()
  return <FilteredLeagues leagues={leagues} query={query} />
}

function SportResults({ query, sport }: { query: string; sport: string }) {
  const { data: leagues } = useLeaguesBySport(sport)
  return <FilteredLeagues leagues={leagues} query={query} />
}

function FilteredLeagues({ leagues, query }: { leagues: League[]; query: string }) {
  const visibleLeagues = useMemo(() => filterLeagues(leagues, query), [leagues, query])

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Showing {visibleLeagues.length} of {leagues.length} leagues
        {query.trim() ? ' · name search runs in the browser' : ''}
      </p>
      <LeagueGrid leagues={visibleLeagues} />
    </div>
  )
}
