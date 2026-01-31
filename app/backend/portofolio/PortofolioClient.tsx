'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, List, Upload, Image as ImageIcon, Link as LinkIcon } from 'lucide-react'
import TopBar from '@/components/admin/TopBar'
import { supabase } from '../supabase'
import Image from 'next/image'

interface Isi {
    id: number
    nama_service: string
}

interface PortofolioItem {
    id: number
    url_gambar?: string
    descript?: string
    isi_id?: number
    created_at?: string
    isi?: Isi // For joined data
}

export default function PortofolioClient({
    initialData,
    isiList
}: {
    initialData: PortofolioItem[],
    isiList: Isi[]
}) {
    const router = useRouter()
    const [data, setData] = useState<PortofolioItem[]>(initialData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const [currentItem, setCurrentItem] = useState<Partial<PortofolioItem>>({})
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    // --- HELPER FUNCTIONS ---

    // Find nama_service based on isi_id locally if join fails or for instant UI update
    const getIsiName = (id?: number) => {
        if (!id) return '-'
        return isiList.find(i => i.id === id)?.nama_service || 'ID: ' + id
    }

    // --- CRUD FUNCTIONS ---

    const openModal = (item?: PortofolioItem) => {
        setCurrentItem(item || {})
        setImageFile(null)
        setImagePreview(item?.url_gambar || null)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentItem({})
        setImageFile(null)
        setImagePreview(null)
        setIsLoading(false)
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImageFile(file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            let finalImageUrl = currentItem.url_gambar

            // 1. Upload Image
            if (imageFile) {
                const formData = new FormData()
                formData.append('file', imageFile)
                const uploadRes = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                })
                if (!uploadRes.ok) throw new Error('Gagal upload gambar')
                const uploadData = await uploadRes.json()
                finalImageUrl = uploadData.url
            }

            // 2. Prepare Payload
            const payload = {
                descript: currentItem.descript || '',
                isi_id: currentItem.isi_id ? Number(currentItem.isi_id) : null,
                url_gambar: finalImageUrl
            }

            if (currentItem.id) {
                // Update
                const { error } = await supabase
                    .from('portofolio')
                    .update(payload)
                    .eq('id', currentItem.id)
                if (error) throw error
            } else {
                // Insert
                const { error } = await supabase
                    .from('portofolio')
                    .insert([payload])
                if (error) throw error
            }

            router.refresh()
            closeModal()
            window.location.reload()
        } catch (error: any) {
            alert('Gagal menyimpan: ' + error.message)
            setIsLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!currentItem.id) return
        setIsLoading(true)
        try {
            const { error } = await supabase
                .from('portofolio')
                .delete()
                .eq('id', currentItem.id)
            if (error) throw error

            setIsDeleteModalOpen(false)
            window.location.reload()
        } catch (error: any) {
            alert('Gagal menghapus: ' + error.message)
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            <TopBar title="Manajemen Portofolio" subtitle="Kelola galeri project dan portofolio pekerjaan" />

            <div className="p-8 max-w-6xl mx-auto w-full">

                {/* TABLE CARD */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                <List size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Daftar Portofolio</h3>
                        </div>
                        <button
                            onClick={() => openModal()}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-sm text-sm"
                        >
                            <Plus size={16} />
                            <span>Tambah Portofolio</span>
                        </button>
                    </div>

                    <div className="p-0">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700 w-16 text-center">No</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700 w-32 text-center">Gambar</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700">Deskripsi</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700 w-1/4">Kategori Project (Isi)</th>
                                    <th className="p-4 font-medium text-sm text-right w-32">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-slate-400 italic">
                                            Belum ada data portofolio.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((item, index) => (
                                        <tr key={item.id} className={`transition-colors duration-200 hover:bg-slate-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                                            <td className="p-4 text-center font-mono text-slate-500 border-r border-slate-100 align-middle">
                                                {index + 1}
                                            </td>
                                            <td className="p-4 text-center border-r border-slate-100 align-middle">
                                                {item.url_gambar ? (
                                                    <div className="relative w-20 h-16 mx-auto rounded-lg overflow-hidden border border-slate-200">
                                                        <Image
                                                            src={item.url_gambar}
                                                            alt={item.descript || 'portfolio'}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="relative w-16 h-16 mx-auto rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                                                        <Image
                                                            src="/placeholder.svg"
                                                            alt="No Image"
                                                            fill
                                                            className="object-cover p-4 opacity-40"
                                                        />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="p-4 font-medium text-slate-700 border-r border-slate-100 align-middle">
                                                {item.descript || <span className="text-slate-400 italic">Tanpa deskripsi</span>}
                                            </td>
                                            <td className="p-4 text-slate-600 border-r border-slate-100 align-middle">
                                                <div className="flex items-center space-x-2">
                                                    <LinkIcon size={14} className="text-slate-400" />
                                                    <span className="text-sm">
                                                        {item.isi?.nama_service || getIsiName(item.isi_id)}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-right align-middle">
                                                <div className="flex justify-end items-center space-x-2">
                                                    <button onClick={() => openModal(item)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all" title="Edit">
                                                        <Pencil size={16} />
                                                    </button>
                                                    <button onClick={() => { setCurrentItem(item); setIsDeleteModalOpen(true) }} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all" title="Hapus">
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

            {/* MODAL FORM */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">{currentItem.id ? 'Edit Portofolio' : 'Tambah Portofolio'}</h3>
                        <form onSubmit={handleSave} className="space-y-4">

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Project</label>
                                <div className="flex items-center space-x-4">
                                    <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center border border-dashed border-slate-300 overflow-hidden relative">
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <ImageIcon className="text-slate-400" size={24} />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <label className="cursor-pointer bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition text-sm flex items-center justify-center space-x-2">
                                            <Upload size={16} />
                                            <span>Pilih Gambar...</span>
                                            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                                        </label>
                                        <p className="text-xs text-slate-500 mt-2">Diupload ke /public/uploads/portfolio</p>
                                    </div>
                                </div>
                            </div>

                            {/* Kategori (Isi ID) Dropdown */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori Project (Referensi)</label>
                                <select
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                    value={currentItem.isi_id || ''}
                                    onChange={e => setCurrentItem({ ...currentItem, isi_id: Number(e.target.value) })}
                                >
                                    <option value="">-- Pilih Referensi Service --</option>
                                    {isiList.map(isi => (
                                        <option key={isi.id} value={isi.id}>{isi.nama_service}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Deskripsi */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Project</label>
                                <textarea
                                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none"
                                    value={currentItem.descript || ''}
                                    onChange={e => setCurrentItem({ ...currentItem, descript: e.target.value })}
                                    placeholder="Jelaskan detail mengenai project ini..."
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

            {/* MODAL DELETE */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={32} /></div>
                        <h3 className="text-lg font-bold mb-2">Hapus Portofolio?</h3>
                        <p className="text-gray-500 mb-6 text-sm">Anda yakin ingin menghapus data ini selamanya?</p>
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
