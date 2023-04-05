import Link from 'next/link'
import React from 'react'
import Progress from '../progress'

export default function Largeitems(props) {
   const name = props.name
   const date = props.date
   const score = props.score
   const liked = props.liked
   const parent = props.parent
   const parentlink = props.parentlink
   const link = props.link

  return (
    <div>
        <Link href={link}>
            <div className='grid grid-cols-6 grid-rows-3 gap-brandgap'>
                <div className='col-span-4'><p>{name}</p></div><div className='col-span-2'><Progress input={0.75}/></div>
                <Favourite liked={liked}/>
                <Link href={link}><p>{name}</p></Link>
                <Link href={parentlink}><p>{parent}</p></Link>
                <p>{completed}</p>
                <p className='bg-green-700 rounded-full p-[30%]'>{score}</p>
                <p>{date}</p>
            </div>
        </Link>
    </div>
  )
}
