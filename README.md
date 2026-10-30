# Sporty

Browse sports leagues from [TheSportsDB](https://www.thesportsdb.com/). Search by name, filter by sport, open a league for details and teams.

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

`npm run build` · `npm run lint` · `npm test`

## Design decisions

Leagues are one feature (`api`, `hooks`, `components`, `types`, `utils`). Pages only wire the route to that feature. Each TheSportsDB call has its own hook and suspense/error boundary, so a teams failure does not take down the profile.

Search and sport live in the URL so filters survive refresh and the back button. Name search runs in the browser on the loaded catalog. Changing sport fetches a new catalog.

React Query keeps responses for 30 minutes and does not refetch on focus, so returning to a league is cached. The details page is a separate JS chunk; a layout keeps the Back link on screen while it loads. League cards get the current `search` string as a prop instead of each calling `useLocation()`.

## AI tools

Cursor was used to implement and iterate on the app, tests, and this README. Changes were reviewed before landing; extra abstractions were dropped when they did not match how the app works.
