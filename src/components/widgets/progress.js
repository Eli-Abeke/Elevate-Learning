import React from 'react'
import Dial from './subwidgets/dial'

export default function Progress(props) {
  const name = props.name
  const input = props.input

  return (
    <div id='card' className="bg-brand2 bg-Card p-brand h-full grid grid-cols-4 px-[18%] grid-rows-6">
      <div className='col-span-4 row-span-5'>
      <Dial input={input}/>
      </div>
      <p className='cols-span-4 row-span-1 my-auto uppercase font-semibold'>{name} Progress</p>
    </div>
  )
}
