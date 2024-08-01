/* eslint-disable react/react-in-jsx-scope */
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks/store'
import { getLoginWithPreviousUrl, getURLAfterLogin } from '../../logic/global'

// User without login can not access to starship pages
export const PrivateRoutes = () => {
  const userSession = useAppSelector((state) => state.userSession)
  const navigateTo = getLoginWithPreviousUrl()
  if (!userSession) {
    return <Navigate to={navigateTo} replace />
  }
  return <Outlet />
}

// User with login can not access to login and register pages
export const PublicRoutes = () => {
  const userSession = useAppSelector((state) => state.userSession)
  const urlAfterLogin: string = getURLAfterLogin() || '/'
  if (userSession) {
    return <Navigate to={urlAfterLogin} replace />
  }
  return <Outlet />
}