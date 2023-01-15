import React from 'react'
import { Box } from '@mui/system'
import "../index.css"
import { Typography } from '@mui/material'
import {FaTelegram , FaTwitterSquare} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import {SiGmail,SiDiscord} from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';

const Booking = () => {
    const { t, i18n } = useTranslation();
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
      
              
           <a href="">   <span >   <FiFacebook size={50} color="#3b5998"/>  </span>  </a>
               <a href="">  <span >   <FaTelegram size={50} color="#0088cc " /></span>  </a>  
               <a href={`https://wa.me/+919657248532?text=Package Name : Mind Blowing manali , type book to proceed further Booking confirmation : `} target='blank'>  <span >  <BsWhatsapp size={50} color="#4FCE5D " />   </span> </a>
               <a href="https://twitter.com/i/flow/login">    <span >  <FaTwitterSquare size={50} color="#00acee"/>   </span> </a>
               <a href="" title='+919607881400'>    <span >   <FiPhoneCall size={50} color="#7f7f7f "/>  </span> </a> 
               <a href="mailto:akshay.jadhav21@vit.edu?subject=booking package from holidayEscape&body=I liked the package , name : Mind Blowing Manali , i would like to book this." >   <span >   <SiGmail size={50} color="#EA4335"/>   </span> </a>
               <a href="">    <span >  <FiInstagram size={50} color="#E1306C" />    </span> </a> 
               <a href="">    <span >   <SiDiscord size={50} color="#36393e"/>   </span> </a>
                   
                   
               </Box>
               <br/>
        </Box>
        <br/>
    </>
  )
}

export default Booking