import { createSlice } from '@reduxjs/toolkit'

export const homePageIsActiveSlice = createSlice({
  name: 'homePageIsActive',
  initialState: false,
  reducers: {
    setHomePageIsActive: (state, action) => {
      return action.payload
    }
  }
})

export default homePageIsActiveSlice.reducer
export const { setHomePageIsActive } = homePageIsActiveSlice.actions