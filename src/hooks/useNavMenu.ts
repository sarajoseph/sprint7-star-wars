import { useEffect } from 'react'
import { setHomePageIsActive } from '../store/homePageIsActive/slice'
import { setStarshipsPageIsActive } from '../store/starshipsPageIsActive/slice'
import { useAppDispatch } from './store'

export const useNavMenu = (homePageValue: boolean, starshipPageValue: boolean) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setStarshipsPageIsActive(starshipPageValue))
    dispatch(setHomePageIsActive(homePageValue))
  })
}