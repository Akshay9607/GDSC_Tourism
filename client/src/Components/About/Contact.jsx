import { Button } from '@mui/material';
import react from 'react'

import { useTranslation } from 'react-i18next';


const Contact = () => {

  const {t,i18n} = useTranslation() ;

    return(
        <>
          <div className="contact" id='Contactus'>
            <div className="contactLeft"> 
            </div>
            <div className="contactRight">
                <h1>{t("contact")} <span className='redColor'>{t("us")}</span> </h1>
                <input type="text" name="" id="" className='inp' placeholder={t("cntinp1")}/><br /><br />
                <input type="text" name="" id="" className='inp' placeholder={t("cntinp2")}/><br /><br />
                <input type="text" name="" id="" className='inp' placeholder={t("cntinp3")}/><br /><br />
                <textarea name="" id="" cols="80" rows="10" style={{paddingTop:"20px"}}  className='inp' placeholder={t("cntinp4")}></textarea><br /><br />
                <Button className='contact-btn' 
                style={{backgroundColor:"#EE685F", fontWeight:"bold" , borderRadius:"10px" , color:"white", fontSize:"15px",padding:"10px" , display:"flex" , justifyContent:"flex-end"}}> 
                {t("send")} 
                </Button>
            </div>
    
          </div>
          
        </>
    )
}

export default Contact ;