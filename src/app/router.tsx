import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { NotFoundPage } from '@/pages/404/NotFoundPage'
import { LeaguePageLayout } from '@/pages/leagues/[id]/LeaguePageLayout'
import { LeaguesPage } from '@/pages/leagues/LeaguesPage'

const LeaguePage = lazy(() =>
  import('@/pages/leagues/[id]/LeaguePage').then((module) => ({ default: module.LeaguePage })),
)

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LeaguesPage />} />
          <Route path="leagues/:leagueId" element={<LeaguePageLayout />}>
            <Route index element={<LeaguePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
