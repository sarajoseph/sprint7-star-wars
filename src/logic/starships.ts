export const getStarshipID = (url: string) => {
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}