/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react'
import { Header } from '../components/header/Header'
import { ContextCreator } from '../context/Context'
import { fetchStarships } from '../services/data'
import { Loading } from '../components/icons/Loading'
import { StarshipList } from '../components/StarshipList'
export const Starships = () => {
  const { setStarshipsPageIsActive, setHomePageIsActive, starships, setStarships } = useContext(ContextCreator)  
  useEffect(() => {
    setStarshipsPageIsActive(true)
    setHomePageIsActive(false)
  })

  useEffect(() => {
    const getStarships = async () => {
      try {
        const data = await fetchStarships()
        setStarships(data)
      } catch (error) {
        console.error('Error fetching the starships:', error)
      }
    }

    getStarships()
  }, [])
  
  return (
    <>
    <Header />
    <main className="flex flex-col gap-y-10 max-w-3xl mx-auto py-20">
      {
        starships && starships.length > 0 ? (
          starships.map((starship) => (
            <StarshipList 
              key={starship.name} 
              name={starship.name} 
              model={starship.model} />
          ))
        ) : (
          <Loading />
        )
      }
    </main>
    </>
  )
}