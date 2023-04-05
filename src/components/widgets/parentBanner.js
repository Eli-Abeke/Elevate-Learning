import React from 'react'
import Progress from './progress'
import Banner from './subwidgets/banner'
import Dial from './subwidgets/dial'

export default function ParentBanner(props) {
    const text = props.text
    const bigtext = props.bigText
    const bgLink = props.bgLink
    const input = props.input
  return (

    <div className='grid grid-cols-8 w-full gap-brandgap'>
        <div className='col-span-6 h-full'>
        <Banner
            bigText={bigtext} 
            bgLink={bgLink} 
            bigtext={text}
            />
        </div>
        <div className='col-span-2'>
        <Progress name={""} input={input}/>
        </div>
    </div>
  )
}
