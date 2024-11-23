import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.webp';
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSubmitted(false); // Reset success message if user modifies input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { role, firstName, lastName, email } = formData;
    if (role && firstName && lastName && email) {
      setIsSubmitted(true); // Show success message
    } else {
      setIsSubmitted(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true); 
    // console.log("closing anim");
    
    setTimeout(() => {
      // console.log("closing modal");

        setIsClosing(false); 
        onClose(); 
    }, 1000); 
};


  useEffect(() => {
    setIsClosing(false);
  }, [isOpen]);

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <div className="access-modal-container" onClick={handleClose}>
      <div
        className={`access-modal ${isClosing ? 'close-animation' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="access-modal-header">
          <div className="access-modal-logo">
            <img src={Logo} alt="Logo" />
            <IoCloseOutline className="access-modal-close-btn" onClick={handleClose} />
          </div>
          <h3>Get Exclusive Early Access</h3>
          <p>Join the Parish tec family and be the first to know when we launch!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="role">Please select the option that best describes your role or relationship to the justice-impacted community:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select One*</option>
              <option value="financial_supporter">Financial Supporter - I send money for someone in prison.</option>
              <option value="returning_citizen">Returning Citizen - I am a returning citizen who is mandated to pay restitution, electronic monitoring and/or community supervision fees.</option>
              <option value="residential_representative">Residential Representative - I represent or am involved with housing facilities or services that may assist justice-impacted individuals.</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <button type="submit" className="btn access-modal-btn">
            Submit
          </button>
        </form>
        {isSubmitted && (
          <div className="access-success" style={{ display: 'flex', alignItems: 'center' }}>
            <IoCheckmark className="access-success-check" />
            <p>Your submission was successful.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessModal;
