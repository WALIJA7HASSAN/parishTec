import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/Logo.webp';
import LogoModal from '../assets/Parish-Tec-White.webp';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DemoModal from './DemoModal';

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);  
  const [demoModal, setDemoModal] = useState(false);  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const modalOverlayRef = useRef(null);
  const modalRef = useRef(null);
  const handleClose = () => {
    setDemoModal(false); 
  };
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);  
  };

  // Close Modal
  const closeModal = () => {
    setIsClosing(true);  
    setTimeout(() => {
      setIsModalOpen(false);  
    }, 500); 
  };

 

  const getNavListAnimation = () => {
    return windowWidth > 1024 ? 'fade-down' : '';
  };

  const getDemoBtnAnimation = () => {
    return windowWidth > 1024 ? 'fade-down' : '';
  };



  return (
   <>
    <nav className="section">
      {/* nav sm */}
      <div className="nav-header">
        {/* logo */}
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="nav-header-logo"
        >
          <img src={Logo} alt="Logo" />
        </div>
        <IoMenuOutline className="nav-toggler" onClick={openModal} />
        <ul
          data-aos={getNavListAnimation()}
          data-aos-duration="1500"
          className="navlist-lg"
        >
          <li
            onClick={() => setActiveNavItem('Home')}
            className={activeNavItem === 'Home' ? 'nav-item-active' : ''}
          >
            <a href="#">Home</a>
          </li>
          <li
            onClick={() => setActiveNavItem('Mission')}
            className={activeNavItem === 'Mission' ? 'nav-item-active' : ''}
          >
            <a href="#mission">Mission</a>
          </li>
          <li
            onClick={() => setActiveNavItem('parishCards')}
            className={activeNavItem === 'parishCards' ? 'nav-item-active' : ''}
          >
            <a href="#parish-cards">Parish Cards</a>
          </li>
          <li
            onClick={() => setActiveNavItem('resPlatform')}
            className={activeNavItem === 'resPlatform' ? 'nav-item-active' : ''}
          >
            <a href="#residential-platform">Residential Platform</a>
          </li>
        </ul>
        <button
          data-aos={getDemoBtnAnimation()}
          data-aos-duration="1500"
          className="demo-btn btn"
          onClick={()=>setDemoModal(true)}
        >
          Request Demo
        </button>
        <DemoModal isOpen={demoModal} onClose={handleClose}/>
      </div>

      {/* nav modal sm */}
      {isModalOpen && (
        <>
          <div
            className={`nav-modal-overlay ${isClosing ? 'closing' : ''} ${isModalOpen ? 'open' : ''}`}
            ref={modalOverlayRef}
            onClick={closeModal}
          ></div>
          <div
            className={`nav-modal ${isClosing ? 'closing' : ''} ${isModalOpen ? 'open' : ''}`}
            ref={modalRef}
          >
            <div className="nav-modal-header">
              <div className="nav-modal-logo">
                <img src={LogoModal} alt="Logo" />
              </div>
              <IoCloseOutline className="nav-modal-close" onClick={closeModal} />
            </div>
            <ul className="navlist-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#parish-cards">Parish Cards</a></li>
              <li><a href="#residential-platform">Residential Platform</a></li>
            </ul>
          </div>
        </>
      )}
    </nav>
    
   </>
  );
};

export default Nav;
