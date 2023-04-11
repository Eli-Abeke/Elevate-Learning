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

    // generic get function for an object with children that will also need to be collected.
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


    // if there are any results, map them to some basic linked text items
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
      // get response on first page load, then wait until next load this is done because the react dom 
      // will call the function repeatedly ,as updating a state reloads the page, but reloading the page,
      // would call the function
      GetParent()
      return <div>Loading</div>
    }
}
