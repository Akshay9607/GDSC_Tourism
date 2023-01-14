import Navbar from '../Components/Navbar/Navbar';
import Explore from '../Components/Explore/Explore';
import About from '../Components/About/About';
import Contact from '../Components/About/Contact';
import React from 'react';
// import { useSlotProps } from '@mui/base';
import Packages from '../Components/ListOfPackages/Packages';
import ListOfTours from '../Components/ListOfTours/ListOfTours';
import SpecialOffer from '../Components/SpecialOffer/SpecialOffer';

const LandingPage = (props) => {
	return (
		<>
			<Navbar dir={props.dir} setDir={props.setDir} />
			<Explore />
			<Packages />
			<ListOfTours />
			<SpecialOffer />
			<About />
			<Contact />
		</>
	);
};

export default LandingPage;
