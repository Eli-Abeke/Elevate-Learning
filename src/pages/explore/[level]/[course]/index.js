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


  async function GetParent() {
    try {
      let { data, error } = await supabase
        .from('CourseConnector')
        .select('course, slug, TopicConnector!inner(*))')
        .eq('slug', course)
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
          <p className=' text-9xl uppercase font-thin'>{Items[0].course}</p>
        </div>
        <div className='m-5'>
          {Items.map((parentItem, index) => (
            <div>
              <script>{parentItem.TopicConnector.length = 12}</script>
              <div className='flex space-x-brandgap'>
                {parentItem.TopicConnector.map((childItem) =>
                  <Link href={"/explore/" + level + "/" + "/" + parentItem.slug + "/" + childItem.slug}>
                    <div className='bg-CardBright p-8 w-[15rem]'>
                      <p className='text-center'>{childItem.topic}</p>
                    </div>
                  </Link>
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
