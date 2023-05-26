import {React , useState} from 'react'
import logo from  "../../../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";





export default function Dashnav() {
  
  const router = useRouter();

  return (
    <div className="col-span-1 max-w-[calc((1.05/12)*100vw)] w-full fixed top-0  p-[2vw] h-[100vh] border-r-[0.5px] border-white/5 text-xl bg-CardBright drop-shadow-sm ">
      <div className="relative top-0 left-0 w-full h-[100%]">
        <div className="relative top-0 left-0">
        </div>

        <div className="group space-y-4 mt-10 w-min mx-auto">
        <div className={(router.pathname == "/" )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/home">
              
                <p className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">HOME</p>

              
            </Link>
          </div>
          <div className={ (router.pathname.includes("/history") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/history">
              
                <p className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">insights</p>
              
            </Link>
          </div>
          <div className={ (router.pathname.includes("explore") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/explore">
              
                <p className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">Explore</p>

              
            </Link>
          </div>
          <div className={ (router.pathname.includes("account") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/account">
              
                <p className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">person</p>

            </Link>
          </div>
        </div>
      
      {/*this section defines the lower half of the naviagtion bar, set to sit on the bottom of the page*/}
      <div className=" absolute bottom-0 my-5  w-full left-0 ">
        <div className='space-y-4 mt-10 mx-auto w-min'>
          <Link href="/">
            
              <p className=" text-4xl mx-auto lg:mx-0 material-symbols-outlined">settings</p>

          </Link>
        </div>

        <div className='space-y-4 mx-auto w-min'><Link href="/auth/logout">
          
            <p className=" text-4xl mx-auto lg:mx-0 material-symbols-outlined">logout</p>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
