'use client'

import { useState } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation'
import {
    Home,
    Settings,
    Users,
    FileText,
    Plus,
    Pencil,
    Trash2,
    Search,
    LogOut,
    LayoutDashboard
} from 'lucide-react'

// Tipe data untuk Layanan (sesuaikan dengan kolom di database Anda)
interface Layanan {
    id: number
    created_at?: string
    // Tambahkan kolom lain sesuai tabel 'layanan' Anda
    nama?: string
    deskripsi?: string
    harga?: number
    [key: string]: any // fallback untuk kolom lain
}

export default function DashboardClient({ initialData }: { initialData: Layanan[] }) {
    const router = useRouter()
    const [data, setData] = useState<Layanan[]>(initialData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState<Partial<Layanan>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // Toggle Modal
    const openModal = (item?: Layanan) => {
        setCurrentItem(item || {})
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentItem({})
    }

    // --- CRUD OPERATIONS ---

    // 1. CREATE / UPDATE
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const payload = { ...currentItem }
            // Hapus ID jika ada di payload agar tidak error saat Insert (ID biasanya auto-generated)
            if (!payload.id) delete payload.id
            delete payload.created_at

            if (currentItem.id) {
                // UPDATE
                const { error } = await supabase
                    .from('layanan')
                    .update(payload)
                    .eq('id', currentItem.id)

                if (error) throw error
            } else {
                // CREATE
                const { error } = await supabase
                    .from('layanan')
                    .insert([payload])

                if (error) throw error
            }

            // Refresh data
            router.refresh()
            closeModal()
            // Opsi: fetch ulang manual jika perlu real-time tanpa refresh page penuh
            window.location.reload()

        } catch (error: any) {
            alert('Gagal menyimpan: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

    // 2. DELETE
    const handleDelete = async () => {
        if (!currentItem.id) return
        setIsLoading(true)

        try {
            const { error } = await supabase
                .from('layanan')
                .delete()
                .eq('id', currentItem.id)

            if (error) throw error

            setIsDeleteModalOpen(false)
            window.location.reload()
        } catch (error: any) {
            alert('Gagal menghapus: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

    // Filter Search
    const filteredData = data.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="flex min-h-screen bg-gray-50">

            {/* SIDEBAR */}
            <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-2xl font-bold tracking-tight text-blue-400">AdminPanel</h2>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                    <NavItem icon={<FileText size={20} />} label="portofolio" />
                    <NavItem icon={<Users size={20} />} label="Pengguna" />
                    {/* <NavItem icon={<Settings size={20} />} label="Pengaturan" /> */}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center space-x-3 text-slate-400 hover:text-white transition w-full">
                        <LogOut size={20} />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col">

                {/* HEADER */}
                <header className="bg-white border-b h-16 flex items-center justify-between px-8">
                    <div className="flex items-center space-x-4 bg-gray-100 px-4 py-2 rounded-lg w-96">
                        <Search className="text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Cari data layanan..."
                            className="bg-transparent border-none focus:outline-none w-full text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                
            </main>

            {/* MODAL FORM (ADD/EDIT) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">
                            {currentItem.id ? 'Edit Layanan' : 'Tambah Layanan Baru'}
                        </h3>

                        <form onSubmit={handleSave} className="space-y-4">
                            {/* INPUT CONTOH - Silakan disesuaikan dengan kolom database Anda */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Layanan</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="Contoh: Pemasangan Plafon"
                                    value={currentItem.nama || ''}
                                    onChange={e => setCurrentItem({ ...currentItem, nama: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                                <textarea
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    rows={3}
                                    placeholder="Deskripsi layanan..."
                                    value={currentItem.deskripsi || ''}
                                    onChange={e => setCurrentItem({ ...currentItem, deskripsi: e.target.value })}
                                ></textarea>
                            </div>

                            {/* Hint untuk user */}
                            <div className="text-xs text-amber-600 bg-amber-50 p-2 rounded">
                                *Pastikan kolom <strong>nama</strong> dan <strong>deskripsi</strong> ada di tabel Supabase Anda, atau sesuaikan input form ini.
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {isLoading ? 'Menyimpan...' : 'Simpan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL DELETE CONFIRM */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trash2 size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Hapus Layanan?</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.
                        </p>
                        <div className="flex space-x-3 justify-center">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={isLoading}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50"
                            >
                                {isLoading ? 'Menghapus...' : 'Ya, Hapus'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

function NavItem({ icon, label, active }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={`
      flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition
      ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
    `}>
            {icon}
            <span className="font-medium">{label}</span>
        </div>
    )
}
