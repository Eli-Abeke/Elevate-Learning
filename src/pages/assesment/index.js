import { React, useState } from 'react'
import Router from 'next/router'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { Sen } from '@next/font/google'
import { JellyTriangle, NewtonsCradle } from '@uiball/loaders'



export default function index() {

  var router = Router

  // the data to be passed into the external function
  const data = {
    data: {
      topic: "Astrophysics",//
      subtopic_summary: "A-Level Binary Systems",//
      course_summary: "OCR A-Level Physics",//
      course: "Physics", //
      subtopic: "Binary Systems",//
      syllabus: "OCR",//
      lengthOf: 10,//
      difficulty: "easy",//
      study_level: "A-Level"//
    }
  }


  const supabaseUrl = "https://vkggcpskdomclusmolfm.functions.supabase.co/assesment_management"
  const supabaseKey = process.env.SUPABASE_KEY

  const [isLoading, setLoading] = useState(true);

  async function postData() {
    if (typeof window !== 'undefined') {
      //get the user cookie to allow the function to act as that user, reauthenticate them, gain their authentication
      //role, and connect assesment to them for them to access etc.
      var apikey = localStorage.getItem("sb-vkggcpskdomclusmolfm-auth-token");

      //parse the api key object into a string
      apikey = JSON.parse(apikey)

      //call the api
      fetch(supabaseUrl, {
        method: "POST", // or 'PUT'
        credentials: "same-origin",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
          "authorization": "Bearer " + supabaseKey,
          "apikey": "Bearer " + apikey.access_token
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {

          // if the data is returned and set to be true, redirect the to a page containg the asessment id to be used as
          // the variable for fetching the assesment 
          if (data) {
            router.push(('assesment/' + data.assesment))
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          router.push(('assesment/' + data.assesment))
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
        <div className='w-max mx-auto '><JellyTriangle color='#2F2F2F21ss' size={160} speed={2} />
        </div>
      </div>
    )
  }
  else {


    return (
      <>
        <div className="">

        </div>
      </>
    )
  }


}
