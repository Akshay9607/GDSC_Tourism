import Day from './Day';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTours } from '../../Redux/slice';
import Booking from '../../Components/Booking/booking';

const Days = () => {
	const tours = useSelector(getTours);
	const { id } = useParams();

	const tour = tours.find((tour) => tour._id === id);
	console.log(tour);

	return (
		<>
			<Day tour={tour} />
			<Booking tour={tour}/>
		</>
	);
};

export default Days;
