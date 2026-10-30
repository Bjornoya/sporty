import { describe, expect, it } from 'vitest'
import type { League } from '../../types/League'
import { filterLeagues } from '../filterLeagues'

function league(overrides: Partial<League> = {}): League {
  return {
    idLeague: '1',
    strLeague: 'English Premier League',
    strSport: 'Soccer',
    strLeagueAlternate: 'EPL',
    ...overrides,
  }
}

const catalog = [
  league({ idLeague: '1', strLeague: 'English Premier League', strLeagueAlternate: 'EPL' }),
  league({ idLeague: '2', strLeague: 'NBA', strLeagueAlternate: 'National Basketball Association' }),
  league({ idLeague: '3', strLeague: 'NHL', strLeagueAlternate: null }),
]

describe('filterLeagues', () => {
  it('returns the same list when the query is empty or whitespace', () => {
    expect(filterLeagues(catalog, '')).toBe(catalog)
    expect(filterLeagues(catalog, '   ')).toBe(catalog)
  })

  it('matches league name case-insensitively', () => {
    expect(filterLeagues(catalog, 'premier')).toEqual([catalog[0]])
    expect(filterLeagues(catalog, 'NBA')).toEqual([catalog[1]])
  })

  it('matches alternate name case-insensitively', () => {
    expect(filterLeagues(catalog, 'epl')).toEqual([catalog[0]])
    expect(filterLeagues(catalog, 'basketball')).toEqual([catalog[1]])
  })

  it('trims the query before matching', () => {
    expect(filterLeagues(catalog, '  nhl  ')).toEqual([catalog[2]])
  })

  it('does not match on sport', () => {
    expect(filterLeagues(catalog, 'soccer')).toEqual([])
  })

  it('returns an empty list when nothing matches', () => {
    expect(filterLeagues(catalog, 'formula')).toEqual([])
  })

  it('does not throw when alternate name is null', () => {
    expect(filterLeagues([catalog[2]], 'nhl')).toEqual([catalog[2]])
  })
})
