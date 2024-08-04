/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom'
import { getLoginWithPreviousUrl, getURLAfterLogin } from '../../logic/main'
import { useContext } from 'react'
import { StarwarsContext } from '../../context/StarwarsContext'

// User without login can not access to starship pages
export const PrivateRoutes = () => {
  const { username } = useContext(StarwarsContext)
  const navigateTo = getLoginWithPreviousUrl()
  if (username === null) {
    return <Navigate to={navigateTo} replace />
  }
  return <Outlet />
}

// User with login can not access to login and register pages
export const PublicRoutes = () => {
  const { username } = useContext(StarwarsContext)
  const urlAfterLogin: string = getURLAfterLogin() ?? '/'
  if (username !== null) {
    return <Navigate to={urlAfterLogin} replace />
  }
  return <Outlet />
}