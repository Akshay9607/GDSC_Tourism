import React from 'react'
import { Card, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import "../index.css"
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';



const Filter = () => {

    const [name , setName] = useState("") ;
    const {t,i18n} = useTranslation();

    // var filterOption = "" ;
var getQuery = (key) => {
    name = key.target.value
    console.log(name)
}

return(
    <>
        {/* <form  style={{margin:"1rem 1rem 4rem 1rem", boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", padding:"1rem", borderRadius:"1rem"}}> */}
            <div style={{ marginBottom:"2rem", display:"flex" , border: "1px solid black", width:"100%", height:"2.9rem",borderRadius:"2rem " }}>
                <input type="search" style={{padding:".95rem .5rem .5rem .5rem", border:"none", borderRadius:"2rem 0 0 2rem", width:"95%" }}  id="query" name="q"
                        placeholder= {t("sfdh")}
                        aria-label="Search through site content"
                        onChange={e=>setName(e.target.value)}
                        value = {name}
                         />
                <span style={{padding:".5rem" , borderRadius:"0 2rem 2rem 0", border:"none", }}>
                 <Link to={`/tours/${name}`} ><FaSearch type='submit' />  </Link>
                </span>
            </div>
    </>
)
}

export default Filter ;