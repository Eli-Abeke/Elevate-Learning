import React from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import {Router, useRouter} from 'next/router'

export default function QuestionsDisplay(props) {

    let router = useRouter()
    var questions = props.question
    var index = props.index


    async function GetAnswer(questionid){
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_KEY
        const supabase = createClient(supabaseUrl, supabaseKey)
    }
    
    var cur = String(router.asPath)

    return (

<div>
<div className='w-full scroll-smooth flex overflow-x-scroll snap-x snap-mandatory no-scrollbar space-x-48 px-64'>{questions.map((question,index) => (
    
    <div id={"Q"+String(index+1)} className='bg-Card snap-center min-w-[60vw] relative border-[1px] border-CardBright p-28 py-24 my-12 scroll-p-24 max-w-6xl group'>
        <div className='absolute group-hover:h-[80%] h-[0.1px] transition-all duration-1000 ease-in-out w-[1px] group-hover:bottom-[1rem] bottom-0 left-0'>
            <div className=' w-full h-1/5 bg-gradient-to-b from-transparent to-teal-800 '/>
            <div className='w-full h-1/5 bg-gradient-to-t from-transparent to-teal-800'/>
        </div>
        <div className='w-full flex'>
            <p className='text-[8rem] centre pr-8 -translate-y-[5%]'>Q{index+1}</p>
            <div className='col-span-4 pl-8'>
                <p className='text-2xl'>{question.question}</p>
                <div>
                    <form className='grid grid-cols-1'>
                        <input type='text' className='bg-transparent border-b-[0.5px] h-[2.5rem] border-white'></input>
                        <input type='submit' value={"Submit"} className='p-4 px-24 mx-auto my-10 border-2 w-min border-white rounded-sm'></input>
                    </form>
                </div>
            </div>
        </div>
    </div>

))}
</div>
<div className='flex space-x-7 text-xl mx-auto w-max'>
    {questions.map((question,index) => (
    <Link href={'#Q'+String(index+1)}>
        <div  className={`group p-[1px] bg-gradient-to-t hover:translate-y-[-5px] transition-all ease-in-out duration-1000 rounded-[05px] hover:transition-all  ${cur.includes("#Q"+(index+1))? " from-teal-700 to-teal-700 transition-all" : "transition-all from-white/20 to-white/20 hover:from-white/[0.01] hover:to-teal-800"}`}>
            <p  className='capitalize bg-Card rounded-Brand ease-in-out transition-all text-center w-[4rem] py-[1rem] '>
                Q{index+1}
            </p>
        </div>
    </Link>))}
    </div>
</div>



  )
}
