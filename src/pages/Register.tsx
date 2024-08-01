/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { EmailField, ErrorFieldMessage, PasswordField, UsernameField } from '../components/forms/FormFields'
import { userRegister } from '../logic/users'
import { useContext, useState } from 'react'
import { Loading } from '../components/icons/Loading'
import { ErrorIcon } from '../components/icons/ErrorIcon'
import { SuccessIcon } from '../components/icons/SuccessIcon'
import { FieldValues, useForm } from 'react-hook-form'
import { FormRegisterInputs } from '../types/global'
import { StarwarsContext } from '../context/StarwarsContext'
export const Register = () => {
  const [ registerStatus, setRegisterStatus ] = useState<null | string>(null)
  const { setUsername } = useContext(StarwarsContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterInputs>()

  const onSubmit = (data: FieldValues) => {
    userRegister(data.username, data.email, data.password, setRegisterStatus, setUsername)
  }

  return (
		<>
		<Header />
    <main className="flex flex-col items-center justify-center gap-y-2 max-w-xs mx-auto py-20">
      <h1 className="text-3xl font-bold mb-5">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-y-2">
        <UsernameField register={register} />
        {errors.username &&
          <ErrorFieldMessage message={errors.username.message} />
        }
        <EmailField register={register} />
        {errors.email &&
          <ErrorFieldMessage message={errors.email.message} />
        }
        <PasswordField register={register} />
        {errors.password &&
          <ErrorFieldMessage message={errors.password.message} />
        }
        {registerStatus !== null && registerStatus !== 'success' && registerStatus !== 'loading' &&
          <div role="alert" className="alert alert-error text-sm"> <ErrorIcon /> <span>{registerStatus}</span></div>
        }
        {registerStatus === 'success' &&
          <div role="alert" className="alert alert-success text-sm"> <SuccessIcon /> <span>Registration has been completed successfully</span></div>
        }
        <div className="flex flex-col gap-y-2 mt-5">
          <button className="btn btn-primary">{registerStatus === 'loading' ? <Loading size='loading-sm'/> : 'Register'}</button>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </form>
    </main>
		</>
  )
}
