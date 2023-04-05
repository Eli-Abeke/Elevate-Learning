import { React, useState} from 'react'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { Sen } from '@next/font/google'
import { JellyTriangle, NewtonsCradle } from '@uiball/loaders'



export default function index() {

  var router = Router
  
  const supabaseUrl = 'http://localhost:54321/functions/v1/hello'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'


  const data = {
    data:{
    topic  : "Forces And Motion",
    subtopic_summary : "A-Level Elastic/Inelastic Collisions",
    course_summary : "OCR A-Level Physics",
    course : "Physics", 
    subtopic : "Elastic/Inelastic Collisions",
    syllabus : "OCR",
    lengthOf : 40,
    difficulty : "easy",
    study_level: "A-Level"
  }}



    const [isLoading, setLoading] = useState(true);
  
    // Example POST method implementation:
  async function postData() {
    if (typeof window !== 'undefined') {
      var apikey = localStorage.getItem("sb-vkggcpskdomclusmolfm-auth-token");
      apikey = JSON.parse(apikey)
      fetch(supabaseUrl, {
        method: "POST", // or 'PUT'
        credentials: "same-origin", 
        mode: "cors", 
        headers: {
          "content-Type": "application/json",
          "authorization": "Bearer "+ supabaseKey,
          "apikey": "Bearer "+ apikey.access_token
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        router.push(('assessment/'+data.assessment))
      })
      .catch((error) => {
        console.error("Error:", error);
        router.push(('assessment/'+data.assessment))
      });
  }
}

    if (isLoading) {
      setTimeout(() => {
        postData()
        setLoading(false)
      }, 1000)

      



        return (
        <div className=" absolute left-[50%] top-[50%] ">
          <p className='w-max text-center text-2xl font-light mx-auto'>Building assessment</p>
          <div className='w-max mx-auto '><JellyTriangle color='white' size={160} speed={2}/>
          </div>
        </div>
        )
      }
    else{
      
      
    return (
    <>
    <div className="">

    </div>
    </>
  )
    }

  
}
