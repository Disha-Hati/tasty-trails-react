import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { DUMMY_PROFILE_URL } from '../utils/links';

const User = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto bg-blue-100  rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="flex items-center mb-4">
          <img src= {DUMMY_PROFILE_URL}alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-600">Location: New York, USA</p>
            <p className="text-gray-600">No of Orders: 100</p>
            <p className="text-gray-600">Ratings: 4.4 ⭐</p>
          </div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 rounded-full ml-auto">
          <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <hr className="my-4" />
        <h2 className="text-2xl font-bold mb-4">Order</h2>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Previous Orders
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Favorite Restaurants
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Available Coupons
          </button>
        </div>
      </div>
    </div>
  )
}

export default User
