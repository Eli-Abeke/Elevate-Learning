import React, { useState } from 'react'
import { Router, useRouter } from 'next/router'

import { createClient } from '@supabase/supabase-js'
import QuestionsDisplay from '@/components/questions/Question'



export default  function index() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [LocalQuestions, setQuestions] = useState(null);
  const [isLoadings, setLoadings] = useState(true);
  const [LocalAssesment, setLocalAssesment] = useState(null);


    async function GetQuestions(assesmentID) {
      const supabase = createClient(supabaseUrl, supabaseKey)
      try {
        let { data, error } = await supabase
        .from('QuestionConnector')
        .select('*, Question(id, question, explanation, SubtopicConnector(subtopic))')
        .eq('assesment',assesmentID)
        var Questions = data
        Questions = Questions.map((FullObject) => FullObject.Question)
        setQuestions(Questions)
        setLoadings(false)
      } catch (error) {
        console.error(error);
      }
    }
    
  
  const router = useRouter()
  
  const { assesmentID } = router.query

  if (isLoadings) {
    GetQuestions(assesmentID)
    return <div className="App">Loading...</div>;
  }

  else if((LocalQuestions !== null) && (LocalQuestions!== undefined)){
    console.log(LocalQuestions)
    var questions = LocalQuestions

  return (
    <div id='banner'>
      <div className='bg-Card w-full p-[7rem] leading-none'>
      <p className='text-white/20 uppercase'>assesment</p>
      <p className=' text-5xl'>{LocalQuestions[0].SubtopicConnector.subtopic}</p>
      </div>

      <QuestionsDisplay question={questions} index={index} assesmentID={assesmentID}/>
    </div>
  
)}}
