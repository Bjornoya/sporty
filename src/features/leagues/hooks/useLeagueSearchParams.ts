import { useSearchParams } from 'react-router-dom'

type LeagueSearchParams = {
  q?: string
  sport?: string
}

export const useLeagueSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const sport = searchParams.get('sport') ?? ''

  function updateParams(next: LeagueSearchParams) {
    setSearchParams(
      (current) => {
        const params = new URLSearchParams(current)

        setSearchParam(params, 'q', (next.q ?? params.get('q') ?? '').trim())
        setSearchParam(params, 'sport', next.sport ?? params.get('sport') ?? '')

        return params
      },
      { replace: true },
    )
  }

  return {
    query,
    sport,
    setQuery: (q: string) => updateParams({ q }),
    setSport: (nextSport: string) => updateParams({ sport: nextSport }),
    clear: () => updateParams({ q: '', sport: '' }),
  }
}

function setSearchParam(params: URLSearchParams, key: string, value: string) {
  if (value) {
    params.set(key, value)
  } else {
    params.delete(key)
  }
}
