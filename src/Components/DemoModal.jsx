import React, { useState,useRef,useEffect } from 'react';
import Logo from '../assets/Logo.webp';
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const DemoModal = ({isOpen,onClose}) => {

  
  
    
  const [currentStep, setCurrentStep] = useState(1); // Track current step (1 or 2)
  const [formValues, setFormValues] = useState({
    companyName: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
  }); // Form data state
  const [showSuccess, setShowSuccess] = useState(false); // Show success message state

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle Next button
  const handleNext = (e) => {
    e.preventDefault(); // Prevent form submission
    setCurrentStep(2); // Move to step 2
  };

  // Handle Back button
  const handleBack = () => {
    setCurrentStep(1); // Move back to step 1
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowSuccess(true); 
    setFormValues({
      companyName: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      phone: '',
    }); 
    setCurrentStep(1);
  };
  
  if (!isOpen) {
    return null;
  }
  return (
    <div
    className={`demomodal-overlay`} onClick={onClose}>
      <div className="demomodal-container" onClick={(e)=>e.stopPropagation()}>
        <div className="demo-modal">
          <div className="demomodal-header">
            <div className="demomodal-logo">
              <img src={Logo} alt="Logo" />
              <IoCloseOutline className='demomodal-close-btn' onClick={onClose}  />
            </div>
            <h3>Get Demo Access</h3>
            <p>Fill out the form to access our exclusive demo.</p>
          </div>
          <form onSubmit={currentStep === 1 ? handleNext : handleSubmit}>
            {currentStep === 1 && (
              <div className="demomodal-p1 demomodal-part">
                <div className="demomodal-form-header">
                  <span>1</span>
                  <span></span>
                  <span>2</span>
                </div>
                <fieldset>
                  <label htmlFor="company-name">Company Name:</label>
                  <input
                    type="text"
                    id="company-name"
                    name="companyName"
                    value={formValues.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name*"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="first-name">First Name:</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="last-name">Last Name:</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                    required
                  />
                </fieldset>
                <button type="submit" className='btn demo-modal-btn'>
                  Next
                </button>
                {showSuccess && (
            <div className='demo-success' style={{ display: 'flex', alignItems: 'center' }}>
              <IoCheckmark className='demo-success-check' />
              <p>Your submission was successful.</p>
            </div>
          )}
              </div>
            )}
            {currentStep === 2 && (
              <div className="demomodal-p2 demomodal-part">
                <div className="demomodal-form-header">
                  <span>1</span>
                  <span></span>
                  <span>2</span>
                </div>
                <fieldset>
                  <label htmlFor="job-title">Job Title:</label>
                  <input
                    type="text"
                    id="job-title"
                    name="jobTitle"
                    value={formValues.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Job Title*"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="Phone*"
                    required
                  />
                </fieldset>
                <div>
                  <button type="button" className='btn demo-modal-btn' onClick={handleBack}>
                    Back
                  </button>
                  <button type="submit" className='btn demo-modal-btn'>
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
          
          <div className="demomodal-footer">
            <p>You can unsubscribe at any time by clicking the link in the footer of our emails. To read our Privacy Policy, please visit:
              <br />
              https://www.parishtec.app/privacy-policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
