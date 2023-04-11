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
    const { level, course, topic } = router.query


    async function GetParent (){
        try {
            let { data, error } = await supabase
            .from('TopicConnector')
            .select('summary, slug, topic, SubtopicConnector!inner(subtopic, summary, slug))')
            .eq('slug', topic)
            .range(0,1)
            setItems(data)
          } catch (error) {
            console.error(error);
          }
    }

    if(Items){
      return (
        <>
        <div className='bg-Card w-full p-[7rem] leading-none'>
          <p className='text-white/20 uppercase'></p>
          <p className=' text-9xl uppercase font-thin'>{Items[0].topic}</p>
        </div>
        <div className='m-5'>
            {Items.map((parentItem, index) =>(
                <div>
                  <script>{parentItem.SubtopicConnector.length = 12}</script>
                  <div className='grid grid-cols-5 gap-brandgap grid-rows-2 h-[60vh]'>
                  {parentItem.SubtopicConnector.map((childItem) =>
                  <Link href={"/explore/"+level+"/"+course+"/"+topic+"/"+childItem.slug}>
                    <div className='bg-CardBright p-8 h-full w-full'>
                      <p className='text-center'>{childItem.subtopic}</p>
                    </div>
                  </Link>
                  )}

                  </div>
                </div>
            ))}
        </div></>
      )
    }
    else{
        GetParent()
      return <div>Loading</div>
    }
}
