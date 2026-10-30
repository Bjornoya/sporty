export const toWebsiteUrl = (website: string | null) => {
  if (!website) {
    return null
  }

  if (website.startsWith('http://') || website.startsWith('https://')) {
    return website
  }

  return `https://${website}`
}
