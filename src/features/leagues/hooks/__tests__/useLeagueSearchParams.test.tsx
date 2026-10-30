// @vitest-environment jsdom
import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { useLeagueSearchParams } from '../useLeagueSearchParams'

function renderUseLeagueSearchParams(initialEntry = '/') {
  const { result } = renderHook(
    () => ({
      ...useLeagueSearchParams(),
      search: useLocation().search,
    }),
    {
      wrapper: ({ children }: { children: ReactNode }) => (
        <MemoryRouter initialEntries={[initialEntry]}>{children}</MemoryRouter>
      ),
    },
  )

  return result
}

function searchParams(search: string) {
  return new URLSearchParams(search)
}

describe('useLeagueSearchParams', () => {
  it('reads empty query and sport when the URL has no search params', () => {
    const result = renderUseLeagueSearchParams()

    expect(result.current.query).toBe('')
    expect(result.current.sport).toBe('')
  })

  it('reads q and sport from the URL', () => {
    const result = renderUseLeagueSearchParams('/?q=premier&sport=Soccer')

    expect(result.current.query).toBe('premier')
    expect(result.current.sport).toBe('Soccer')
  })

  it('trims and sets q without dropping sport', () => {
    const result = renderUseLeagueSearchParams('/?sport=Soccer')

    act(() => {
      result.current.setQuery('  premier  ')
    })

    expect(result.current.query).toBe('premier')
    expect(result.current.sport).toBe('Soccer')
    expect(searchParams(result.current.search).get('q')).toBe('premier')
    expect(searchParams(result.current.search).get('sport')).toBe('Soccer')
  })

  it('removes q when the query is empty or whitespace', () => {
    const result = renderUseLeagueSearchParams('/?q=premier&sport=Soccer')

    act(() => {
      result.current.setQuery('   ')
    })

    expect(result.current.query).toBe('')
    expect(result.current.sport).toBe('Soccer')
    expect(searchParams(result.current.search).has('q')).toBe(false)
    expect(searchParams(result.current.search).get('sport')).toBe('Soccer')
  })

  it('sets sport without dropping q', () => {
    const result = renderUseLeagueSearchParams('/?q=lakers')

    act(() => {
      result.current.setSport('Basketball')
    })

    expect(result.current.query).toBe('lakers')
    expect(result.current.sport).toBe('Basketball')
    expect(searchParams(result.current.search).get('q')).toBe('lakers')
    expect(searchParams(result.current.search).get('sport')).toBe('Basketball')
  })

  it('clears both q and sport', () => {
    const result = renderUseLeagueSearchParams('/?q=premier&sport=Soccer')

    act(() => {
      result.current.clear()
    })

    expect(result.current.query).toBe('')
    expect(result.current.sport).toBe('')
    expect(result.current.search).toBe('')
  })
})
