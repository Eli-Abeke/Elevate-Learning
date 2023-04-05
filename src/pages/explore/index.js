import React, { useState } from 'react'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'


export default function index() {
    const supabaseUrl = 'https://vkggcpskdomclusmolfm.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [Items, setItems] = useState(initialState);

    async function GetQuestions(assesmentID) {
        const supabase = createClient(supabaseUrl, supabaseKey)
        try {
          let { data, error } = await supabase
          .from('QuestionConnector')
          .select('*, Question(id, question, explanation, SubtopicConnector(subtopic))')
          .eq('assesment',assesmentID)
          setLoadings(false)
          
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div>
        {Items.map((item, index) =>(
            <ItemCard/>
        ))}
    </div>
  )
}
