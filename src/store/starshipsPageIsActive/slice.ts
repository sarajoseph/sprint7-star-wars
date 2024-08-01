import { createSlice } from '@reduxjs/toolkit'

export const starshipsPageIsActiveSlice = createSlice({
  name: 'starshipsPageIsActive',
  initialState: false,
  reducers: {
    setStarshipsPageIsActive: (state, action) => {
      return action.payload
    }
  }
})

export default starshipsPageIsActiveSlice.reducer
export const { setStarshipsPageIsActive } = starshipsPageIsActiveSlice.actions