import React from 'react'
import { createClient } from '@supabase/supabase-js'

export default function Suggestions() {

    const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function GetSuggestons() {
    const supabase = createClient(supabaseUrl, supabaseKey)
    try {
      const response = await supabase.from("Syllabus").select("*");
      setSyllabus(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

// get suggestions by sorting values in db by lowest score and filter byuser.
// get the three most recent exercies aswell. sort by date.

  var Suggestions = GetSuggestons()
  console.log(Suggestions)


    if (length(children) < 0){
        return (
            <div className='bg-Card'>
                <div>
                    <p>from {itemParent} we'd suggest {children[0]}</p>
                </div>
                <div>
                    <p>
                        But here are some other topics we think you should go over
                    </p>
                    {/** map out items to list elements**/}
                </div>
            </div>
          )
    }
    else{
        return(
            <>
            </>
        )
    }


 
}
