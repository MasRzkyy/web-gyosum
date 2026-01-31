import { supabase } from '../supabase'
import UsersClient from './UsersClient'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
    const { data: userData, error } = await supabase
        .from('user')
        .select('*')
        .order('id', { ascending: true })

    if (error) {
        console.error("Error fetching users:", error)
    }

    return (
        <UsersClient initialData={userData || []} />
    )
}
