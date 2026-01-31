'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Clock, FileText, Tag, List, Plus, Pencil, Trash2, LayoutDashboard } from 'lucide-react'
import TopBar from '@/components/admin/TopBar'
import { supabase } from '../../supabase'

interface Layanan {
    id: number
    created_at?: string
    nama_layanan?: string
    [key: string]: any
}

interface JenisLayanan {
    id: number
    layanan_id: number
    jenis: string
    created_at?: string
}

export default function DetailClient({ item, jenisList = [] }: { item: Layanan, jenisList?: JenisLayanan[] }) {
    const router = useRouter()
    const [data, setData] = useState<JenisLayanan[]>(jenisList)

    // State for CRUD
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [currentJenis, setCurrentJenis] = useState<Partial<JenisLayanan>>({})
    const [isLoading, setIsLoading] = useState(false)

    if (!item) {
        return <div className="p-8 text-center">Data tidak ditemukan.</div>
    }

    // --- CRUD FUNCTIONS ---

    const openModal = (jenisItem?: JenisLayanan) => {
        setCurrentJenis(jenisItem || { layanan_id: item.id }) // Ensure layanan_id is set for new items
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentJenis({})
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!currentJenis.jenis) return

        setIsLoading(true)
        try {
            const payload = {
                layanan_id: item.id,
                jenis: currentJenis.jenis
            }

            if (currentJenis.id) {
                // Update
                const { error } = await supabase
                    .from('jenis_layanan')
                    .update({ jenis: currentJenis.jenis })
                    .eq('id', currentJenis.id)
                if (error) throw error
            } else {
                // Insert
                const { error } = await supabase
                    .from('jenis_layanan')
                    .insert([payload])
                if (error) throw error
            }

            router.refresh()
            closeModal()
            // Simple reload to reflect changes strictly (or we could optimistically update state)
            window.location.reload()
        } catch (error: any) {
            alert('Gagal menyimpan: ' + error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!currentJenis.id) return
        setIsLoading(true)
        try {
            const { error } = await supabase
                .from('jenis_layanan')
                .delete()
                .eq('id', currentJenis.id)
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
        <div className="flex flex-col h-full bg-gray-50">
            <TopBar title="Detail Layanan" subtitle="Informasi lengkap layanan" />

            <div className="p-8 max-w-5xl mx-auto w-full">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center text-gray-500 hover:text-blue-600 transition"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Kembali ke Daftar
                </button>

                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
                    {/* Header Card */}
                    <div className="bg-blue-600 p-8 text-white">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{item.nama_layanan || 'Tanpa Nama'}</h1>
                                <div className="flex items-center space-x-2 text-blue-100 opacity-80">
                                    <Tag size={16} />
                                    <span className="text-sm">Layanan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-8 border-b border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-1">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Nama Layanan</h3>
                                    <p className="text-lg text-gray-800 font-medium mt-1">
                                        {item.nama_layanan || '-'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-purple-50 rounded-lg text-purple-600 mt-1">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Dibuat Pada</h3>
                                    <p className="text-lg text-gray-800 font-medium mt-1">
                                        {item.created_at ? new Date(item.created_at).toLocaleString('id-ID') : '-'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECTION JENIS SERVICE (CRUD) */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                                <List size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Daftar Jenis Service</h3>
                        </div>
                        <button
                            onClick={() => openModal()}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-sm text-sm"
                        >
                            <Plus size={16} />
                            <span>Tambah Service</span>
                        </button>
                    </div>

                    <div className="p-0">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700 w-16 text-center">No</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700">Jenis Service</th>
                                    <th className="p-4 font-medium text-sm text-right w-32">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="p-8 text-center text-slate-400 italic">
                                            Belum ada jenis service untuk layanan ini.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((subItem, index) => (
                                        <tr
                                            key={subItem.id}
                                            className={`
                                      transition-colors duration-200 hover:bg-emerald-50/30 group
                                      ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                                  `}
                                        >
                                            <td className="p-4 text-center font-mono text-slate-500 border-r border-slate-100">
                                                {index + 1}
                                            </td>
                                            <td className="p-4 font-medium text-slate-700 border-r border-slate-100">
                                                {subItem.jenis}
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end items-center space-x-2">
                                                    <button
                                                        onClick={() => router.push(`/backend/jenis_layanan/${subItem.id}`)}
                                                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 rounded-md transition-all text-sm font-medium shadow-sm mr-2"
                                                        title="Isi Detail"
                                                    >
                                                        <span>jenis service</span>
                                                        <LayoutDashboard size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => openModal(subItem)}
                                                        className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                                                        title="Edit Service"
                                                    >
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setCurrentJenis(subItem)
                                                            setIsDeleteModalOpen(true)
                                                        }}
                                                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all"
                                                        title="Hapus Service"
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
            </div>

            {/* MODAL FORM (ADD/EDIT) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">
                            {currentJenis.id ? 'Edit Jenis Service' : 'Tambah Jenis Service'}
                        </h3>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Jenis Service</label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                                    value={currentJenis.jenis || ''}
                                    onChange={e => setCurrentJenis({ ...currentJenis, jenis: e.target.value })}
                                    placeholder="Contoh: Instalasi Listrik, Perbaikan Atap..."
                                    autoFocus
                                />
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                                <button type="submit" disabled={isLoading} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50">{isLoading ? 'Menyimpan...' : 'Simpan'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL DELETE */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={32} /></div>
                        <h3 className="text-lg font-bold mb-2">Hapus Jenis Service?</h3>
                        <p className="text-gray-500 mb-6 text-sm">Anda yakin ingin menghapus "{currentJenis.jenis}"?</p>
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
