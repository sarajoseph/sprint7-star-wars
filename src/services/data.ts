import axios from 'axios'
const API_URL = 'https://swapi.dev/api/'

export const fetchStarships = async () => {
  try {
    const response = await axios.get(API_URL+'starships/')
    return response.data.results
  } catch (error) {
    console.error('Error fetching the starships:', error)
    // Type guard to check if error is an AxiosError
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
      const err_msg: string = error.message || 'An unexpected error occurred'
      const err_status: string | number = error.response?.status || 500 // Default 500 if status is undefined
      throw 'Error '+err_status+': '+err_msg
    }
  }
}

export const fetchStarship = async (id: string | undefined) => {
  try {
    const response = await axios.get(API_URL+'starships/'+id)
    return response.data
  } catch (error) {
    console.error('Error fetching the starships:', error)
    // Type guard to check if error is an AxiosError
    if (axios.isAxiosError(error)) {
      const err_msg: string = error.code === 'ERR_BAD_REQUEST' ? 'The starship was not found, try again' : error.message
      const err_status: string | number = error.response?.status || 500 // Default 500 if status is undefined
      throw 'Error '+err_status+': '+err_msg 
    } else {
      // Handle unexpected errors
      throw 'Error 500: An unexpected error occurred'
    }
  }
}