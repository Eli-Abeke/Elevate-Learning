import React, { useContext, useState } from 'react'
import { UserContext } from '../_app'
import { createClient } from '@supabase/supabase-js';
import ItemLarge from '@/components/dashboard/itemlarge';

export default function index() {

  const UserID = useContext(UserContext).id

  const [Page, setPage] = useState(0);
  const [Data, setData] = useState(null);
  const [Current, setCurrent] = useState(null);

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  async function GetAssessment(page) {
    var pageLength = 10
    try {
      const { data, error } = await supabase
        .from("UserAssesmentStats")
        .select("*, user, Assesment!inner(*, QuestionConnector!inner(*,Question!inner(*, SeenBy!inner(*)))))", { count: 'exact' })
        .eq('user', UserID)
        .eq('Assesment.QuestionConnector.Question.SeenBy.user', UserID)
        .range((pageLength * page), -1)
        .limit(pageLength)
      console.log(data)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function GetCount(page) {
    try {
      const { data, error } = await supabase
        .from("UserAssesmentStats")
        .select("*", { count: 'exact' })
        .eq('user', UserID)
    } catch (error) {
      console.error(error);
    }
  }

  if (!Data) {
    GetAssessment(Page)
  }
  else {

    return (
      <div className='m-5 grid grid-cols-7 gap-32 min-h-[calc(100vh-3.5rem)]'>

        <div className='col-span-4 grid-flow-row '>
          {Data.map((item, index) => (
            <div className='bg-Card my-3 p-3'>
              <button onClick={() => setCurrent(index)} className='w-max text-xl '>{item.Assesment.QuestionConnector[0].Question.subtopicSummary}</button>

              <div className='grid h-[5px] w-full gap-1 grid-flow-col-dense grid-cols-10'>
                {/*item.Assesment.QuestionConnector.map((subitem, index) => (
                  <div className={`min-h-full min-w-full rounded-sm ${!(subitem.Question.SeenBy[0].previous_answer) ? "bg-red-500" : "bg-green-600"}`}>
                    <div className={`banner ${(subitem.Question.SeenBy[0].completed) ? "bg-amber-600" : ""}`}>
                      {subitem.Question.SeenBy[0].previous_answer}
                    </div>
                  </div>
                ))*/}
              </div></div>
          ))}
          <div className='mx-auto flex space-x-5'>
            <button className='text-5xl text-center' onClick={() => (setPage(Page - 1), GetAssessment(Page))}> - </button>
            <p className='my-auto'>page {Page + 1}</p>
            <button className='text-5xl text-center' onClick={() => (setPage(Page + 1), GetAssessment(Page))}> + </button>
          </div>
        </div>

        <div className='col-span-3 w-full min-h-[100%] bg-Card/40 p-10  max-w-[96%] overflow-x-hidden overflow-y-scroll'>
          {Data.map((item, index) => (
            <>
              <div key={index} className=''>
                <script>
                  {item.parentindex = index}
                  {console.log(item.parentindex)}
                </script>
                {item.Assesment.QuestionConnector.map((subitem, index) => (
                  <div key={index} className={` grid grid-cols-7 ${(Current == item.parentindex) ? "top-0 left-[0vw] my-4 block transition-all duration-500 opacity-100" : "h-0 duration-1000 opacity-0 top-0 left-[50vw] transition-all translate-x-[50vw]"}`}>
                    <p className='col-span-1 text-2xl font-bold'>{index + 1}</p>
                    <p className=' text-md col-span-6'>{subitem.Question.question}</p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    )
  }
}
