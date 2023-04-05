import React, { useState } from 'react';
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/logo.png'


const supabaseUrl = 'https://vkggcpskdomclusmolfm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



function Form() {
  const [formData, setFormData] = useState({});
  const [Invalid, setInvalid] = useState(null)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};


  
  const handleLogin = async (event) => {
    event.preventDefault();
    try {  
      let { data, error } = await supabase.auth.signInWithPassword(
        formData
      )
        const res = await data;
        if (data.user.id){
          setInvalid(false)
          //redirect
      }
      else{
        setInvalid(true)
      }

    } catch (err) {
        console.error(err);
        setInvalid(true)
    }
  }


  return (
    <>
    <div className="flex justify-center h-screen ">
    <div className={" my-auto w-[80vw] max-w-[460px] space-y-5"}>
      <Image
      src={Logo} className="select-none pb-4"/>
      <p className={`transition-all duration-700 ease-in-out text-center text-Brandred h-0 ${Invalid ? "opacity-100" : "opacity-0"}`}>Invalid credentials</p>
      <form onSubmit={handleLogin} className={"space-y-3"}>
        <div>
          <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="email">Email Address</labels>
          <input type="email" name="email" onChange={handleChange} autoComplete="off" onClick={console.log(JSON.stringify(formData))} className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
        </div>
        <div>
          <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight"} htmlFor="password">Password</labels>
          <input type="password" name="password" onChange={handleChange} className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5"} />
        </div>
        <div className="py-4">
        <button type="submit" className='text-center w-[100%] py-4 bg-white text-black font-semibold'>Login</button></div>
      </form>
      <div className={"flex justify-between px-3 text-sm opacity-70"}>
          <div className={"w-[25%] text-center"}>
            <Link href={"/auth/signup"}> Sign up </Link>
          </div>
          <p>•</p>
          <div className={"w-[25%] text-center"}>
            <Link href={"/auth/forgot-password"}> Use another device </Link>
          </div>
          <p>•</p>
          <div className={"w-[25%] text-center"}>
            <Link href={"/auth/forgot-password"}> Forgot Password? </Link></div>
        </div>
      </div></div>
    </>       
  );
}

export default Form;
