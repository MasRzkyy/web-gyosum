import { supabase } from '../../supabase'
import SubServiceDetailClient from './SubServiceDetailClient'

export default async function SubServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    // 1. Get Jenis Service Detail (and parent Layanan name)
    const { data: jenisLayanan, error: jenisError } = await supabase
        .from('jenis_layanan')
        .select(`
            *,
            layanan:layanan_id (nama_layanan)
        `)
        .eq('id', id)
        .single()

    if (jenisError || !jenisLayanan) {
        return <div className="p-8 text-red-500">Jenis Layanan tidak ditemukan: {jenisError?.message}</div>
    }

    // 2. Get Isi Service List
    const { data: isiList, error: isiError } = await supabase
        .from('isi')
        .select('*')
        .eq('jenis_layanan_id', id)
        .order('id', { ascending: true })

    if (isiError) {
        return <div className="p-8 text-red-500">Error memuat data isi: {isiError.message}</div>
    }

    return <SubServiceDetailClient jenisLayanan={jenisLayanan} initialData={isiList || []} />
}
