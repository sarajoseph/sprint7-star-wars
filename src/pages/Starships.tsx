/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react'
import { Header } from '../components/header/Header'
import { ContextCreator } from '../context/Context'
import { fetchStarships } from '../services/data'
import { Loading } from '../components/icons/Loading'
import { StarshipList } from '../components/StarshipList'
import { useQuery } from '@tanstack/react-query'
import { StarshipBasicProps } from '../types/global'
import { NotFound } from './NotFound'
export const Starships = () => {
  const { setStarshipsPageIsActive, setHomePageIsActive, starships, setStarships } = useContext(ContextCreator)  
  useEffect(() => {
    setStarshipsPageIsActive(true)
    setHomePageIsActive(false)
  })

  const { status, error, data }: { status: string, error: string | null, data: any } = useQuery({
    queryKey: ['starships'],
    queryFn: fetchStarships
  })
  
  if (status === 'error' && error) return <NotFound databaseError={error} />
  
  useEffect(() => {
    if (status === 'success' && data) {
      const newStarships = data.map((s: any) => ({
        id: getStarshipID(s.url),
        name: s.name,
        model: s.model
      }))
      setStarships(newStarships);
    }
  }, [status, data])

  const getStarshipID = (url: string) => {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 2]
  }
  
  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-10 max-w-3xl mx-auto py-20">
        {
          starships && starships.length > 0 ? (
            starships.map((starship: StarshipBasicProps) => (
              <StarshipList 
                key={starship.id}
                starship={starship} />
            ))
          ) : (
            <Loading />
          )
        }
      </main>
    </>
  )
}