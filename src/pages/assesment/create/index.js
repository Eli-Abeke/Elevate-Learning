import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router'



export default function index() {

        const [formData, setFormData] = useState({});

        const router = useRouter();
        const parameters = router.query;
        const data = parameters
        const supabaseUrl = "https://vkggcpskdomclusmolfm.functions.supabase.co/assesment_management"
        const supabaseKey = process.env.SUPABASE_KEY
      
        const handleChange = (event) => {
          setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
          console.log(formData)
        }
    
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
                "authorization": "Bearer " + supabaseKey,
                "apikey": "Bearer " + apikey.access_token
              },
              body: JSON.stringify(data)
            })
              .then((response) => response.json())
              .then((data) => {
                // if an assesment ID is returned, redirect the user to a page where the assesment id is a variable in the URL
                // this ID will be used to fetch all the questions in the assesment
                if (data.assesment){
                  router.push(('/assesment/' + data.assesment))
                }
              })
              .catch((error) => {
                // if there is an error, console log the error, but do not redirect the user. as doing so will not render an
                // assesment and present an error. might redirect the user back to the previous page, and present an error.
                console.error("Error:", error);
              });
          }
        }



    if (parameters){
      postData(parameters)
      return (

        <div>
          <p>
            {/* testing to ensure that the paramenters are passed from the last page to this one */}
            {JSON.stringify(parameters)}
          </p>
        </div>
      )
    }
    else{
  return (
    <div>
    </div>
  )
}}
