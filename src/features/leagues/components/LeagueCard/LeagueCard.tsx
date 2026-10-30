import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { League } from '../../types/League'

type LeagueCardProps = {
  league: League
  search: string
}

export const LeagueCard = ({ league, search }: LeagueCardProps) => {
  return (
    <Link
      to={`/leagues/${league.idLeague}${search}`}
      className="group block h-full rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <Card className="h-full transition-colors group-hover:bg-muted/40 group-hover:ring-foreground/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="pr-2 text-lg">{league.strLeague}</CardTitle>
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </div>
          {league.strLeagueAlternate ? (
            <CardDescription>{league.strLeagueAlternate}</CardDescription>
          ) : (
            <CardDescription>Open for country, season, and teams</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">{league.strSport}</Badge>
        </CardContent>
      </Card>
    </Link>
  )
}
