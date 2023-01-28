import React from 'react'

import ListOfTours from "../Components/ListOfTours/ListOfTours"
import Filter from '../Components/Filters/Filter'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/footer'
import Booking from '../Components/Booking/booking'
import FilteredTours from '../Components/Filters/FilteredTours'



const AllTours = () => {

    //  const direction = useSelector(getDirection);
    //  console.log(direction)

  // document.getElementsByTagName("html")[0].setAttribute("dir", direction);




  return (
    <>
   <br />
    <Navbar /> <br />
    <Filter  /> <br />
    {/* <ListOfTours />  */}
   <FilteredTours />
    <Footer/>
   
    </>
  )
}

export default AllTours