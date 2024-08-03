import { fetchStarship } from '../services/starships'
import { useQuery } from '@tanstack/react-query'
import { StarshipDataProps } from '../global/types'

export const getStarshipByID = (starshipID: string | undefined) => {
  const { status, error, data }: { status: string, error: string | null, data: StarshipDataProps | null | undefined } = useQuery({
    queryKey: ['starships/'+starshipID],
    queryFn: () => fetchStarship(starshipID)
  })
  return { status, error, starshipData: data }
}