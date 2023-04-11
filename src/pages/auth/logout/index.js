import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'

export default function index() {

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  let router = useRouter()


  //log user out using their session cookie for identification
  async function handleLogout() {
    let { error } = await supabase.auth.signOut()
    router.push("/auth/login")
  }

  handleLogout()
}
