import { supabase } from '../../supabase'
import DetailClient from './DetailClient'

export default async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params if using Next.js 15+ compatible approach, or just access if 14 (standard now suggests awaiting params in some contexts, but safe to use standard async/await)
    const { id } = await params

    // Ambil detail data dari tabel 'layanan' berdasarkan ID
    const { data: layanan, error } = await supabase
        .from('layanan')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        return <div className="p-8 text-red-500">Error memuat data layanan: {error.message}</div>
    }

    // Ambil data jenis_layanan yang terkait dengan layanan ini
    const { data: jenisList, error: jenisError } = await supabase
        .from('jenis_layanan')
        .select('*')
        .eq('layanan_id', id)
        .order('id', { ascending: true })

    if (jenisError) {
        return <div className="p-8 text-red-500">Error memuat jenis layanan: {jenisError.message}</div>
    }

    return <DetailClient item={layanan} jenisList={jenisList || []} />
}
