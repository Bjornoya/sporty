import { SearchX } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import type { League } from '../../types/League'
import { LeagueCard } from '../LeagueCard/LeagueCard'

type LeagueGridProps = {
  leagues: League[]
}

export const LeagueGrid = ({ leagues }: LeagueGridProps) => {
  const { search } = useLocation()

  if (leagues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed px-4 py-16 text-center">
        <SearchX className="mb-3 size-8 text-muted-foreground" />
        <h2 className="font-heading text-lg">No leagues match those filters</h2>
        <p className="mt-1 max-w-md text-sm text-muted-foreground">
          Try another league name, an alternate name, or reset the sport filter.
        </p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {leagues.map((league) => (
        <li key={league.idLeague}>
          <LeagueCard league={league} search={search} />
        </li>
      ))}
    </ul>
  )
}
