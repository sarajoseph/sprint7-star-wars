/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from 'react'
export const ContextCreator = createContext<any | null>(null)

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [homePageIsActive, setHomePageIsActive] = useState<boolean>(false)
	const [starshipsPageIsActive, setStarshipsPageIsActive] = useState<boolean>(false)
  const [starships, setStarships] = useState([])
  return (
    <ContextCreator.Provider value={{ homePageIsActive, setHomePageIsActive, starshipsPageIsActive, setStarshipsPageIsActive, starships, setStarships }}>
      {children}
    </ContextCreator.Provider>
  )
}