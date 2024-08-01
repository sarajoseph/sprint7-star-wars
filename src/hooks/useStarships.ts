import { useInfiniteQuery } from '@tanstack/react-query'
import { StarshipDataTotalProps } from '../types/global'
import { fetchStarships } from '../services/starships'

export const useStarships = () => {
  const { isPending, isSuccess, isError, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery<{ starships: StarshipDataTotalProps[], nextUrl: string }>({
    queryKey: ['starships'],
    queryFn: fetchStarships,
    getNextPageParam: (lastPage) => lastPage.nextUrl,
    refetchOnWindowFocus: false
  })

  const starshipsData: StarshipDataTotalProps[] | [] = data?.pages?.flatMap(page => page?.starships) ?? []

  return {
    isPending,
    isSuccess,
    isError,
    data,
    starshipsData,
    error,
    fetchNextPage,
    hasNextPage
  }
}