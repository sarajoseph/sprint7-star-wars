import { createSlice } from '@reduxjs/toolkit'

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState: false,
  reducers: {
    setUserSession: (state, action) => {
      return action.payload
    }
  }
})

export default userSessionSlice.reducer
export const { setUserSession } = userSessionSlice.actions