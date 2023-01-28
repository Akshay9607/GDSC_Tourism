import React from 'react';
// import Navigation from '../Navbar/Navigation';
// import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import TourCard from '../ListOfTours/TourCard';
import { getFavourites, getTours } from '../../Redux/slice';
// import ListTours from '../ListOfTours/ListTours';
// import useFetch from "react-fetch-hook"
// import TourCard from '../ListOfTour/TourCard/TourCard';
// import { getTours } from '../../Redux/slice';


const Favourite = () => { 
// 	var favouriteArray = JSON.parse(localStorage.getItem('favourite') || '[]'); 
// 	// console.log(favouriteArray)
//     // const {data} = useFetch("http://localhost:8000/tour/api/tours");
//     const data = useSelector(getTours);
//     // console.log(data);
//     let favouriteTourRender = []
//     if (data) {
    
//          favouriteTourRender = data.filter(tour => {
//             for (let i = 0; i < favouriteArray.length; i++) {
//                 // console.log(favouriteArray[i], tour._id)
//                 if (favouriteArray[i] == tour._id) {
//                     return true
//                 }
//             }
//         })
//         console.log(favouriteTourRender)
//         console.log(favouriteArray)
//     }


const favourites = useSelector(getFavourites);
let tours = useSelector(getTours);

   
let favouriteArray = tours.filter((id) => favourites.includes(id._id) )
// console.log("Hey tours : " ,favouriteArray);
// console.log(favourites)

	return (
		<>
        <Navbar /> <br /><br />
       { favouriteArray.map(tour => <TourCard key={tour._id} tour={ tour} />)} 
		</>
	);
};

export default Favourite;
