import { useParams } from 'react-router-dom'
import { AsyncDataBoundary } from '@/components/AsyncDataBoundary'
import { QueryError } from '@/components/QueryError'
import { LeagueProfile } from '@/features/leagues/components/LeagueProfile/LeagueProfile'
import { LeagueProfileLoader } from '@/features/leagues/components/LeagueProfileLoader/LeagueProfileLoader'

export function LeaguePage() {
  const { leagueId = '' } = useParams()

  return (
    <AsyncDataBoundary loader={LeagueProfileLoader} error={QueryError}>
      <LeagueProfile leagueId={leagueId} />
    </AsyncDataBoundary>
  )
}
