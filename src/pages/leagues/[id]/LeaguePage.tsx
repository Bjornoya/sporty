import { ArrowLeft } from 'lucide-react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { AsyncDataBoundary } from '@/components/AsyncDataBoundary'
import { QueryError } from '@/components/QueryError'
import { Button } from '@/components/ui/button'
import { LeagueProfile } from '@/features/leagues/components/LeagueProfile/LeagueProfile'
import { LeagueProfileLoader } from '@/features/leagues/components/LeagueProfileLoader/LeagueProfileLoader'

export function LeaguePage() {
  const { leagueId = '' } = useParams()
  const [searchParams] = useSearchParams()
  const backTo = searchParams.toString() ? `/?${searchParams.toString()}` : '/'

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" className="-ml-2 w-fit">
        <Link to={backTo}>
          <ArrowLeft data-icon="inline-start" />
          Back to leagues
        </Link>
      </Button>

      <AsyncDataBoundary loader={LeagueProfileLoader} error={QueryError}>
        <LeagueProfile leagueId={leagueId} />
      </AsyncDataBoundary>
    </div>
  )
}
