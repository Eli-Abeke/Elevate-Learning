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
  const { level, course, topic, subtopic } = router.query
  const all = ["Explore", level, course, topic]

  //go through all parameters, remove hyphens and capitalise the letters at the star of any word.
  //that or use the result from validate to create proper query in route[create]

  const parameters = {
    topic_slug: topic,//
    subtopic_slug: subtopic,//
    course_slug: course,//
    subtopic_slug: subtopic,//
    study_level: level//
  }


  async function GetParent() {
    try {
      let { data, error } = await supabase
        .from('SubtopicConnector')
        .select('summary, slug, subtopic, Subtopic!inner(*), TopicConnector(*, CourseConnector(*)))')
        .eq('slug', subtopic)
        .range(0, 1)
      setItems(data)
    } catch (error) {
      console.error(error);
    }
  }

  if (Items) {
    return (
      <>
        <div className='bg-Card w-full p-[7rem] leading-none'>
        <p className='text-white/20 uppercase'>{
            all.map((item)=>(<span>{item} &gt;</span>))
          }</p>
          <p className=' text-9xl uppercase font-thin'>{Items[0].subtopic}</p>
        </div>
        <div className='m-5 mx-[7.5rem] text-2xl'>
          {Items.map((parentItem, index) => (
            <div>
              <script>{parentItem.Subtopic.length = 12}</script>
              <Link href={"/explore/" + level + "/" + course + "/" + parentItem.slug}>
                <p>{parentItem.topic}</p>
              </Link>
              <div className='flex space-x-brandgap'>
                <p>{parentItem.Subtopic.description.copy.map((item)=>
  
                (
                  <div>
                    <p>{item.text}</p>
                    <p className=' ml-5 my-3 '>{item.bullet}</p>
                  </div>
                )
                
                )}</p>

              </div>
            </div>
          ))}
          <Link href={{
            pathname: "/assesment/create",
            query: {
              "topic":""
            },

          }}>
            <p className='p-5'>Create some questions</p>
          </Link>
        </div>
      </>
    )
  }
  else {
    GetParent()
    return <div>Loading</div>
  }
}
