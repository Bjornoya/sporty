export type League = {
  idLeague: string
  strLeague: string
  strSport: string
  strLeagueAlternate: string | null
}

export type LeagueDetails = League & {
  strCountry: string | null
  strGender: string | null
  intFormedYear: string | null
  strCurrentSeason: string | null
  strWebsite: string | null
  strFacebook: string | null
  strTwitter: string | null
  strInstagram: string | null
  strYoutube: string | null
  strDescriptionEN: string | null
  strBadge: string | null
  strLogo: string | null
  strBanner: string | null
  strTrophy: string | null
  strFanart1: string | null
}


