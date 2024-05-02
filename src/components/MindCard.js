import React from 'react'
import { MIND_CARD_URL } from '../utils/links';

const MindCard = (props) => {
    const {data}=props;
    console.log(data.info);


  return (
    <div>
      <ul >
        <li><img  className='overflow-x-scroll w-30 h-22 hover:cursor-pointer'alt='food-img' src={ MIND_CARD_URL+data.imageId}/></li>
      </ul>
    </div>
  )
}

export default MindCard
