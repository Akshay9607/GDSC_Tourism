import React from 'react'
import { useSelector } from 'react-redux'
import { getFiltered } from '../../Redux/slice'
import Navbar from '../Navbar/Navbar';
import TourCard from '../ListOfTours/TourCard';

const FilteredTours = () => {

    const filteredTours = useSelector(getFiltered);
  return (
    <>
      {filteredTours.map(tour => <TourCard key={tour._id} tour={ tour} />)}
			<br />
			<br />
    </>
  )
}

export default FilteredTours