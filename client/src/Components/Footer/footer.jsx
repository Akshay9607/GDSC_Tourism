import React from 'react'

import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {FaTelegram , FaTwitterSquare} from 'react-icons/fa'
import {FiFacebook,FiInstagram,FiPhoneCall,FiYoutube} from 'react-icons/fi'
import {SiGmail,SiDiscord} from 'react-icons/si'
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <Box backgroundColor="#ccf5da" padding={2}>
       <Box textAlign="center" >
            <Typography padding={1} variant='h5'color="#EE685F"> <span>{t('holidayEscape')}</span> </Typography>
            <hr
               style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
              
                width : '65%',
                margin : 'auto'

               }}
               />
               <br/>
             <Typography padding={1} variant='h6'> <span>{t('support')}</span></Typography> 
             <Typography variant='h6'>
             <span style={{margin:"25px"}}>{t('aboutus')}</span>
            <span style={{margin:"25px"}}>{t('contactus')}</span>
            </Typography>
            <Typography variant='h6' padding={1}> 
            <span style={{margin:"25px"}}>{t('legalstuff')}</span>
            <span style={{margin:"25px"}}>{t('privacypolicy')}</span>
            <span style={{margin:"25px"}}>{t('security')}</span>
               </Typography><br />
               <hr
               style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
              
                width : '95%',
                margin : 'auto'

               }}
               />
               <br/>
               </Box>
               <Box backgroundColor="#ccf5da">
               <Typography>
               <Typography padding={1}> 
               <span> {t('copyright')} </span>
               <span style={{float:'right'}}><span  style={{align:'center'}}>{t('connectus')} </span></span>
               </Typography>
                {/* <Typography padding={1} textAlign='Right'> <span>Connect Us</span></Typography> */}
                </Typography>
                <span style={{float:'right'}} margin='2px'>
               <span >   <FiFacebook size={25} color="#EE685F"/>   </span>
                    <span >   <FaTelegram size={25} color="#EE685F"/>   </span>
                    {/* <span >   <FiInstagram size={25} color="#EE685F" />   </span> */}
                    <span >   <FaTwitterSquare size={25} color="#EE685F"/>   </span>
                    <span >   <FiPhoneCall size={25} color="#EE685F"/>   </span>
                    <span >   <SiGmail size={25} color="#EE685F"/>   </span>
                    {/* <span >   <FiYoutube size={25} color="#EE685F"/>   </span> */}
                    {/* <span >   <SiDiscord size={25} color="#EE685F"/>   </span> */}
                    </span>
                    <br/>
               </Box>
       </Box> 
       
    </>
  )
}

export default Footer ;