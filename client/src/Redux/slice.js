import { createSlice } from '@reduxjs/toolkit'

import { useTranslation } from 'react-i18next';
import { changeLanguage } from "i18next"; 



const initialState = {
  tours : [] ,
}


const filteredState = {
  filteredTours : [] ,
}

// const initialFavouriteState = {
//   favourite : "abcde",
// }

const initialLanguage = {
    isEnglish : true ,
    direction : "ltr"
}

const initialFavs = {
  favourites : [],
}

export const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    addTours: (state , {payload} ) => {
      // console.log(state.tou)
      state.tours = payload ;
    },
  },
})

export const filteredSlice = createSlice({
  name : 'filteredTours',
  initialState:filteredState,
  reducers : {
    addToFiltered : (state , {payload}) => {
      state.filteredTours = payload ;
    } ,
  },
})

// export const favouriteSlice = createSlice({
//   name: 'favourite',
//   initialState : initialFavouriteState,
//   reducers: {
//     addToFavourite: (state , {payload} ) => {
//       console.log(payload, state.favourite)
//     },
//   },
// })

// arr = [] ; => arr = ['1234536'] ; arr = '123456'

export const favoriteSlice = createSlice({
  name : "favourites",
  initialState: initialFavs ,
  reducers : {
    addToFavourite : (state , {payload}) => {
      state.favourites = state.favourites || [] ;
      var index = state.favourites.indexOf(payload) ;
      console.log(index);
      if(index !== -1){
        console.log("favourites array : " ,state.favourites);
        state.favourites.splice(index,1);
      }else{
        console.log("favourites array : " ,state.favourites);
        state.favourites.push(payload);
      }
      //  console.log(state.favourites); 
    },
  }
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

export const {addToFavourite} = favoriteSlice.actions ;

export const {addToFiltered} = filteredSlice.actions ;


export const {toggleLanguage} = langSlice.actions;

export const getTours = (state) => state.tours.tours ;
export const getisLangEng = (state) => state.isEnglish.isEnglish ;
export const getDirection = (state) => state.isEnglish.direction ;
export const getFavourites = (state) => state.favourites.favourites;
export const getFiltered = (state) => state.filteredTours.filteredTours;

export const toursReducer = toursSlice.reducer ;
export const langReducer = langSlice.reducer ;
export const favouriteReducer = favoriteSlice.reducer;
export const filteredReducer = filteredSlice.reducer;
// export const favouriteReducer = favouriteSlice.reducer;