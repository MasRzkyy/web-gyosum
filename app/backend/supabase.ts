import { createClient } from '@supabase/supabase-js'

// 1. Pastikan Anda telah membuat file .env.local di root project
// 2. Isi file tersebut dengan URL dan KEY dari dashboard Supabase Anda:
// NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validasi apakah variabel environment sudah terbaca
if (!supabaseUrl || !supabaseKey) {
  // Jika error ini muncul, cek kembali file .env.local Anda
  throw new Error('Missing Supabase environment variables')
}

// Client ini siap digunakan untuk query database
export const supabase = createClient(supabaseUrl, supabaseKey)
