import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Link from 'next/link';

export default function index() {
    const supabaseUrl = 'https://vkggcpskdomclusmolfm.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [Items, setItems] = useState(null);
    const router = useRouter()
    const { level } = router.query


    async function GetParent (){
        try {
            let { data, error } = await supabase
            .from('CourseConnector')
            .select('summary, slug, course, StudyLevel(slug, name)')
            .eq('StudyLevel.slug', level)
            setItems(data)
          } catch (error) {
            console.error(error);
          }
    }

    if(Items){
      return (
        <div className='m-5'>
            <p className='text-5xl'>{Items[0].StudyLevel.name}</p>
            {Items.map((parentItem, index) =>(
                <div>
                  <Link href={"/explore/"+level+"/"+parentItem.slug}>
                    <p>{parentItem.course}</p>
                  </Link>
                  <div className='flex space-x-brandgap'>
                  </div>
                </div>
            ))}
        </div>
      )
    }
    else{
        GetParent()
      return <div>Loading</div>
    }
}
