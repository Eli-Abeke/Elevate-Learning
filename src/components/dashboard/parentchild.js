import React from 'react'

export default function Parentchild(props) {
    const parent = props.parent
    const table = props.table

    const supabaseUrl = 'https://vkggcpskdomclusmolfm.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

    async function GetParent (){
        try {
            let { data, error } = await supabase
            .from(table)
            .select('*')
            .eq('assesment',assesmentID)
            setLoadings(false)
            
          } catch (error) {
            console.error(error);
          }
    }


    return (
      <div>parentchild</div>
    )
}
