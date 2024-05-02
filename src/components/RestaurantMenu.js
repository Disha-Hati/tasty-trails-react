import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { RESTAURANT_MENU } from '../utils/links';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

  const {resId}=useParams();

  const[resInfo,setResInfo]=useState(null);

  const fetchMenu=async()=>{
    const data=await fetch(RESTAURANT_MENU+resId);
    const json=await data.json();
    console.log(json.data);
    setResInfo(json.data);
  }

  useEffect(()=>{
      fetchMenu();
  },[]);

  const {info}=resInfo?.cards[2]?.card?.card;
  console.log(resInfo?.cards[2]?.card?.card);
  const{name,cuisines,costForTwoMessage}=info;
  

  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  

   return (
   <div className='text-center'>
       <h1 className='font-bold my-6 text-2xl'>{name}</h1>
       <p className='font-bold text-lg'>{cuisines.join(",")}-{costForTwoMessage}</p>
      <h2>Menu</h2>
      {categories.map((category)=>(<RestaurantCategory data={category.card.card}/>))}
     
      
   </div>
  )
}

export default RestaurantMenu
