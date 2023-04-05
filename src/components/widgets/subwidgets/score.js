import React from 'react'

export default function Score(props) {

    const scoreName = props.scoreName
    var increase = props.increase
    const score = props.score
    var arrow = props.arrow


  return (
    <div>
        <p className='opacity-75 text-sm'>{scoreName}</p>
        <div className='flex'>
            <p className='text-5xl'>{score}</p>
            <p className='text-[0.6rem] mt-auto opacity-40'>/100</p>
        </div>
        <div >
          <span className={`material-symbols-outlined ${ (increase == false) ? "rotate-[135deg] text-Brandred" : " rotate-45 text-Brand"}`}>arrow_upward</span>
        </div>
        <p></p>
    </div>

  )
}
