import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Link from 'next/link';

export default function index() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [Items, setItems] = useState(null);
  const router = useRouter()
  const { level } = router.query
  const all = ["Explore"]

  // generic get function for an object with children that will also need to be collected.
  async function GetParent() {
    try {
      let { data, error } = await supabase
        .from('CourseConnector')
        .select('summary, slug, course, StudyLevel(slug, name), TopicConnector!inner(topic, slug))')
        .eq('StudyLevel.slug', level)
      setItems(data)
    } catch (error) {
      console.error(error);
    }
  }


  // if there are any results, map them to some basic linked text items
  if (Items) {
    return (
      <>
        <div className=' border-b-[1px] mx-[2.5%] w-[95%] p-[7rem] leading-none'>
          <p className='text-white/20 uppercase'>{
            all.map((item)=>(<span>{item} &gt;</span>))
          }</p>
          <p className=' text-9xl uppercase font-thin'>{Items[0].StudyLevel.name}</p>
        </div>
        <div className='m-5 gap-brandgap'>
          {Items.map((parentItem, index) => (


            <div className=''>
              <Link href={"/explore/" + level + "/" + parentItem.slug}>
                <p className=' py-3 w-max'>{parentItem.course}</p>
              </Link>
              <div>

                <div className='flex space-x-brandgap'>
                  <script>
                    {parentItem.TopicConnector.length = 4}
                  </script>

                  {parentItem.TopicConnector.map((childItem, index) => (
                    <div className='py-[5rem] w-[25rem] bg-CardBright'>
                      <div className='w-full'>
                        <Link href={"/explore/" + level + "/" + parentItem.slug +"/"+childItem.slug}>
                          <p className=' text-center'>{childItem.topic}</p>
                        </Link>
                      </div>
                    </div>
                  ))}

                  <Link href={"/explore/" + level + "/" + parentItem.slug}>
                    <div className='border-white -inset-3 border-2 py-[calc(5rem-4px)] w-[10rem]'>
                      <div className='mx-auto w-min'>
                        <svg width="23" height="23" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 2L18 18.5L2 35" stroke="white" stroke-width="3" />
                          <path d="M18 2L34 18.5L18 35" stroke="white" stroke-width="3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
  else {
    // get response on first page load, then wait until next load this is done because the react dom 
    // will call the function repeatedly ,as updating a state reloads the page, but reloading the page,
    // would call the function
    GetParent()
    return <div>Loading</div>
  }
}
