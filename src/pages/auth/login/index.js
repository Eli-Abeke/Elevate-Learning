import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/logo.png'

// call and assign envirment variables for query
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


// handle all data passed into the form and the form state
function Form() {
  const [formData, setFormData] = useState({});

  //invalid is set to null because it is neither false, nor true. this means that 
  //the initial state wont trigger any events unless the form has been interacted with.
  const [Invalid, setInvalid] = useState(null)
  const router = useRouter()
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


  // called upon clicking the "submit"/login button on the form
  const handleLogin = async (event) => {
    event.preventDefault();
    try {  
      let { data, error } = await supabase.auth.signInWithPassword(
        formData
      )
      const res = await data;
      //check for user.id in api response and if not, show that the form
      //credentials are invalid, otherwise, redirect
      if (data.user.id){
        setInvalid(false)
        router.back()
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
      {/*
      this conditional classname statement checks to see if the form credential state is set to invalid. 
      if not, the text is hidden, but if the state is set to invalid, the text reveals itself by increasing
      its opacity to 100%
      */}
      <p className={`transition-all duration-700 ease-in-out text-center text-Brandred h-0 ${Invalid ? "opacity-100" : "opacity-0"}`}>Invalid credentials</p>
      <form onSubmit={handleLogin} className={"space-y-3"}>
        <div>
          <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="email">Email Address</labels>
          <input
            type="email" 
            name="email" 
            onChange={handleChange} 
            autoComplete="off"
            className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
        </div>
        <div>
          <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight"} htmlFor="password">Password</labels>
          <input
            type="password" 
            name="password" 
            onChange={handleChange}
            className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5"}
          />
        </div>
        <div className="py-4">
          <button
            type="submit"
            className='text-center w-[100%] py-4 bg-white text-black font-semibold' >Login
          </button>
        </div>
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
