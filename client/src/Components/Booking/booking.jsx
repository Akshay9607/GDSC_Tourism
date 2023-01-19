import React from 'react'
import { Box } from '@mui/system'
import "../index.css"
import { Typography } from '@mui/material'
import {FaTelegram , FaTwitterSquare} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import {SiGmail,SiDiscord} from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';


const Booking = ({tour}) => {
    const { t, i18n } = useTranslation();
    console.log(tour)

    // var tourBooking = "Tour Title : " + tour.englishData.title + " " + "tour City : " + tour.englishData.city + "\n" +  tour.englishData.duration
    var tourBooking = `Tour Title : ${tour.englishData.title} 
    Tour City : ${tour.englishData.city} 
    Tour Duration : ${tour.englishData.duration}`


  return (
    <>
        <Box  className="Booking">
           <Typography variant='h4' padding={2} align='center'> {t('booknow')} </Typography> 
           <hr
               style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
              
                width : '70%',
                margin : 'auto'

               }}  
               />
                <br />
           <Box  display='flex' className="bookIcons" justifyContent='space-around'>
      
              
           <a target='blank' href={`${tour.englishData.booking.facebookUrl}`}>   <span >   <FiFacebook size={50} color="#3b5998"/>  </span>  </a>
               <a target='blank' href={`${tour.englishData.booking.discordUrl}`}>  <span >   <FaTelegram size={50} color="#0088cc " /></span>  </a>  
               {/* <a  target='blank' href={`https://wa.me/${tour.englishData.booking.phoneNumber}?text=${tourBooking}`}>  <span >  <BsWhatsapp size={50} color="#4FCE5D " />   </span> </a>   */}
               <a  target='blank' href={`https://wa.me/${+919657248532}?text=${tourBooking}`}>  <span >  <BsWhatsapp size={50} color="#4FCE5D " />   </span> </a>  
               
               <a target='blank' href={`${tour.englishData.booking.twitterUrl}`}>    <span >  <FaTwitterSquare size={50} color="#00acee"/>   </span> </a>
               <a target='blank' href="" title={`${tour.englishData.booking.phoneNumber}`}>    <span >   <FiPhoneCall size={50} color="#7f7f7f "/>  </span> </a> 
               <a target='blank'  href={`mailto:${tour.englishData.booking.mailId}?subject=${tour.englishData.title}&body=${tour.englishData.description.slice(20)} , i would like to book this.`} >   <span >   <SiGmail size={50} color="#EA4335"/>   </span> </a>
               <a target='blank' href={`${tour.englishData.booking.instagramUrl}`}>    <span>  <FiInstagram size={50} color="#E1306C" />    </span> </a> 
               <a target='blank' href={`${tour.englishData.booking.discordUrl}`}>    <span>   <SiDiscord size={50} color="#36393e"/>   </span> </a>
               
                   
               </Box>
               <br/>
        </Box>
        <br/>
    </>
  )
}

export default Booking