/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useEffect } from 'react'
import { NotFound } from './NotFound'
import { Loading } from '../components/icons/Loading'
import { StarshipDetails } from '../components/StarshipDetails'
import { useAppDispatch } from '../hooks/store'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { getStarshipByID } from '../store/starships/slice'

export const Starship = () => {
  const dispatch = useAppDispatch()
  const { params } = useParams()
  const starshipID = params !== undefined ? params : ''
  const { status, error, data } = getStarshipByID(starshipID)

  useEffect(() => {
    dispatch(setStarshipsPageIsActive(true))
    dispatch(setHomePageIsActive(false))
  })

  if (status === 'error' && error) return <NotFound databaseError={error} />

  return (
    <>
      <Header />
      <main className='flex flex-col mx-auto py-8 px-12'>
        {status === 'pending' && <Loading />}
        {status === 'success' && <StarshipDetails
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