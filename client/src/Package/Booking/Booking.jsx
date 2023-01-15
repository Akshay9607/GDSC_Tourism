import React from 'react'
import { Box } from '@mui/system'
import "../index.css"
import { Typography } from '@mui/material'
import {FaTelegram , FaTwitterSquare} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import {SiGmail,SiDiscord} from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'

const Booking = () => {
  return (
    <>
        <Box className="Booking">
           <Typography variant='h4' align='center'> Book Now </Typography> <br />
           <hr />   <br /> <br />
           <Box  className="bookIcons">
      
           <a href="">   <span >   <FiFacebook size={50} color="#EE685F"/>  </span>  </a>
               <a href="">  <span >   <FaTelegram size={50} color="#EE685F" /></span>  </a>  
               <a href={`https://wa.me/+917219050989?text=Package Name : Mind Blowing manali , type book to proceed further Booking confirmation : `} target='blank'>  <span >  <BsWhatsapp size={50} color="#EE685F"/>   </span> </a>
               <a href="https://twitter.com/i/flow/login">    <span >  <FaTwitterSquare size={50} color="#EE685F"/>   </span> </a>
               <a href="" title='+919607881400'>    <span >   <FiPhoneCall size={50} color="#EE685F"/>  </span> </a> 
               <a href="mailto:akshay.jadhav21@vit.edu?subject=booking package from holidayEscape&body=I liked the package , name : Mind Blowing Manali , i would like to book this." >   <span >   <SiGmail size={50} color="#EE685F"/>   </span> </a>
               <a href="">    <span >  <FiInstagram size={50} color="#EE685F" />    </span> </a> 
               <a href="">    <span >   <SiDiscord size={50} color="#EE685F"/>   </span> </a>
                   
               </Box>
        </Box>
    </>
  )
}

export default Booking