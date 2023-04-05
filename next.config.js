/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: false,
  env:{
    SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZ2djcHNrZG9tY2x1c21vbGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwODQwNzYsImV4cCI6MTk5MDY2MDA3Nn0.WV9d-WbzAE9YkzN_7F_sY22AkF8fAHPp999xnzwiU4c',
    SUPABASE_URL:"https://vkggcpskdomclusmolfm.supabase.co"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

}

module.exports = nextConfig
