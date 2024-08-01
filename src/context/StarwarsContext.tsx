/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react'

export const StarwarsContext = createContext<any | null>(null)

export const StarwarsProvider = ({children}: any) => {
  const [username, setUsername] = useState<string | null>(null)

  return (
    <StarwarsContext.Provider value={{ username, setUsername }}>
      {children}
    </StarwarsContext.Provider>
  )
}