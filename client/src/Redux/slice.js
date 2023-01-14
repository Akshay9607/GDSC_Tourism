import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tours : [] ,
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

// Action creators are generated for each case reducer function
export const {addTours} = toursSlice.actions ;

export const getTours = (state) => state.tours.tours ;

export default toursSlice.reducer