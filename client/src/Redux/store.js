import { configureStore } from '@reduxjs/toolkit'

import {toursReducer} from "./slice"
import {langReducer} from "./slice"


export const store = configureStore({
  reducer: {
    tours : toursReducer ,
    isEnglish : langReducer
  },
}) ;
