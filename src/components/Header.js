import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { MY_LOGO_URL } from '../utils/links';

const Header = () => {
  return (
    <div className=' grid grid-flow-col p-2 m-2 shadow-lg bg-blue-200'>

      <div className='flex col-span-1'><img className='w-36' src={MY_LOGO_URL} alt="header-logo"/></div>
      <div>
      <div className='col-span-10 m-4 pl-4 ml-12 mt-9'>
      <input className='w-3/4 rounded-md  border border-blue-600 p-2 ' placeholder='Search for Restaurant,Food' type='text'/>
      <div className='bg-blue-50 py-2 px-2 w-72 fixed shadow-lg rounded-lg border border-blue-100 absolute'>
        <ul>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Fried Rice</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Biryani</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Fried Rice</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Biryani</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Fried Rice</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Biryani</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Fried Rice</li>
          <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🍲Biryani</li>
        </ul>
        </div>
      <button className='bg-blue-700 p-2 m-2 rounded-md text-white'>Search</button>
      </div>
        

      </div>

      <div className='col-span-1'>
        <ul className="flex p-4 m-4 ">
          <li className='m-4 px-3 hover:cursor-pointer'><Link to='/'>🏠Home</Link></li>
         <div> 
            <li className='m-4 px-3 hover:cursor-pointer'>🍡Offers</li>
            <div className='bg-blue-50 py-2 px-2 w-60 fixed shadow-lg rounded-lg border border-blue-100 absolute'>
            <ul>
              <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🎇 20% off</li>
              <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🎇 50% off</li>
              <li className='py-2 shadow-sm shadow-blue-300 hover:bg-blue-200'>🎇 70% off</li>
            </ul>
            </div>
          </div>
          <li className='m-4 px-3 hover:cursor-pointer'><Link to='/cart'>🛒Cart</Link></li>
          <li className='m-4 px-3 hover:cursor-pointer'><Link to='/user'><FontAwesomeIcon icon={faUser} />User</Link></li>
          <li className='m-4 px-3'><button className='bg-blue-600 rounded-3xl p-2'>☀️/🌙</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
