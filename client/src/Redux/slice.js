import { createSlice } from '@reduxjs/toolkit'

import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next"; 



const initialState = {
  tours : [] ,
}

const initialLanguage = {
    isEnglish : true ,
    direction : "ltr"
}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    addTours: (state , {payload} ) => {
      state.tours = payload ;
    },
  },
})

export const langSlice = createSlice({
    name:"isEnglish" ,
    initialState : initialLanguage,
    reducers : {
        toggleLanguage : (state) => {
            state.isEnglish = !state.isEnglish
            if(state.isEnglish){
                state.direction="ltr" ;
            }else{
                state.direction="rtl" ;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTours} = toursSlice.actions ;

export const {toggleLanguage} = langSlice.actions;

export const getTours = (state) => state.tours.tours ;

export const getisLangEng = (state) => state.isEnglish.isEnglish ;
export const getDirection = (state) => state.isEnglish.direction ;

export const toursReducer = toursSlice.reducer ;
export const langReducer = langSlice.reducer ;