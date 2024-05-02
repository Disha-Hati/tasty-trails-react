import React from 'react'
import { RESTO_CARD_IMG } from '../utils/links';

const RestoCard = (props) => {
    const {resData}=props;
    console.log(resData.info)

  return (
    <div className='shadow-lg border border-blue-150 p-1 m-2 mt-6 w-56 h-65 hover:cursor-pointer'>
        <img  className='rounded-md w-full h-1/2'alt='food-img' src={RESTO_CARD_IMG+resData.info.cloudinaryImageId}/>
        <ul className='container'>
            <li className='font-bold text-l p-3'>{resData.info.name}</li>
            <li><span className='font-bold'>📍 Locality:</span>{resData.info.locality}</li>
            <li><span className='font-bold'> Cost:</span>{resData.info.costForTwo}</li>
            <li><span className='font-bold'> Delivery in </span>{resData.info.sla.deliveryTime} mins</li>
            <li><span className='font-bold'>Rating</span> {resData.info.avgRating} ⭐</li>
            <br/>
            <li ><p>{resData.info.cuisines.join(',')}</p></li>
           
        </ul>
      
    </div>
  )
}

export default RestoCard
