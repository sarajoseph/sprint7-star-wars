import { onAuthStateChanged } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { StarwarsContext } from '../context/StarwarsContext'
import { authFirebase } from '../firebase/client'

export const useUser = () => {
  const { username, setUsername } = useContext(StarwarsContext)
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        // User logueado
        setUsername(user.displayName)
      } else {
        // User no logueado
        setUsername(null)
      }
    })
  }, [])

  return { username }
}