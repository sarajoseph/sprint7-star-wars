import axios from 'axios'
const API_URL = 'https://swapi.dev/api/'

export const fetchStarships = async () => {
  try {
    const response = await axios.get(API_URL+'starships/')
    return response.data.results
  } catch (error) {
    console.error('Error fetching the starships:', error)
    throw error
  }
}