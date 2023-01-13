import { Button } from '@mui/material';
import react from 'react'


const Contact = () => {
    return(
        <>
          <div className="contact" id='Contactus'>
            <div className="contactLeft"> 
            </div>
            <div className="contactRight">
                <h1>Contact <span className='redColor'>Us</span> </h1>
                <input type="text" name="" id="" className='inp' placeholder='Your name'/><br /><br />
                <input type="text" name="" id="" className='inp' placeholder='Your Email address'/><br /><br />
                <input type="text" name="" id="" className='inp' placeholder='Your Phone number'/><br /><br />
                <textarea name="" id="" cols="80" rows="10" style={{paddingTop:"20px"}}  className='inp' placeholder='Your Message'></textarea><br /><br />
                <Button className='contact-btn' 
                style={{backgroundColor:"#EE685F", fontWeight:"bold" , borderRadius:"10px" , color:"white", fontSize:"15px",padding:"10px" , display:"flex" , justifyContent:"flex-end"}}> 
                Send 
                </Button>
            </div>
    
          </div>
          
        </>
    )
}

export default Contact ;