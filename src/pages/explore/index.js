import React, { useState } from 'react'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'


export default function index() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [Items, setItems] = useState(null);

  async function GetParent() {
    try {
      let { data, error } = await supabase
        .from('StudyLevel')
        .select('name, description, for, slug, CourseConnector!inner(summary, slug, course)')
      setItems(data)
    } catch (error) {
      console.error(error);
    }
  }

  if (Items) {
    return (
      <>
        <div className='bg-Card w-full p-[7rem] leading-none'>
          <p className='text-white/20 uppercase'></p>
          <p className=' text-9xl uppercase font-thin'>explore</p>
        </div>
        <div className='m-5'>
          {Items.map((parentItem, index) => (
            <div>
              <script>{parentItem.CourseConnector.length = 12}</script>
              <Link href={"/explore/" + parentItem.slug}>
                <p>{parentItem.name}</p>
              </Link>
              <div className='flex space-x-brandgap'>
                {parentItem.CourseConnector.map((childItem) =>
                  <Link href={"/explore/" + parentItem.slug + "/" + childItem.slug}>
                    <div className='bg-CardBright p-8 w-[15rem]'>
                      <p className='text-center'>{childItem.course}</p>
                    </div>
                  </Link>
                )}
                <Link href={"/explore/" + parentItem.slug}>
                  <div className='bg-CardBright p-8 w-[15rem]'>
                    <p className='text-center'>See More</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
  else {
    GetParent()
    return <div></div>
  }
}
