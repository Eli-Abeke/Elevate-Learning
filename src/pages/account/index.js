import Link from 'next/link'
import { UserContext } from '../_app'
import React, { useContext } from 'react'

export default function index() {

  const User = useContext(UserContext)


  return (
    <div>
      <div>
      <div id='banner'>
      <div className='bg-Card w-full p-[7rem] leading-none'>
      <p className='text-white/20 uppercase'>Your details and statistics</p>
      <p className=' text-5xl'>Account</p>
      </div>
      </div>
        <Link href={("/history")}>
          <p className='text-2xl pl-[5rem] p-[2rem] ml-[2rem] m-[1rem] bg-Card shadow-sm hover:shadow-xl hover:scale-[1.004]'>view history</p>
        </Link>
      </div>
    </div>
  )
}