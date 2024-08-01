/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { authFirebase } from '../firebase/client'

export const userRegister = (displayName: string, email: string, password: string, setRegisterStatus: React.Dispatch<React.SetStateAction<null | string>> ) => {
  setRegisterStatus('loading')
  createUserWithEmailAndPassword(authFirebase, email, password)
    .then(() => {
      if (authFirebase.currentUser !== null) {
        // Add username to the profile
        updateProfile(authFirebase.currentUser, { displayName })
          .then(() => {
            setRegisterStatus('success')
            // Login after success registration
            signInWithEmailAndPassword(authFirebase, email, password)
              .then(() => {
                // Success, redirect to home
                window.location.href = '/'
              })
              .catch((error) => {
                console.log(error)
                console.log(error.code)
                console.log(error.message)
              })
          }).catch((error) => {
            console.log(error)
            setRegisterStatus(error.message)
          })
      }
    })
    .catch((error) => {
      console.log(error)
      const errorMessage: string = (error.code === 'auth/email-already-in-use') ? 'There is already a user registered with this email' : error.message
      setRegisterStatus(errorMessage)
    })
}

export const userLogin = (e: any, setLoginStatus: React.Dispatch<React.SetStateAction<null | string>> ) => {
  setLoginStatus('loading')
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  signInWithEmailAndPassword(authFirebase, email, password)
    .then(() => {
      setLoginStatus('success')
      console.log('success')
    })
    .catch((error) => {
      console.log(error)
      console.log(error.code)
      console.log(error.message)
      const errorMessage = (() => {
        switch(error.code) {
          case 'auth/invalid-email':
            return 'Email is incorrect'
          case 'auth/invalid-credential':
            return 'Password is incorrect'
          default:
            return error.message
        }
      })()
      setLoginStatus(errorMessage)
    })
}

export const userLogout = () => {
  signOut(authFirebase).then(() => {
    console.log('Logout successful')
    window.location.href = '/'
  }).catch((error) => {
    console.log(error)
    console.log(error.code)
    console.log(error.message)
  })
}