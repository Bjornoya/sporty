import { Shield } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLeagueTeams } from '../../hooks/useLeagueTeams'
import type { Team } from '../../types/Team'

type TeamsProps = {
  leagueName: string
}

export const Teams = ({ leagueName }: TeamsProps) => {
  const { data: teams } = useLeagueTeams(leagueName)

  if (teams.length === 0) {
    return (
      <p className="rounded-xl border border-dashed px-4 py-10 text-center text-sm text-muted-foreground">
        No teams were returned for this league.
      </p>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {teams.map((team) => (
        <li key={team.idTeam}>
          <TeamCard team={team} />
        </li>
      ))}
    </ul>
  )
}

function TeamCard({ team }: { team: Team }) {
  const venue = [team.strStadium, team.strCountry].filter(Boolean).join(' · ')

  return (
    <Card size="sm" className="h-full">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-muted">
          {team.strBadge ? (
            <img src={team.strBadge} alt="" className="size-8 object-contain" loading="lazy" />
          ) : (
            <Shield className="size-4 text-muted-foreground" />
          )}
        </div>
        <div className="min-w-0">
          <CardTitle className="truncate">{team.strTeam}</CardTitle>
          <CardDescription className="truncate">{venue || 'Venue not listed'}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
