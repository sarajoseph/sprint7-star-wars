export type HeaderProps = {
  homePageIsActive: boolean
  setHomePageIsActive: React.Dispatch<React.SetStateAction<boolean>>
  starshipsPageIsActive: boolean
  setStarshipsPageIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
export type LoadingProps = {
  type?: 'loading-spinner' | 'loading-dots' | 'loading-ring' | 'loading-ball' | 'loading-bars' | 'loading-infinity'
  size?: 'loading-xs' | 'loading-sm' | 'loading-md' | 'loading-lg'
}