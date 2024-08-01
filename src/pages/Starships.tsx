/* eslint-disable react/react-in-jsx-scope */
import { Header } from '../components/header/Header'
import { Loading } from '../components/icons/Loading'
import { StarshipElement } from '../components/StarshipElement'
import { StarshipBasicProps, StarshipDataTotalProps } from '../types/global'
import { NotFound } from './NotFound'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { useEffect } from 'react'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
import { setStarships } from '../store/starships/slice'
import { getStarshipID } from '../logic/starships'
import { useStarships } from '../hooks/useStarships'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Starships = () => {
  const dispatch = useAppDispatch()
  const starships = useAppSelector((state) => state.starships)
  const { isPending, isSuccess, isError, data, starshipsData, error, fetchNextPage, hasNextPage } = useStarships()

  useEffect(() => {
    dispatch(setStarshipsPageIsActive(true))
    dispatch(setHomePageIsActive(false))
  })

  useEffect(() => {
    if (isSuccess && starshipsData) {
      const newStarships: StarshipBasicProps[] = starshipsData.map((s: StarshipDataTotalProps) => ({
        id: getStarshipID(s.url),
        name: s.name,
        model: s.model
      }))
      dispatch(setStarships(newStarships))
    }
  }, [isSuccess, data])

  if (isError && error) return <NotFound databaseError={error.toString()} />

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-10 max-w-3xl mx-auto py-20">
        {isPending && <Loading />}
        {isSuccess && starships && starships.length > 0 && (
          <>
          {starships.map((starship: StarshipBasicProps) => (
            <StarshipElement key={starship.id} starship={starship} />
          ))}
          {
            <span className="mx-auto">
              <InfiniteScroll
                dataLength={starships.length}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={<Loading />}
              > </InfiniteScroll>
            </span>
          }
          </>
        )}
      </main>
    </>
  )
}