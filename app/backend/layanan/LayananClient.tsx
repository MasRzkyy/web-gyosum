'use client'

import { useState } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation'
import {
    Plus,
    Pencil,
    Trash2,
    LayoutDashboard
} from 'lucide-react'
import TopBar from '@/components/admin/TopBar'

interface Layanan {
    id: number
    created_at?: string
    nama_layanan?: string
    [key: string]: any
}

export default function LayananClient({ initialData }: { initialData: Layanan[] }) {
    const router = useRouter()
    const [data, setData] = useState<Layanan[]>(initialData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState<Partial<Layanan>>({})
    const [isLoading, setIsLoading] = useState(false)

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
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const payload = { ...currentItem }
            if (!payload.id) delete payload.id
            delete payload.created_at

            if (currentItem.id) {
                const { error } = await supabase
                    .from('layanan')
                    .update(payload)
                    .eq('id', currentItem.id)
                if (error) throw error
            } else {
                const { error } = await supabase
                    .from('layanan')
                    .insert([payload])
                if (error) throw error
            }
            router.refresh()
            closeModal()
            window.location.reload()
        } catch (error: any) {
            alert('Gagal menyimpan: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

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

    return (
        <div className="flex flex-col h-full">
            <TopBar title="Manajemen Layanan" subtitle="Kelola daftar layanan Gypsum Anda" />

            <div className="p-8">
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => openModal()}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-lg shadow-blue-200"
                    >
                        <Plus size={20} />
                        <span>Tambah Layanan</span>
                    </button>
                </div>

                {/* TABLE DATA */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-800 text-white">
                            <tr>
                                <th className="p-4 font-medium text-sm border-r border-slate-700 w-16 text-center">No</th>
                                <th className="p-4 font-medium text-sm border-r border-slate-700 last:border-r-0">Nama Layanan</th>
                                <th className="p-4 font-medium text-sm text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {data.length === 0 ? (
                                <tr>
                                    <td colSpan={2} className="p-8 text-center text-slate-400 italic">
                                        Tidak ada data layanan ditemukan.
                                    </td>
                                </tr>
                            ) : (
                                data.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`
                                            transition-colors duration-200 hover:bg-blue-50/50 group
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}
                                        `}
                                    >
                                        <td className="p-4 text-center font-mono text-slate-500 border-r border-slate-100">
                                            {index + 1}
                                        </td>
                                        <td className="p-4 border-r border-slate-100 group-hover:border-blue-100">
                                            <div className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">
                                                {item.nama_layanan || '(Tanpa Nama)'}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex justify-end items-center space-x-2">
                                                <button
                                                    onClick={() => router.push(`/backend/layanan/${item.id}`)}
                                                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 rounded-md transition-all text-sm font-medium shadow-sm"
                                                    title="Lihat Detail"
                                                >
                                                    <span>jenis layanan</span>
                                                    <LayoutDashboard size={14} />
                                                </button>

                                                <div className="h-4 w-px bg-slate-200 mx-2"></div>

                                                <button
                                                    onClick={() => openModal(item)}
                                                    className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                                                    title="Edit Layanan"
                                                >
                                                    <Pencil size={16} />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setCurrentItem(item)
                                                        setIsDeleteModalOpen(true)
                                                    }}
                                                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
                                                    title="Hapus Layanan"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL FORM (ADD/EDIT) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">
                            {currentItem.id ? 'Edit Layanan' : 'Tambah Layanan Baru'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Layanan</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={currentItem.nama_layanan || ''}
                                    onChange={e => setCurrentItem({ ...currentItem, nama_layanan: e.target.value })}
                                />
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                                <button type="submit" disabled={isLoading} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">{isLoading ? 'Menyimpan...' : 'Simpan'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={32} /></div>
                        <h3 className="text-lg font-bold mb-2">Hapus Layanan?</h3>
                        <div className="flex space-x-3 justify-center">
                            <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Ya, Hapus</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
