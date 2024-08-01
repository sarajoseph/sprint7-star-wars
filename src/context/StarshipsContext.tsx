/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchStarships } from '../services/data'
import { StarshipBasicProps } from '../types/global'
import { useQuery } from '@tanstack/react-query'

type StarshipsContextType = {
  starships: StarshipBasicProps[] | null
	status: string
  error: string | null
}

const StarshipsContext = createContext<StarshipsContextType | undefined>(undefined)

export const StarshipsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [starships, setStarships] = useState<StarshipBasicProps[] | null>(null)

  const { status, error, data }: { status: string, error: string | null, data: any } = useQuery({
    queryKey: ['starships'],
    queryFn: fetchStarships
  })
  
  useEffect(() => {
    if (status === 'success' && data) {
      const newStarships = data.map((s: any) => ({
        id: getStarshipID(s.url),
        name: s.name,
        model: s.model
      }))
      setStarships(newStarships)
    }
  }, [status, data])

  const getStarshipID = (url: string) => {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 2]
  }

  return (
    <StarshipsContext.Provider value={{ starships, status, error }}>
      {children}
    </StarshipsContext.Provider>
  )
}

export const useStarshipsContext = () => {
  const context = useContext(StarshipsContext)
  if (context === undefined) {
    throw new Error('useStarshipsContext must be used within a StarshipsProvider')
  }
  return context
}
