import { supabase } from '../supabase'
import PortofolioClient from './PortofolioClient'

export const dynamic = 'force-dynamic'

export default async function PortofolioPage() {
    // const supabase = await createClient() // Removed


    // Fetch Portofolio Data with joined 'isi' relation if possible
    // Note: If relationship isn't set up in Supabase properly, the join might fail or return null.
    // We try to select *, isi(nama_service). If isi has no foreign key setup, this needs adjustment in Supabase.
    // Assuming 'isi_id' is a foreign key.

    // We will query simple first, but ideally we want to join.
    const { data: portofolioData, error: portoError } = await supabase
        .from('portofolio')
        .select(`
            *,
            isi (
                nama_service
            )
        `)
        .order('id', { ascending: true })

    if (portoError) {
        console.error("Error fetching portofolio:", portoError)
    }

    // Fetch Isi Service list for dropdown
    const { data: isiList, error: isiError } = await supabase
        .from('isi')
        .select('id, nama_service')
        .order('nama_service', { ascending: true })

    if (isiError) {
        console.error("Error fetching isi list:", isiError)
    }

    return (
        <PortofolioClient
            initialData={portofolioData || []}
            isiList={isiList || []}
        />
    )
}
