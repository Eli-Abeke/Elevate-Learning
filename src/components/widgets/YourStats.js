import React from 'react'
import Graph from './subwidgets/graphed'
import Confidence from './confidence'

export default function UserStats() {
  return (
    <div>
        <div>
            <div>
                <h1>

                </h1>
                <p>

                </p>
            </div>
            <div className='grid w-full h-full grid-cols-1'>
                <div><p>Summary</p><input></input></div>
                <div>
                    <div><p>00</p><p>assesments <br/> completed</p></div>
                    <Graph/>
                </div>
                <div>
                    <Confidence/>
                </div>
                

            </div>
        </div>
    </div>
  )
}
