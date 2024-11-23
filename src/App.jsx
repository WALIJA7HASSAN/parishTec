import React, { useState } from 'react'
import Nav from './Components/Nav.jsx'
import Hero from './Components/Hero.jsx'
import ProductSolutions from './Components/ProductSolutions.jsx';
import JusticeCard from './Components/JusticeCard.jsx';
import CommunityCard from './Components/CommunityCard.jsx';
import ResidentialPlatform from './Components/ResidentialPlatform.jsx';
import Faqs from './Components/Faqs.jsx';
import CallToAction from './Components/CallToAction.jsx';
import Footer from './Components/Footer.jsx';
const App = () => {
  const [accessModal, setAccessModal] = useState(false); 
  const handleClose = () => {
    setAccessModal(false); 
  };
  const handleOpen = () => {
    setAccessModal(true); 
  };
  return (
    <>
    <Nav/>
    <Hero isOpen={accessModal} onClose={handleClose} onOpen={handleOpen}/>
    <ProductSolutions/>
    <JusticeCard/>
    <CommunityCard/>
    <ResidentialPlatform/>
    <Faqs/>
    <CallToAction isOpen={accessModal} onClose={handleClose} onOpen={handleOpen}/>
    <Footer/>
    </>
  )
}

// data-aos-anchor-placement="top-bottom"

export default App