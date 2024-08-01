/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Header } from '../components/header/Header'
import { Loading } from '../components/icons/Loading'
import { StarshipList } from '../components/StarshipList'
import { StarshipBasicProps } from '../types/global'
import { NotFound } from './NotFound'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { useEffect } from 'react'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
import { getAllStarships, setStarships } from '../store/starships/slice'
import { getStarshipID } from '../logic/starships'

export const Starships = () => {
  const dispatch = useAppDispatch()
  const starships = useAppSelector((state) => state.starships)
  const { status, error, data } = getAllStarships()

  useEffect(() => {
    dispatch(setStarshipsPageIsActive(true))
    dispatch(setHomePageIsActive(false))
  })

  useEffect(() => {
    if (status === 'success' && data) {
      const newStarships = data.map((s: any) => ({
        id: getStarshipID(s.url),
        name: s.name,
        model: s.model
      }))
      dispatch(setStarships(newStarships))
    }
  }, [status, data])

  if (status === 'error' && error) return <NotFound databaseError={error} />

  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-10 max-w-3xl mx-auto py-20">
        {status === 'pending' && <Loading />}
        {status === 'success' && starships && starships.length > 0 && (
          starships.map((starship: StarshipBasicProps) => (
            <StarshipList key={starship.id} starship={starship} />
          ))
        )}
      </main>
    </>
  )
}