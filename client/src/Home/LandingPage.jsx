import Navbar from "../Components/Navbar/Navbar";
import Explore from "../Components/Explore/Explore";
import About from "../Components/About/About";
import Contact from "../Components/About/Contact";
import React from 'react'
import { useSlotProps } from "@mui/base";

const LandingPage = (props) => {
  return (
    <>
        <Navbar dir={props.dir} setDir={props.setDir} />
        <Explore />
        <About />
        <Contact />
    </>
  )
}

export default LandingPage