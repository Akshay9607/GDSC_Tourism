import Navbar from '../Components/Navbar/Navbar';
import Explore from '../Components/Explore/Explore';
import About from '../Components/About/About';
import Contact from '../Components/About/Contact';
import React from 'react';
// import { useSlotProps } from '@mui/base';
import Packages from '../Components/ListOfPackages/Packages';
import ListOfTours from '../Components/ListOfTours/ListOfTours';
import SpecialOffer from '../Components/SpecialOffer/SpecialOffer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTours } from '../Redux/slice';

import axios from 'axios' ;



const LandingPage = (props) => {

  const dispatch = useDispatch() ;

  const addToursToStore = async () => {
    const response = await axios
    .get("http://localhost:8050/api/tour/get/all")
    .catch((err)=>{
      console.log("Err",err) ;
    })
    dispatch(addTours(response.data));
}

  useEffect(()=>{
      addToursToStore();
  }) ;
 

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
