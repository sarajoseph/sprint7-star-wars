import axios from 'axios'
import { getIDFromURL } from '../logic/main'

export const fetchFilms = async (url: string) => {
  try {
    const fetchResponse = await axios.get(url)
    const response: { id: string, title: string, episode_id: number } = {
      id: getIDFromURL(url),
      title: fetchResponse.data.title,
      episode_id: fetchResponse.data.episode_id
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships films:', error)
    const error_message = axios.isAxiosError(error)
      ? 'Error '+error.response?.status || 500 +': '+ error.message || 'An unexpected error occurred'
      : 'Error 500: An unexpected error occurred'

    throw error_message
  }
}