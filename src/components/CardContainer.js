import React, { useEffect, useState } from 'react'
import RestoCard from './RestoCard'
import { API_URL } from '../utils/links';
import { Link } from 'react-router-dom';


const CardContainer = () => {
  const[listOfRes,setListOfRes]=useState([]);

  const fetchResData=async()=>{
    const data=await fetch(API_URL);
    const json=await data.json();

    console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)

    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  useEffect(()=>{
    fetchResData();
  },[])

  const filterRestaurant=()=>{
    const filteredList=listOfRes.filter((res)=>res.info.avgRating>4.5);
    setListOfRes(filteredList);
  }


  return (
    
    <div>
    <div className='flex flex-wrap pl-4' >
    <div className='font-bold text-2xl'>Restaurants with online food delivery in Bangalore</div>
    <button onClick={filterRestaurant} className='bg-blue-600 p-2 m-1 rounded-md text-white absolute right-0  '>Top Rated Restaurants</button>
    </div>
     <div className='flex flex-wrap w-fit justify-center'>
     {listOfRes.map((resto)=>(<Link to={"/restaurants/"+ resto.info.id} key={resto.info.id}><RestoCard  resData={resto}/></Link>))}
      
     </div>
    </div>
  )
}

export default CardContainer
