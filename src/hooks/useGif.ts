/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import { fetchGifs } from '../services/gifs'
import { useEffect, useState } from 'react'
import { GifProps } from '../global/types'

export const useGif = () => {
  const { isSuccess, isError, error, data } = useQuery({
    queryKey: ['starwars/'],
    queryFn: () => fetchGifs()
  })
  if (isError) {
    console.log(error)
  }
  const [ requestGif, setRequestGif ] = useState<GifProps | null>(null)

  useEffect(() => {
    if (isSuccess) {
      setRequestGif(getRandomGif())
    }
  }, [isSuccess, data])

  const getRandomGif = () => {
    if (isSuccess) {
      const gifs = data.map((gif: any) => {
        return {
          id: gif.id,
          alt_text: gif.alt_text || gif.title || 'Star Wars GIF'
        }
      })
      const randomPosition = Math.floor(Math.random() * gifs.length)
      const randomGif = gifs[randomPosition]
      return randomGif
    }
    return null
  }

  const setRandomGif = () => {
    const randomGif = getRandomGif()
    setRequestGif(randomGif)
  }

  return { gifIsSuccess: isSuccess, setRandomGif, requestGif }

}