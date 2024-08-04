/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Link } from 'react-router-dom'
import { authFirebase } from '../../firebase/client'
import { userLogout } from '../../logic/users'
import { UserIcon } from '../icons/UserIcon'
import { LogoutIcon } from '../icons/LogoutIcon'
import { useUser } from '../../hooks/useUser'

export const UserMenu = () => {
  const { username } = useUser()

  return (
    <div className="flex justify-end w-2/5 items-center gap-x-2">
    {authFirebase.currentUser !== null ?
      <>
      <UserIcon />
      <p>¡Hola <b className="capitalize ml">{username}</b>!</p>
      <button onClick={() => userLogout()} className="hover:opacity-80"><LogoutIcon /></button>
      </>
    :
      <>
      <Link to="/login" className="uppercase">Login</Link>
      <span className="px-4 text-zinc-700">{` // `}</span>
      <Link to="/register" className="uppercase">Sign up</Link>
      </>
    }
    </div>
  )
}
