import { ArrowLeft } from 'lucide-react'
import { Suspense } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
import { LeagueProfileLoader } from '@/features/leagues/components/LeagueProfileLoader/LeagueProfileLoader'
import { Button } from '@/components/ui/button'

export function LeaguePageLayout() {
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

      <Suspense fallback={<LeagueProfileLoader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
