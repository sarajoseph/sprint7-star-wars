import { fetchStarship } from '../services/starships'
import { useQuery } from '@tanstack/react-query'
import { StarshipDataProps } from '../types/global'

export const getStarshipByID = (starshipID: string | undefined) => {
  const { status, error, data } = useQuery<{ status: string, error: string, data: StarshipDataProps }>({
    queryKey: ['starships/'+starshipID],
    queryFn: () => fetchStarship(starshipID)
  })
  return { status, error, data }
}