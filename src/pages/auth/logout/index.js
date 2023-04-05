import React from 'react'
import { createClient } from '@supabase/supabase-js'

export default function index() {

    const supabaseUrl = 'https://vkggcpskdomclusmolfm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

    async function handleLogout() {
          let { error } = await supabase.auth.signOut()
      }


      handleLogout()
  return (
    <div>index</div>
  )
}
