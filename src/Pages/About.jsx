import React from 'react'
import CustomHero from '../Components/CustomHero'
import AboutSection from '../Components/AboutSection'
import Founder from '../Components/Founder'
import Footer from '../Components/Footer'
import Achievements from '../Components/Achievements'

const About = () => {
  return (
    <>
    <CustomHero link={"about"} text={"About"}/>
    <AboutSection heading={"Why to Choose us"}/>
    <Founder />
    <Achievements />
    <Footer />
    </>
  )
}

export default About