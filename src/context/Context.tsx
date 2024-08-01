/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react'
export const ContextCreator = createContext<any | null>(null)

export const ContextProvider = ({children}: any) => {
	const [homePageIsActive, setHomePageIsActive] = useState<boolean>(false)
	const [starshipsPageIsActive, setStarshipsPageIsActive] = useState<boolean>(false)
  const [starships, setStarships] = useState([])
  return (
    <ContextCreator.Provider value={{ homePageIsActive, setHomePageIsActive, starshipsPageIsActive, setStarshipsPageIsActive, starships, setStarships }}>
      {children}
    </ContextCreator.Provider>
  )
}