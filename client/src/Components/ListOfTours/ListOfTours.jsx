import React from 'react';
import TourCard from './TourCard';
import { useSelector } from 'react-redux';
import { getFiltered, getTours } from '../../Redux/slice';

function ListOfTours( props ) {
	let tours = useSelector(getTours);
    // if(props && props.isFiltered){
	// 	tours = useSelector(getFiltered);
	// }
	console.log("main:",tours);
	return (
		<>
			{tours.slice(0,5).map(tour => <TourCard key={tour._id} tour={ tour} />)}
			<br />
			<br />
		</>
	);
}

export default ListOfTours;
