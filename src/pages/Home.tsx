/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useAppDispatch } from '../hooks/store'
import { useEffect } from 'react'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
export const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setHomePageIsActive(true))
    dispatch(setStarshipsPageIsActive(false))
  })

  return (
		<>
		<Header />
    <main className="flex flex-col text-center gap-y-10 max-w-3xl mx-auto py-20 text-zinc-500">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p>

      </p>
      <Link to="/starships" className="btn btn-neutral mx-auto w-fit">
				Go to Starships
      </Link>
    </main>
		</>
  )
}
