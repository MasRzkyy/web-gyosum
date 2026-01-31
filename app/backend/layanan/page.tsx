import { supabase } from '../supabase'
import LayananClient from './LayananClient'

export default async function LayananPage() {
    const { data: layanan, error } = await supabase
        .from('layanan')
        .select('*')
        .order('id', { ascending: false })

    if (error) {
        console.error('Error fetching data:', error)
    }

    return <LayananClient initialData={layanan || []} />
}
