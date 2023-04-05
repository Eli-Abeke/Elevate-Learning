import React from 'react'

export default function ItemSmall(props) {
    const items = props.items
  return (
    <>
    <div className='grid grid-cols-5 overflow-y-hidden'>
      
      {items.map((item, index)=>(
        <div className='w-full p-5 bg-gray-700'>
            <p className='col-span-2'>{item.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}
