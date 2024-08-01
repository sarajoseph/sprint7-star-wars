/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react'
import { StarshipDataProps } from '../types/global'
import { SectionTitle } from './SectionTitle'
import { checkURLExists } from '../logic/global'

export const StarshipDetails = ({starshipData}: {starshipData: StarshipDataProps}) => {
  const DEFAULT_IMG_URL = '/public/images/default-no-image.jpg'
  const IMG_URL = 'https://starwars-visualguide.com/assets/img/starships/'+starshipData.id+'.jpg'
  const [ imageExists, setImageExists ] = useState(false)

  useEffect(() => {
    checkURLExists(IMG_URL, setImageExists)
  }, [imageExists])

  return (
    <>
    <SectionTitle>Starship</SectionTitle>
    <div className="flex flex-col md:flex-row">
      {
        imageExists ?
          <img src={IMG_URL} alt="Starship" className="w-full md:w-2/5 object-cover md:rounded-l-xl" />
        :
          <img src={DEFAULT_IMG_URL} alt="Starship" className="w-full md:w-2/5 object-cover md:rounded-l-xl" />
      }
      <div className="flex flex-col md:w-3/5 p-4 bg-zinc-800 md:rounded-r-xl md:border-l-4 md:border-l-red-500 gap-y-4">
        <h3 className="font-bold text-xl	uppercase">{starshipData.name}</h3>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
          <div className="flex flex-col md:w-1/2 gap-y-4">
            <p>Model: {starshipData.model}</p>
            <p>Cost in credits: {starshipData.cost_in_credits}</p>
            <p>Atmosphering speed: {starshipData.max_atmosphering_speed}</p>
          </div>
          <div className="flex flex-col md:w-1/2 gap-y-4">
            <p>Manufacturer: {starshipData.manufacturer}</p>
            <p>Length: {starshipData.length}</p>
            <p>Crew: {starshipData.crew}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
