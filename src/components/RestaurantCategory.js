import React from 'react'
import { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
    const [showItems,setShowItems]=useState(false);

    const handleClick=()=>{
        setShowItems(!showItems);
    }
  return (
    <div>
      <div >
      <div className='w-6/12 mx-auto'  onClick={handleClick}>
       <div className=' my-2 bg-blue-100 shadow-md flex justify-between p-3 rounded-md hover:cursor-pointer hover:bg-blue-200'>
       <span className='font-bold text-md'>{data.title}({data.itemCards.length})</span>
        <span>⛛</span>
       </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
      
      </div>
    </div>
  )
}

export default RestaurantCategory
