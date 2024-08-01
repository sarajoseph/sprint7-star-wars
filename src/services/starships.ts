import axios from 'axios'
import { StarshipDataProps, StarshipDataTotalProps } from '../types/global'
const API_URL = 'https://swapi.dev/api/'
const API_URL_STARSHIPS = API_URL+'starships/'

export const fetchStarships = async ({pageParam = API_URL_STARSHIPS}: {pageParam?: string}) => {
  try {
    const fetchResponse = await axios.get(pageParam)
    const response: {
      starships: StarshipDataTotalProps[] | null,
      nextUrl: string | null
    } = {
      starships: fetchResponse.data.results,
      nextUrl: fetchResponse.data.next
    }
    return response

  } catch (error) {
    console.error('Error fetching the starships:', error)
    const error_message = axios.isAxiosError(error)
      ? 'Error '+error.response?.status || 500 +': '+ error.message || 'An unexpected error occurred'
      : 'Error 500: An unexpected error occurred'

    throw error_message
  }
}

export const fetchStarship = async (id: string | undefined) => {
  try {
    const response = await axios.get(API_URL_STARSHIPS+id)
    const data: StarshipDataProps = {
      id,
      ...response.data
    }
    return data

  } catch (error) {
    console.error('Error fetching the starships:', error)
    const error_message = axios.isAxiosError(error) ?
      'Error '+error.response?.status || 500+': '+ error.code === 'ERR_BAD_REQUEST' ? 'The starship was not found, try again' : error.message
      :
      'Error 500: An unexpected error occurred'

    throw error_message
  }
}