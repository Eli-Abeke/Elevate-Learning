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
  const { level, course } = router.query
  const all = ["Explore", level]


  async function GetParent() {
    try {
      let { data, error } = await supabase
        .from('CourseConnector')
        .select('course, slug, TopicConnector!inner(*, SubtopicConnector!inner(subtopic)))')
        .eq('slug', course)
      setItems(data)
    } catch (error) {
      console.error(error);
    }
  }

  if (Items) {
    return (
      <>
        <div className='border-b-[1px] mx-[2.5%] w-[95%] p-[7rem] leading-none'>
          <p className='text-white/20 uppercase'>{
            all.map((item)=>(<span>{item} &gt;</span>))
          }</p>
          <p className=' text-9xl uppercase font-thin'>{Items[0].course}</p>
        </div>
        <div className='m-5'>
          {Items.map((parentItem, index) => (
            <div>
              <script>{parentItem.TopicConnector.length = 12}</script>
              <div className='w-full'>

                {parentItem.TopicConnector.map((childItem) =>
                  <div className='mt-brandgap'>

                    <p className='opacity-40 font-light'>{childItem.topic}</p>



                    <div className='flex'>
                      <script>
                        {childItem.SubtopicConnector.length = 3}
                      </script>
                      {childItem.SubtopicConnector.map((item) => (
                        <div>
                          <div className='flex mr-brandgap'>

                            <Link href={"/explore/" + level + "/" + parentItem.slug + "/" + childItem.slug}>
                              <div className='bg-CardBright py-[5rem] w-[25rem]'>
                                <p className='text-center'>{item.subtopic}</p>
                              </div>
                            </Link>

                          </div>

                        </div>
                      ))}
                      <Link href={"/explore/" + level + "/" + parentItem.slug + "/" + childItem.slug}>
                        <div className='border-white  -inset-3 border-2 py-[calc(5rem-4px)] w-[10rem]'>
                          <div className='mx-auto w-min'>
                            <svg width="23" height="23" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 2L18 18.5L2 35" stroke="white" stroke-width="3"/>
                              <path d="M18 2L34 18.5L18 35" stroke="white" stroke-width="3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}

              </div>
            </div>



          ))}
        </div></>
    )
  }
  else {
    GetParent()
    return <div>Loading</div>
  }
}
