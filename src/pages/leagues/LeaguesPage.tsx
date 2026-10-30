import { AsyncDataBoundary } from '@/components/AsyncDataBoundary'
import { QueryError } from '@/components/QueryError'
import { LeagueFilters } from '@/features/leagues/components/LeagueFilters/LeagueFilters'
import { LeagueGridLoader } from '@/features/leagues/components/LeagueGridLoader/LeagueGridLoader'
import { LeagueResults } from '@/features/leagues/components/LeagueResults/LeagueResults'
import { useLeagueSearchParams } from '@/features/leagues/hooks/useLeagueSearchParams'
import { useSports } from '@/features/leagues/hooks/useSports'

export function LeaguesPage() {
  const { query, sport, setQuery, setSport, clear } = useLeagueSearchParams()
  const { data: sports = [] } = useSports()
  const sportNames = sports.map((item) => item.strSport)
  const sportOptions = sport && !sportNames.includes(sport) ? [...sportNames, sport] : sportNames

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">Leagues</h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Search by league name on this page. Choose a sport to load that catalog.
          League cards open a cached details view.
        </p>
      </div>

      <div className="space-y-3">
        <LeagueFilters
          query={query}
          sport={sport}
          sports={sportOptions}
          onQueryChange={setQuery}
          onSportChange={setSport}
          onClear={clear}
        />

        <AsyncDataBoundary key={sport || 'all'} loader={LeagueGridLoader} error={QueryError}>
          <LeagueResults query={query} sport={sport} />
        </AsyncDataBoundary>
      </div>
    </div>
  )
}
