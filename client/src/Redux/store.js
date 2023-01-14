import { configureStore } from '@reduxjs/toolkit'

import toursReducer from "./slice"

export const store = configureStore({
  reducer: {
    tours : toursReducer ,
  },
}) ;
