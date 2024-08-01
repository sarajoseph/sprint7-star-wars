/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react'
import { Header } from '../components/header/Header'
import { ContextCreator } from '../context/Context'
import { Loading } from '../components/icons/Loading'
import { StarshipList } from '../components/StarshipList'
import { StarshipBasicProps } from '../types/global'
import { NotFound } from './NotFound'
import { useStarshipsContext } from '../context/StarshipsContext'
export const Starships = () => {
  const { setStarshipsPageIsActive, setHomePageIsActive } = useContext(ContextCreator)
  const { starships, status, error } = useStarshipsContext()
  useEffect(() => {
    setStarshipsPageIsActive(true)
    setHomePageIsActive(false)
  })

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