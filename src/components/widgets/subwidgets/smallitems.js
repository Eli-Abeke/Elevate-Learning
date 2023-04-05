import Favourite from '@/components/common/favourite'
import Link from 'next/link'
import React from 'react'




export default function smallitems(props) {
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
            <div>
                <Favourite liked={liked}/>
                <Link href={link}><p>{name}</p></Link>
                <Link href={parentlink}><p>{parent}</p></Link>
                <p>{completed}</p>
                <p>{score}</p>
                <p>{date}</p>
            </div>
        </Link>
    </div>
  )
}
