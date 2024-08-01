/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { EmailField, PasswordField } from '../components/forms/FormFields'
import { useState } from 'react'
import { Loading } from '../components/icons/Loading'
import { ErrorIcon } from '../components/icons/ErrorIcon'
import { userLogin } from '../logic/users'

export const Login = () => {
  const [ loginStatus, setLoginStatus ] = useState<null | string>(null)

  return (
    <>
    <Header />
    <main className="flex flex-col items-center justify-center gap-y-2 max-w-xs mx-auto py-20">
      <h1 className="text-3xl font-bold mb-5">Login</h1>
      <form onSubmit={(e) => userLogin(e, setLoginStatus)} className="flex flex-col w-full gap-y-2">
        <EmailField />
        <PasswordField />
        {loginStatus !== null && loginStatus !== 'success' && loginStatus !== 'loading' &&
          <div role="alert" className="alert alert-error text-sm"> <ErrorIcon /> <span>{loginStatus}</span></div>
        }
        <div className="flex flex-col gap-y-2 mt-5">
          <button className="btn btn-primary">{loginStatus === 'loading' ? <Loading size='loading-sm'/> : 'Login'}</button>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </form>
    </main>
    </>
  )
}
