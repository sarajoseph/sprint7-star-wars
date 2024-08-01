import { configureStore } from '@reduxjs/toolkit'
import homePageIsActiveReducer from './homePageIsActive/slice'
import starshipsPageIsActiveReducer from './starshipsPageIsActive/slice'
import starshipsReducer from './starships/slice'

export const store = configureStore({
  reducer: {
    homePageIsActive: homePageIsActiveReducer,
    starshipsPageIsActive: starshipsPageIsActiveReducer,
    starships: starshipsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch