import React from 'react'

import ListOfTours from "../Components/ListOfTours/ListOfTours"
import Filter from '../Components/Filters/Filter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/footer'
import Booking from '../Components/Booking/booking'

const AllTours = () => {

    

  return (
    <>
   <br />
    <Navbar /> <br />
    <Filter /> <br />
    <ListOfTours /> 
    <Footer/><br/>
    <Booking/>
    </>
  )
}

export default AllTours