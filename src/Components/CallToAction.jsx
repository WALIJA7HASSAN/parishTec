import React from 'react'
import googleBtn from '../assets/GooglePlayBtn.png'
import appBtn from '../assets/AppStoreBtn.png'
import EarlyAccessModal from './EarlyAcessModal'

const CallToAction = ({isOpen,onClose,onOpen}) => {
  return (
    <div  className='callAction-container'>
      <div data-aos="fade-up"
          data-aos-duration="300" className="callAction-card section">
       <div className="callAction-content">
       <h3 data-aos="fade-up"
          data-aos-duration="1000">Empowering Financial Futures for Justice-Impacted Individuals: Take the First Step Towards Rebuilding Credit and Restoring Dignity</h3>
        <button data-aos="fade-up"
          data-aos-duration="1000" className="btn callAction-btn" onClick={onOpen}>Join The Waitlist</button>
          <EarlyAccessModal isOpen={isOpen} onClose={onClose}/>
        <div data-aos="fade-up"
          data-aos-duration="1000" className="callAction-links">
          <a href="#">
            <img src={googleBtn} alt="google-play-btn" />
          </a>
          <a href="#">
            <img src={appBtn} alt="app-store-btn" />
          </a>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CallToAction