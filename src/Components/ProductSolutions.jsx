import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ProductSolutions = () => {
  return (
    <div className="product-solutions section">
    <h3 data-aos="fade-up"
          data-aos-duration="1500">Product Solutions</h3>
    <p data-aos="fade-up"
          data-aos-duration="1500">Credit-building financial technology that leverages recurring charges for  justice-impacted communities </p>
    <ul data-aos="fade-up"
          data-aos-duration="1500" >
      <li><IoCheckmarkCircleSharp className='product-check' /> <p>Secured card for telecommunication and commissary support</p></li>
      <li><IoCheckmarkCircleSharp className='product-check' /> <p>Digital convenience and security with custom virtual wallets</p></li>
      <li><IoCheckmarkCircleSharp className='product-check'/> <p>Comprehensive credit reporting and spending insights</p></li>
    </ul>
  </div>
  )
}

export default ProductSolutions