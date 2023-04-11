import {React, useState, useContext, createContext} from 'react'
import Largeitems from './subwidgets/largeitems'
import { createClient } from '@supabase/supabase-js'
import { UserContext } from '@/pages/_app'


export default function History(props) {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    const [PreLoading, setPreLoading] = useState(false);
    const [Loading, setLoading] = useState(null);

    var items = []
    

    const stats = [
      {name:"Dummy"},
      {name:"Dummy"},
      {name:"Dummy"},
      {name:"Dummy"},
      {name:"Dummy"},
      {name:"Dummy"},
    ]

    const id = useContext(UserContext);
    console.log(id)
    
      async function GetHistory() {
        try {
          setLoading(true)
    
          let { data, error, status } = await supabase
            .from("UserAssesmentStats")
            .select("Assesment(id, Subtopic(name, slug))")
            .eq('user', id)
            
          return data

        } finally {
          setLoading(false)
        }
      }


      


do{
  if (PreLoading == false){
    
    var history = GetHistory()
    setPreLoading(true)
    setLoading(false)
    
    return (
      <div>
        <h2>History</h2>
        <div>
          {stats.map((item) => (
            <div key={item.name} className={"bg-gray-400 opacity-5 w-full"}>
              <p className='opacity-0 text-2xl'>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  else if (Loading == false){
    
    setLoading(true)
    return(
      <div>
        <h2>History</h2>
        <div>
          {stats.map((item) => (
            <div key={item.name} className={"bg-gray-400 opacity-5 w-full"}>
              <p className='opacity-0 text-2xl'>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    )
  }
  else{
    console.log(history)

    return(
      <div>
        <h2>History</h2>
        <div>
          {items.map((item) => (
              <Largeitems 
                  name={item.name}
                  date={item.date} 
                  score={item.score}
                  liked={item.liked}
                  parent={item.Course.name}
                  parentlink={item.Course.slug}
                  link={item.slug}
          />))}
        </div>
      </div>
    )
  };

}while (Loading == false) or (PreLoading == false)
}
