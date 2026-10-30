import { Calendar, ExternalLink, Flag, Trophy, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useLeague } from '../../hooks/useLeague'
import { toWebsiteUrl } from '../../utils/toWebsiteUrl'
import { LeagueProfileTeams } from '../LeagueProfileTeams/LeagueProfileTeams'

type LeagueProfileProps = {
  leagueId: string
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Flag
  label: string
  value: string | null
}) {
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 size-4 text-muted-foreground" />
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value ?? 'Not listed'}</p>
      </div>
    </div>
  )
}

export const LeagueProfile = ({ leagueId }: LeagueProfileProps) => {
  const { data: league } = useLeague(leagueId)
  const cover = league.strBanner ?? league.strFanart1
  const website = toWebsiteUrl(league.strWebsite)

  return (
    <div className="space-y-6">
      <article className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <div className="relative min-h-40 bg-muted">
        {cover ? (
          <img
            src={cover}
            alt=""
            width={1200}
            height={224}
            fetchPriority="high"
            decoding="async"
            className="h-40 w-full object-cover sm:h-56"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
      </div>
      <div className="relative -mt-10 space-y-5 px-4 pb-6 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
            {league.strBadge || league.strLogo ? (
              <img
                src={league.strBadge ?? league.strLogo ?? ''}
                alt={`${league.strLeague} badge`}
                width={64}
                height={64}
                decoding="async"
                className="size-16 object-contain"
              />
            ) : (
              <Trophy className="size-8 text-muted-foreground" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="h-6 border-transparent bg-foreground px-2.5 text-background">
                {league.strSport}
              </Badge>
              {league.strGender ? (
                <Badge className="h-6 border-transparent bg-foreground px-2.5 text-background">
                  {league.strGender}
                </Badge>
              ) : null}
            </div>
            <h1 className="mt-2 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              {league.strLeague}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              {league.strLeagueAlternate ?? 'No alternate name listed'}
            </p>
          </div>
          {website ? (
            <Button asChild variant="outline">
              <a href={website} target="_blank" rel="noreferrer">
                Official site
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetaItem icon={Flag} label="Country" value={league.strCountry} />
          <MetaItem icon={Calendar} label="Formed" value={league.intFormedYear} />
          <MetaItem icon={Users} label="Current season" value={league.strCurrentSeason} />
        </div>
        {league.strDescriptionEN ? (
          <>
            <Separator />
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {league.strDescriptionEN}
            </p>
          </>
        ) : null}
      </div>
    </article>
      <LeagueProfileTeams leagueName={league.strLeague} />
    </div>
  )
}
