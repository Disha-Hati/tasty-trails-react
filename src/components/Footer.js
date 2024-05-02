import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">About Us</h4>
        <p>Please remember this is just a fun app , only for learning purpose. All data provided here is dummy information. The data is taken from Swiggy and we don't possess any rights to the content .We are passionate about delivering delicious and nutritious food to your doorstep. Our mission is to make every meal an experience, ensuring freshness, quality, and convenience.</p>
      </div>
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p>Email: abc@tastytrail.com</p>
        <p>Phone: +01 (111) 111-1111</p>
      </div>
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h4 className="text-lg font-semibold mb-4">Follow Us On:</h4>
        <div className="flex space-x-4">
          <ul>
          <li  className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faFacebookF} />Facebook</li>
          <li className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faTwitter} />Twitter</li>
          <li className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faInstagram} />Instagram</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>&copy; 2024 Your Food App. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
