import React from 'react'
import ResImg from '../assets/LaptopMobile.webp'
import { TbFilterDollar } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";

const ResidentialPlatform = () => {
  return (
    <div className='card-container res-plat'>
      <div data-aos="fade-up"
          data-aos-duration="1000"  id='residential-platform' className="res-card-container section">
        <h4 className='card-h4 card-h4-sm' data-aos="fade-up"
          data-aos-duration="1000">Parish Residential Platform</h4>
        <div>
          <div  className="res-card-img">
            <img data-aos="fade-up"
          data-aos-duration="1000" src={ResImg} alt="card-img" />
          </div>
          <div className="res-card-content card-content">
          <h4 data-aos="fade-up"
          data-aos-duration="1000"  className='card-h4 card-h4-lg'>Parish Residential Platform</h4>
            <p data-aos="fade-up"
          data-aos-duration="1000">The Parish Residential Platform streamlines room and board fee collection for residential reentry centers and transitional housing providers by automating administrative tasks and enabling same day payment processing. </p>
          <p data-aos="fade-up"
          data-aos-duration="1000">Residents benefit from having diverse payment options while also having their on-time payments reported to all major credit bureaus.</p>
          <a data-aos="fade-up"
          data-aos-duration="1000" href='#' className="btn res-btn">Patner With Us</a>
            <div className='res-article'>

              <article data-aos="fade-up"
          data-aos-duration="1000">
               <TbFilterDollar className='res-icon' />
               <h3>Automated Payment Processing</h3>
              </article>
              <article data-aos="fade-up"
          data-aos-duration="1000">
               <MdOutlineEventAvailable className='res-icon' />
               <h3>On-time tenant payment reporting</h3>
              </article>
              <article data-aos="fade-up"
          data-aos-duration="1000">
               <FaMobileScreenButton className='res-icon'/>
               <h3>Mobile Friendly Platform</h3>
              </article>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentialPlatform