import Day from './Day';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTours } from '../../Redux/slice';

const Days = () => {
	const tours = useSelector(getTours);
	const { id } = useParams();

	const tour = tours.find((tour) => tour._id === id);
	console.log(tour);

	return (
		<>
			<Day tour={tour} />
		</>
	);
};

export default Days;
