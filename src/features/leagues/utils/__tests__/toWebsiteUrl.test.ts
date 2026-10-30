import { describe, expect, it } from 'vitest'
import { toWebsiteUrl } from '../toWebsiteUrl'

describe('toWebsiteUrl', () => {
  it('returns null for missing values', () => {
    expect(toWebsiteUrl(null)).toBeNull()
    expect(toWebsiteUrl('')).toBeNull()
  })

  it('keeps http and https URLs as they are', () => {
    expect(toWebsiteUrl('https://www.premierleague.com')).toBe('https://www.premierleague.com')
    expect(toWebsiteUrl('http://example.com')).toBe('http://example.com')
  })

  it('prefixes a scheme when the value is a bare host', () => {
    expect(toWebsiteUrl('www.nba.com')).toBe('https://www.nba.com')
  })
})
