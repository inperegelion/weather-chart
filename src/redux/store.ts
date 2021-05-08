import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import forecastSlice from "./forecastSlice"


const store = configureStore({
  reducer: {
    forecast: forecastSlice,
  }
})

export default store;