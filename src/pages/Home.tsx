/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { useNavMenu } from '../hooks/useNavMenu'
import { useGif } from '../hooks/useGif'
import { useEffect, useState } from 'react'
import { gifProps } from '../global/types'
import { useUser } from '../hooks/useUser'

export const Home = () => {
  useNavMenu(true, false)
  const { gifIsSuccess, setRandomGif, requestGif } = useGif()
  const [ gif, setGif ] = useState<gifProps | null>(requestGif)
  const { username } = useUser()

  useEffect(() => {
    setGif(requestGif)
  }, [requestGif])

  const HomeDescription = () => {
    if (!username) {
      return (
        <>
        <img src="https://media.giphy.com/media/cw57Zj5jydM2EU50Ju/giphy.gif" alt="Star Wars Gif" />
        <p>
          To view the content of the entire website you must log in or register.
          {gifIsSuccess && gif &&
          <span>, but down here you can generate a new gif!</span>
          }
        </p>
        </>
      )

    } else {
      return (
        <>
        <p>So glad you're here!</p>
        <img src="https://media.giphy.com/media/AcfTF7tyikWyroP0x7/giphy.gif" alt="Star Wars Gif" />
        <p>
          Now you can see the incredible Star Wars starships with all their details
          {gifIsSuccess && gif &&
          <span>, or generate a new gif</span>
          }
        </p>
        </>
      )
    }
  }

  return (
		<>
		<Header />
    <main className="flex flex-col text-center gap-y-10 max-w-3xl mx-auto py-20 text-zinc-500">
      <h1 className="text-5xl font-bold">Welcome{ username && <span className="capitalize"> {username}</span> }!</h1>
      <HomeDescription />
      <div className='flex flex-col gap-4 items-center justify-center md:flex-row'>
        <Link to="/starships" className="btn btn-neutral mx-auto w-fit">
          Go to Starships
        </Link>
        {gifIsSuccess && gif &&
        <button onClick={setRandomGif} className="btn btn-neutral mx-auto w-fit">
          Get random gif
        </button>
        }
      </div>
      {gifIsSuccess && gif &&
      <img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`} alt={gif.alt_text} />
      }
    </main>
		</>
  )
}
