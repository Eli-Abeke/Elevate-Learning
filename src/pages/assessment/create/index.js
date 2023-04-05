import React from 'react'
import { useState } from 'react';




export default function index() {

        const [formData, setFormData] = useState({});
      
        const handleChange = (event) => {
          setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
          console.log(formData)
        }
    
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
            body: JSON.stringify({data:formData})
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




  return (
    <div>
        <form onSubmit={postData} className={"space-y-3 max-w-[80%] mx-auto"}>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="syllabus">syllabus</labels>
              <input type="text" name="syllabus" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="course">course</labels>
              <input type="text" name="course" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="course_summary">course_summary</labels>
              <input type="text" name="topic" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="topic">topic</labels>
              <input type="text" name="topic" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="subtopic">subtopic</labels>
              <input type="text" name="subtopic" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="subtopic_summary">subtopic_summary</labels>
              <input type="text" name="subtopic_summary" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="lengthOf">length of assessment</labels>
              <input type="number" name="lengthOf" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div>
              <labels className={"uppercase tracking-[0.26em] text-[12px] leading-tight "} htmlFor="difficulty">difficulty</labels>
              <input type="text" name="difficulty" onChange={handleChange} autoComplete="off"  className={"w-[100%] text-xl p-5 border-l-[1px] border-white bg-white/5 autofill:" }/>
            </div>
            <div className="py-4">
            <button type="submit" className='text-center w-[100%] py-4 bg-white text-black font-semibold'>Create</button>
            </div>
        </form>
    </div>
  )
}
