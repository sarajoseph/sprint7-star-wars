export type LoadingProps = {
  type?: 'loading-spinner' | 'loading-dots' | 'loading-ring' | 'loading-ball' | 'loading-bars' | 'loading-infinity'
  size?: 'loading-xs' | 'loading-sm' | 'loading-md' | 'loading-lg'
}
export type StarshipBasicProps = {
  id: string
  name: string
  model: string
}
export type StarshipDataProps = StarshipBasicProps & {
  cost_in_credits: string
  max_atmosphering_speed: string
  manufacturer: string
  length: string
  crew: string
}
export type StarshipDataTotalProps = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: string[]
  films: string[]
  created: string
  edited: string
  url: string
}
export type FormRegisterInputs = {
  username: string
  email: string
  password: string
}