import React from 'react'

const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item)=>(
        <div>
            <div className='m-2 p-2 border-blue-400 border-b-2'>
                <div >
                <span>{item.card.info.name}</span>
                <span>{item.card.info.price}</span>
                </div>
                <span className='text-sm'>{item.card.info.description}</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
