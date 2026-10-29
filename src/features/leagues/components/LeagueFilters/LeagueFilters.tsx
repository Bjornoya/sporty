import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ALL_SPORTS = 'all'

type LeagueFiltersProps = {
  query: string
  sport: string
  sports: string[]
  resultCount: number
  totalCount: number
  onQueryChange: (value: string) => void
  onSportChange: (value: string) => void
  onClear: () => void
}

export const LeagueFilters = ({
  query,
  sport,
  sports,
  resultCount,
  totalCount,
  onQueryChange,
  onSportChange,
  onClear,
}: LeagueFiltersProps) => {
  const hasFilters = query.trim().length > 0 || Boolean(sport)

  return (
    <section className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search leagues</span>
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search by league name or alternate name"
            className="h-10 pl-8"
            autoComplete="off"
          />
        </label>
        <Select
          value={sport || ALL_SPORTS}
          onValueChange={(value) => onSportChange(value === ALL_SPORTS ? '' : value)}
        >
          <SelectTrigger
            className="h-10 w-full data-[size=default]:h-10 sm:w-56"
            aria-label="Filter by sport"
          >
            <SelectValue placeholder="All sports" />
          </SelectTrigger>
          <SelectContent position="popper" align="start" className="min-w-56 p-1.5">
            <SelectItem value={ALL_SPORTS} className="py-2.5">
              All sports
            </SelectItem>
            {sports.map((item) => (
              <SelectItem key={item} value={item} className="py-2.5">
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {hasFilters ? (
          <Button type="button" variant="outline" className="h-10" onClick={onClear}>
            <X data-icon="inline-start" />
            Clear
          </Button>
        ) : null}
      </div>
      <p className="text-sm text-muted-foreground">
        Showing {resultCount} of {totalCount} leagues
        {hasFilters ? ' · name search runs in the browser' : ''}
      </p>
    </section>
  )
}
