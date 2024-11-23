import React from 'react'
import Logo from '../assets/Logo.webp';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='section'>
      <div >
        <div data-aos="fade-down"
          data-aos-duration="1500" data-aos-anchor-placement="top-bottom" className="footer-logo">
          <img src={Logo} alt="footer-logo" />
        </div>
        <p data-aos="fade-down"
          data-aos-duration="1500" data-aos-anchor-placement="top-bottom"><a href="#">© Parish Reentry Technologies, Inc. All Rights Reserved. 2024</a></p>
      </div>
      {/*  */}
      <div >
        <div data-aos="fade-down"
          data-aos-duration="1500" data-aos-anchor-placement="top-bottom" className="footer-socials">
        <a className='footer-social-icon' href="#"><FaFacebook  /></a>
        <a className='footer-social-icon' href="#"><BsTwitterX   /></a>
        <a className='footer-social-icon' href="#"><FaYoutube  /></a>
        <a className='footer-social-icon' href="#"><FaLinkedin  /></a>
        <a className='footer-social-icon' href="#"><FaInstagram  /></a>
        
        </div>
        <div data-aos="fade-down"
          data-aos-duration="1500" data-aos-anchor-placement="top-bottom" className='footer-policy'>
          <p>Privacy Policy</p>
          <p>|</p>
          <p><a href="#">built by websitesfast.co.uk</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer