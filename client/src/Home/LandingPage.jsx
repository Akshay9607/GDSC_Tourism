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
import { useSelector } from 'react-redux';
import axios from 'axios' ;

import Footer from '../Components/Footer/footer';

import { getDirection } from '../Redux/slice';




const LandingPage = () => {

  // const direction = useSelector(getDirection);
  // console.log(direction)

  // document.getElementsByTagName("html")[0].setAttribute("dir", direction);

  const dispatch = useDispatch() ;

//   const addToursToStore = async () => {
//     const response = await axios
//     .get("http://localhost:8050/api/tour/get/all")
//     .catch((err)=>{
//       console.log("Err",err) ;
//     })
  
//     dispatch(addTours(response.data));
// }

let addToursToStore = new Promise((resolve,reject)=>{
  let request = new XMLHttpRequest();
  const url = "http://localhost:8050/api/tour/get/all";
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      dispatch(addTours(response))
      resolve(response);
    } else {
      reject([this, response]);
    }
  });
  request.open("GET", url, true);
  request.send();
})

  useEffect(()=>{
      // addToursToStore();
      addToursToStore.then((res)=>{
        console.log("Entered into then")
        console.log("Data : ",res);
      })
  }) ;
 
	return (
		<>
			<Navbar />
			<Explore />
			<Packages />
			<ListOfTours />
			<SpecialOffer />
			<About />
			<Contact />
      <Footer/>
		</>
	);
};

export default LandingPage;
