/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useNavMenu } from '../hooks/useNavMenu'
export const Home = () => {
  useNavMenu(true, false)

  return (
		<>
		<Header />
    <main className="flex flex-col text-center gap-y-10 max-w-3xl mx-auto py-20 text-zinc-500">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <Link to="/starships" className="btn btn-neutral mx-auto w-fit">
				Go to Starships
      </Link>
    </main>
		</>
  )
}
