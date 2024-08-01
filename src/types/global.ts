export type LoadingProps = {
  type?: 'loading-spinner' | 'loading-dots' | 'loading-ring' | 'loading-ball' | 'loading-bars' | 'loading-infinity'
  size?: 'loading-xs' | 'loading-sm' | 'loading-md' | 'loading-lg'
}
export type StarshipBasicProps = {
  id: string,
  name: string,
  model: string
}
export type StarshipDataProps = StarshipBasicProps & {
  cost_in_credits: string
  max_atmosphering_speed: string
  manufacturer: string
  length: string
  crew: string
}