/* eslint-disable react/react-in-jsx-scope */
import { ContextCreator } from '../../context/Context'
import { useContext } from 'react'
import { NavMenuLink } from './NavMenuLink'
export const NavMenu = () => {
  const { homePageIsActive, starshipsPageIsActive } = useContext(ContextCreator)
  return (
    <div className="flex justify-center items-center border-t border-b border-zinc-800 uppercase">
      <NavMenuLink url='/' active={homePageIsActive}>Home</NavMenuLink>
      <NavMenuLink url='/starships' active={starshipsPageIsActive}>Starships</NavMenuLink>
    </div>
  )
}