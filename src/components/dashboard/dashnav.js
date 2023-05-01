import {React , useState} from 'react'
import logo from  "../../../public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";





export default function Dashnav() {
  
  const router = useRouter();

  return (
    <div className="col-span-1 max-w-[calc((1/7)*100vw)] fixed top-0  p-[2vw] h-[100vh] border-r-[0.5px] border-white/5 text-xl bg-CardBright drop-shadow-sm ">
      <div className="relative top-0 left-0 w-full h-[100%]">
        <div className="relative top-0 left-0">
          <div className=''>
        <Image src={logo}/></div>
        <p className=" absolute -bottom-6 bg-white text-[#111313] text-sm px-2 rounded-sm -right-6 font-bold">ALPHA</p>
        </div>

        <div className="group space-y-4 mt-10 ">
        <div className={ (router.pathname == "/" )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/">
              <div className="flex space-x-4">
                <span className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">HOME</span>
                <p className="my-auto hidden lg:block">Home</p>
              </div>
            </Link>
          </div>
          <div className={ (router.pathname.includes("/history") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/history">
              <div className="flex space-x-4">
                <span className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">insights</span>
                <p className="my-auto hidden lg:block">History</p>
              </div>
            </Link>
          </div>
          <div className={ (router.pathname.includes("explore") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/explore">
              <div className="flex space-x-4">
                <span className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">Explore</span>
                <p className="my-auto hidden lg:block">Explore</p>
              </div>
            </Link>
          </div>
          <div className={ (router.pathname.includes("account") )? "duration-700 transition-all " : "opacity-40 transition-all brightness-50 duration-300"}>
            <Link href="/account">
              <div className="flex space-x-4">
                <span className="text-4xl lg:mx-0 mx-auto material-symbols-outlined">person</span>
                <p className="my-auto hidden lg:block">Account</p>
              </div> 
            </Link>
          </div>
        </div>
      
      {/*this section defines the lower half of the naviagtion bar, set to sit on the bottom of the page*/}
      <div className=" absolute bottom-0 w-full left-0 ">
        <div className='space-y-4 mt-10 w-full'>
          <Link href="/">
            <div className="flex space-x-4">
              <span className=" text-4xl mx-auto lg:mx-0 material-symbols-outlined">settings</span>
              <p className="my-auto hidden lg:block">Settings</p>
            </div>
          </Link>
        </div>

        <div><Link href="/auth/logout">
          <div className="flex space-x-4">
            <span className=" text-4xl mx-auto lg:mx-0 material-symbols-outlined">logout</span>
            <p className="my-auto hidden lg:block">Sign out</p>
          </div>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
