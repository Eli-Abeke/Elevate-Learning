import React from 'react'
import Dial from './subwidgets/dial'
import Score from './subwidgets/score'

export default function Confidence(props) {
  let stats = props.stats
  const depth = props.depth

  return (
    <div className='grid grid-cols-7 bg-Card rounded-Brand p-brand '>
        <div className='col-span-2 w-[80%]'>
            <Dial input={props.input}/>
        </div>
        <div className='col-span-3 float my-auto w-min mx-auto'>
            <p className=''>{depth} Confidence</p>
            <div className='flex space-x-12'>
            {stats.map((stat) => (
              <div key={stat.score}>
                <Score 
                scoreName={stat.name}
                increase={stat.increase}
                score={stat.score}
                />
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}
