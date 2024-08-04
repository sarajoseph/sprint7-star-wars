import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useContext, useState } from 'react'
import { authFirebase } from '../firebase/client'
import { StarwarsContext } from '../context/StarwarsContext'

export const useSignUp = () => {
  const [ signUpStatus, setSignUpStatus ] = useState<string | null>(null)
  const { setUsername } = useContext(StarwarsContext)
  const signUp = async (displayName: string, email: string, password: string) => {
    console.log('signUp')
    setSignUpStatus('loading')
    createUserWithEmailAndPassword(authFirebase, email, password)
      .then(() => {
        if (authFirebase.currentUser !== null) {
          // Add username to the profile
          updateProfile(authFirebase.currentUser, { displayName })
            .then(() => {
              setSignUpStatus('success')
              authFirebase.currentUser?.reload().then(() => {
                setUsername(authFirebase.currentUser?.displayName)
              })
            }).catch((error) => {
              console.log(error)
              setSignUpStatus(error.message)
            })
        }
      })
      .catch((error) => {
        console.log(error)
        const errorMessage: string = (error.code === 'auth/email-already-in-use') ? 'There is already a user registered with this email' : error.message
        setSignUpStatus(errorMessage)
      })
    }

  return { signUpStatus, signUp }
}