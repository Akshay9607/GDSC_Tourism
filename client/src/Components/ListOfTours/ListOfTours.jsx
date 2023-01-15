import React from 'react';
import TourCard from './TourCard';
import { useSelector } from 'react-redux';
import { getTours } from '../../Redux/slice';

function ListOfTours() {
	const tours = useSelector(getTours)
	return (
		<>
			{tours.slice(0,5).map(tour => <TourCard key={tour._id} tour={ tour} />)}
			<br />
			<br />
		</>
	);
}

export default ListOfTours;
