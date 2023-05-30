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
        <div className='border-b-[1px] mx-[2.5%] w-[95%] p-[7rem] leading-none'>
        <p className='text-white/20 uppercase'>{
            all.map((item)=>(<span>{item} &gt;</span>))
          }</p>
          <p className=' text-9xl uppercase font-thin'>{Items[0].subtopic}</p>
        </div>
        <div className='m-5 mx-[7.5rem] text-xl max-w-[75%]'>
          {Items.map((parentItem, index) => (
            <div>
              <script>{parentItem.Subtopic.length = 12}</script>
              <Link href={"/explore/" + level + "/" + course + "/" + parentItem.slug}>
                <p>{parentItem.topic}</p>
              </Link>
              <div className='flex space-x-brandgap '>
                <p>{parentItem.Subtopic.description.copy.map((item)=>
  
                (
                  
                  <div>
                    <p className={`my-9 ${item.text ? '':'hidden'}`}>{item.text}</p>
                    <li className={`ml-10 ${item.bullet ? '':'hidden'}`}>{item.bullet}</li>
                  </div>
                )
                
                )}</p>
                
                  
                  

              </div>
              <div className=' space-y-5' id='faq'>
                <h2 className='text-3xl'>FAQ</h2>
                {parentItem.Subtopic.faq.map((item)=>(
                  <div className='bg-Card p-5 rounded'>
                    <p>{item.question}</p>
                  </div>
                ))}
              </div>

                        
        <div className='my-10 border-[2px] rounded-md border-CardBright'>
          <form id='thisform' onSubmit={() => (true)} className=''>
            <textarea form='thisform' className='w-full h-[15rem]  resize-none bg-transparent  p-5' placeholder='Ask Ai'></textarea>
            <input type='submit' value={"submit"} className='w-full h-full cursor-pointer bg-CardBright p-5'></input>
          </form>
        </div>
            </div>
          ))}


          <Link href={{
            pathname: "/assesment",
            query: {
              "subtopic": Items[0].subtopic,
              "subtopic_summary":Items[0].summary,
              "topic":Items[0].TopicConnector.topic,
              "topic_summary":Items[0].TopicConnector.summary,
              "course":Items[0].TopicConnector.CourseConnector.course,
              "course_summary":Items[0].TopicConnector.CourseConnector.summary,
              "study_level":Items[0].TopicConnector.CourseConnector.study_level,
              "syllabus":Items[0].TopicConnector.CourseConnector.syllabus,
              "lengthOf":12,
              "difficulty":"easy"
            },

          }}>
            <p className='p-5 my-5 bg-CardBright'>Create some questions</p>
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
