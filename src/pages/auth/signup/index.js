import React, { useState } from 'react';
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import { Configuration, OpenAIApi } from "openai";
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../public/logo.png'


const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function Form() {
  const [formData, setFormData] = useState({});

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


const handleSignup = async (event) => {
  event.preventDefault();
  try {  
    let { data, error } = await supabase.auth.signUp(
      formData
    )
      const res = await data;
      console.log(res);

  } catch (err) {
      console.error(err);
  }
}

  return (
    <>
    <div className="flex justify-center h-screen ">
      <div className={" my-auto w-[40vw] max-w-[460px] space-y-5"}>
        <Image
        src={Logo}
        className="select-none pb-4"/>
        <form onSubmit={handleSignup} className={"space-y-3"}>
          <div>
            <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight"} htmlFor="email">Email Address</labels>
            <input type="email" name="email" onChange={handleChange} onClick={console.log(JSON.stringify(formData))} className={"w-[100%] text-xl p-5 border-l-[1px] border-white "}/>
          </div>
          <div>
            <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight"} htmlFor="password">Password</labels>
            <input type="password" name="password" onChange={handleChange} className={"w-[100%] text-xl p-5 border-l-[1px] border-white "} />
          </div>
          <div className="py-4">
          <button type="submit" className='text-center w-[100%] py-4 bg-white text-black font-semibold'>Login</button></div>
        </form>
        <div className={"flex justify-between px-3 text-sm opacity-70"}>
          <div className={"w-[25%] text-center"}>
            <Link href={"/login"}> Create Acoount </Link>
          </div>
          <p>•</p>
          <div className={"w-[25%] text-center"}>
            <Link href={"/signup"}> Use another device </Link>
          </div>
          <p>•</p>
          <div className={"w-[25%] text-center"}>
            <Link href={"/signup"}> Forgot Password? </Link></div>
        </div>
      </div>
    </div>
    </>       
  );

}

export default Form;
