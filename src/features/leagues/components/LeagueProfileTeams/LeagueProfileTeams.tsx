import { AsyncDataBoundary } from '@/components/AsyncDataBoundary'
import { QueryError } from '@/components/QueryError'
import { Teams } from './Teams'
import { TeamsLoader } from './TeamsLoader'

type LeagueProfileTeamsProps = {
  leagueName: string
}

export const LeagueProfileTeams = ({ leagueName }: LeagueProfileTeamsProps) => {
  return (
    <section className="space-y-3">
      <header>
        <h2 className="font-heading text-2xl font-medium">Teams</h2>
        <p className="text-base text-muted-foreground">
          Cached separately so returning to this league is instant.
        </p>
      </header>
      <AsyncDataBoundary loader={TeamsLoader} error={QueryError}>
        <Teams leagueName={leagueName} />
      </AsyncDataBoundary>
    </section>
  )
}
