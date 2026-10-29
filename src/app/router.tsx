import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { NotFoundPage } from '@/pages/404/NotFoundPage'
import { LeaguePage } from '@/pages/leagues/[id]/LeaguePage'
import { LeaguesPage } from '@/pages/leagues/LeaguesPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LeaguesPage />} />
          <Route path="leagues/:leagueId" element={<LeaguePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
