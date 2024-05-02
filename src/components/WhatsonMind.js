import React, { useEffect, useState } from 'react'
import MindCard from './MindCard'
import { API_URL } from '../utils/links';
import HorizontalScroll from './HorizontalScroll';

const WhatsonMind = () => {

  const[circularCard,setCircularCard]=useState([]);

  const fetchMindInfo=async()=>{
    const data=await fetch(API_URL);
    const json=await data.json();

    console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    setCircularCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  }

  useEffect(()=>{
    fetchMindInfo();
  },[])

 

  return (
    <div className='m-2 p-2 container h-30 shadow-lg'>
      <div className='font-bold text-2xl'>What's on your Mind?</div>
      <div className='overflow-x-auto flex flex-nowrap'>
       {circularCard.map((card)=><MindCard key={card.id} data={card}/>)}
     
      
      </div>
      
    </div>
  )
}

export default WhatsonMind
