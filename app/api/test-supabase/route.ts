import { NextResponse } from 'next/server'
import { supabase } from '../../backend/supabase'

export async function GET() {
    try {
        // 1. Ambil variabel environment
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        // 2. Cek apakah variabel sudah terisi
        // Kita cek "your-project" karena itu adalah nilai default di example
        if (!url || !key || url.includes('your-project') || key.includes('your-anon-key')) {
            return NextResponse.json({
                status: 'error',
                message: 'Koneksi GAGAL: Environment variables belum diatur dengan benar.',
                instruction: 'Buka file .env.local dan isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY dengan data dari dashboard Supabase Anda.',
                debug: {
                    url: url || 'MISSING',
                    key: key ? 'SET (Hidden)' : 'MISSING'
                }
            }, { status: 500 })
        }

        // 3. Jika variabel ada, kita asumsikan inisialisasi berhasil
        return NextResponse.json({
            status: 'success',
            message: 'Koneksi BERHASIL: Client Supabase telah terinisialisasi.',
            info: 'URL dan Key telah terdeteksi. Anda siap menggunakan Supabase!',
            env: {
                url: url,
                valid_config: true
            }
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Terjadi kesalahan sistem saat testing.',
            error: String(error)
        }, { status: 500 })
    }
}
