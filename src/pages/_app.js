import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import Dashnav from '../components/dashboard/dashnav'
import { createClient,  } from '@supabase/supabase-js'
import { useState, createContext, useEffect } from 'react';
import { Router, useRouter } from 'next/router'
import { ChaoticOrbit } from '@uiball/loaders'




export const UserContext = createContext();
export default function App({ Component, pageProps }) {

  const [isLoading, setLoading] = useState(true);
  const [User, setUser] = useState(null)
  const [data, setData] = useState(null)

  let router = useRouter()
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  useEffect(() => {
    setLoading(true)
    supabase.auth.getUser()
      .then((res) => res)
      .then((res) => {
        if (res.data.user){
          setUser(res.data.user)
          setTimeout(()=>{ setLoading(false) }, 200)
        }
        else{
          
          router.push('/auth/login')
          setLoading(false)
        }
        
      })
  }, [])

  if (isLoading){


    return(
    <div className="grid grid-cols-7 gap-brandgap" >
      <Dashnav/>
      <div className="col-span-6 gap-brandgap grid grid-rows-4 h-[130vh] grid-cols-7 p-5">
        <div className='absolute rounded-full h-[15vh] w-[15vh] top-[40vh] flex left-[50%] '>
        <ChaoticOrbit 
          size={65}
          speed={1.2} 
          color="white" 
        />
        </div>
        <div className='w-full h-full col-span-5 row-span-1 rounded-Brand animate-pulse bg-[#2F2F2F21]'></div>
        <div className='w-full h-full col-span-2 row-span-1 rounded-Brand animate-pulse bg-[#2F2F2F21]'></div>
        <div className='w-full h-full col-span-2 row-span-1 rounded-Brand animate-pulse bg-[#2F2F2F21]'></div>
        <div className='w-full h-full col-span-5 row-span-3 rounded-Brand animate-pulse bg-[#2F2F2F21]'></div>
        <div className='w-full h-full col-span-2 row-span-2 rounded-Brand animate-pulse bg-[#2F2F2F21]'></div>
      </div>
    </div>
    )
  }

  else{    
  return (
    <>
    
      <div className="grid grid-cols-12 gap-24">
        <div className='col-span-1 w-full flex'>
          <Dashnav/>
        </div>
        <div className="col-span-11 ">
          <UserContext.Provider value={User}>
          <Component {...pageProps} />
          </UserContext.Provider>
        </div>
      </div>
    
    </>
    )
  }
}

