import Navbar from "../Components/Navbar/Navbar";
import Explore from "../Components/Explore/Explore";
import About from "../Components/About/About";
import Contact from "../Components/About/Contact";
import React from 'react'

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <Explore />
        <About />
        <Contact />
    </>
  )
}

export default LandingPage