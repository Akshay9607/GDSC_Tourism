import React from "react";

import { Card , Typography } from "@mui/material";
import {Box} from '@mui/system'
import '../index.css'
import 'react-vertical-timeline-component/style.min.css';
import "../index.css"

const Gallary = () => {
    return(
        <>  
            <Typography variant="h2" component="h2" align='center' padding="2rem 0"> A Day
            <span style={{color:"#EE685F"}}> at Deharadun </span> 
            </Typography>
            <div className="image-mosaic">
                <div
                    className="card card-tall card-wide"
                    style={{ backgroundImage: "url(https://picsum.photos/id/610/800/530)" }}
                ></div>
                <div
                    className="card card-tall"
                    style={{ backgroundImage: "url(https://picsum.photos/id/10/800/530)" }}

                ></div>
                <div
                    className="card"
                    style={{ backgroundImage: "url(https://picsum.photos/id/61/800/530)" }}

                ></div>
                <div
                    className="card"
                    style={{ backgroundImage: "url(https://picsum.photos/id/12/800/530)" }}

                ></div>
                <div
                    className="card-wide"
                    style={{ backgroundImage: "url(https://picsum.photos/id/69/800/530)" }}

                ></div>
                
            </div>
        </>
    )
}

export default Gallary