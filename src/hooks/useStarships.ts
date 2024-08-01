/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInfiniteQuery } from '@tanstack/react-query'
import { StarshipDataTotalProps } from '../types/global'
import { fetchStarships } from '../services/starships'

export const useStarships = () => {
  const {
    isPending,
    isSuccess,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['starships'],
    queryFn: fetchStarships,
    getNextPageParam: (lastPage) => lastPage.nextUrl,
    refetchOnWindowFocus: false,
    initialPageParam: undefined
  })

  const starshipsData: (StarshipDataTotalProps | null)[] | [] = data?.pages?.flatMap(page => page?.starships) ?? []

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