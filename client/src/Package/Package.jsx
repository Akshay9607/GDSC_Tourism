import React from 'react';
import Days from './Days/Days';
import Gallary from './Gallary/Gallary';
import Booking from '../Components/Booking/booking';
// import Footer from '../Footer/Footer';
import Review from './Review';
import Navbar from '../Components/Navbar/Navbar';
import Footer from "../Components/Footer/footer"

const Package = () => {
	return (
		<>
			<Navbar />
			<Days />
			<Booking />   
			{/* <Review /> */}
		</>
	);
};

export default Package;
