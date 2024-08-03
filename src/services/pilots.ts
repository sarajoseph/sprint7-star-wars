import axios from 'axios'
import { getIDFromURL } from '../logic/main'

export const fetchPilots = async (url: string) => {
  try {
    const fetchResponse = await axios.get(url)
    const response: { id: string, name: string } = {
      id: getIDFromURL(url),
      name: fetchResponse.data.name
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships pilots:', error)
    const error_message = axios.isAxiosError(error)
      ? 'Error '+error.response?.status || 500 +': '+ error.message || 'An unexpected error occurred'
      : 'Error 500: An unexpected error occurred'

    throw error_message
  }
}