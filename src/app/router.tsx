import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/app-shell'
import { NotFoundPage } from '@/pages/404/NotFoundPage'
import { LeaguePage } from '@/pages/leagues/[id]/LeaguePage'
import { LeaguesPage } from '@/pages/leagues/LeaguesPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<LeaguesPage />} />
          <Route path="leagues/:leagueId" element={<LeaguePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
