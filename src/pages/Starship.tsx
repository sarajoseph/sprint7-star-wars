/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useContext, useEffect } from 'react'
import { ContextCreator } from '../context/Context'
import { useQuery } from '@tanstack/react-query'
import { fetchStarship } from '../services/data'
import { NotFound } from './NotFound'
import { Loading } from '../components/icons/Loading'
import { StarshipDetails } from '../components/StarshipDetails'

export const Starship = () => {
  const { setStarshipsPageIsActive, setHomePageIsActive } = useContext(ContextCreator)

  useEffect(() => {
    setStarshipsPageIsActive(true)
    setHomePageIsActive(false)
  })

  const { params } = useParams() 
  const starshipID = params !== undefined ? params : ''
  
  const { status, error, data }: { status: string, error: string | null, data: any } = useQuery({
    queryKey: ['starships/'+starshipID],
    queryFn: () => fetchStarship(starshipID)
  })
  
  if (status === 'error' && error) return <NotFound databaseError={error} />

  return (
    <>
      <Header />
      <main className='py-8 px-12'>
        {
          status === 'pending' && <Loading />
        }
        {
          status === 'success' && <StarshipDetails 
            starshipData={{
              id: starshipID,
              name: data.name,
              model: data.model,
              cost_in_credits: data.cost_in_credits,
              max_atmosphering_speed: data.max_atmosphering_speed,
              manufacturer: data.manufacturer,
              length: data.length,
              crew: data.crew,
            }}
          />
        }
      </main>
    </>
  )
}