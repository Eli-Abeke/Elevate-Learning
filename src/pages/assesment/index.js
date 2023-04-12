import { React, useState} from 'react'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { Sen } from '@next/font/google'
import { JellyTriangle, NewtonsCradle } from '@uiball/loaders'



export default function index() {

  var router = Router
  
  // the data to be passed into the external function
  const data = {
    data:{
    topic  : "Astrophysics",//
    subtopic_summary : "A-Level Binary Systems",//
    course_summary : "OCR A-Level Physics",//
    course : "Physics", //
    subtopic : "Binary Systems",//
    syllabus : "OCR",//
    lengthOf : 10,//
    difficulty : "easy",//
    study_level: "A-Level"//
  }}

  const supabaseUrl = "http://localhost:8000/functions/assesment_management"
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"

    const [isLoading, setLoading] = useState(true);
 
  async function postData() {
    if (typeof window !== 'undefined') {
      //get the user cookie to allow the function to act as that user, reauthenticate them, gain their authentication
      //role, and connect assesment to them for them to access etc.
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
        if (data){
        router.push(('assesment/'+data.assesment))}
      })
      .catch((error) => {
        console.error("Error:", error);
        router.push(('assesment/'+data.assesment))
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
