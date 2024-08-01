import { useLocation } from 'react-router-dom'

export const checkURLExists = async (url: string, setURL: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      setURL(true)
    } else {
      setURL(false)
    }
  } catch (error) {
    console.log(error)
    setURL(false)
  }
}

export const getLoginWithPreviousUrl = () => {
  const location = useLocation()
  const prevUrl = location.pathname
  return '/login?prev='+prevUrl
}

export const getURLAfterLogin = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  return params.get('prev')
}