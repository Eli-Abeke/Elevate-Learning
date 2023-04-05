import React from 'react'
import Link from 'next/link'

export default function Button(props) {
    var text = props.text
    var to = props.to
    if (text){}
    else{
        text = "Go"
    }
    if(to){

    }
    else{
        to="/"
    }

    return (
    <Link href={to}>
        <div className="bg-Brand cursor-pointer py-3 rounded-Brand">    
            <p className="text-2xl font-semilight text-center w-full mx-auto">{text}</p>
        </div>
    </Link>
  )
}
