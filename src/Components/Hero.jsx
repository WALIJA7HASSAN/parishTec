import React from 'react'
import HeroImg from '../assets/Mobile.webp'
import { GoArrowRight } from "react-icons/go";
import 'aos/dist/aos.css';
import EarlyAcessModal from './EarlyAcessModal';

const Hero = ({isOpen,onClose,onOpen}) => {
  
  return (
    <div className="hero">
      <div className='hero-container section '>
      <div>
      <h3 data-aos="fade-up"
          data-aos-duration="1500" className='hero-title'>Unlocking Financial Freedom</h3>
      <div className='hero-img'>
        <img src={HeroImg} alt="hero-img" />
      </div>
      <div className='hero-content' id='mission'>
        <h4>MISSION</h4>
        <p data-aos="fade-up"
          data-aos-duration="1500">
        Parish Tec fosters economic mobility for justice-impacted communities by empowering returning citizens, the family members of incarcerated individuals, and transitional housing providers with innovative and inclusive financial technology.
        </p>
        <button data-aos="fade-up"
          data-aos-duration="1500" className="btn learn-btn" onClick={onOpen}>Learn More <GoArrowRight /></button>
        <EarlyAcessModal isOpen={isOpen} onClose={onClose}/>
      </div>
      </div>
      <div className='hero-img-lg'>
        <img src={HeroImg} alt="hero-img" />
      </div>
    </div>
    </div>
  )
}

export default Hero