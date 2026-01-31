'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, List, User, Lock, Eye, EyeOff } from 'lucide-react'
import TopBar from '@/components/admin/TopBar'
import { supabase } from '../supabase'

interface UserItem {
    id: number
    nama: string
    password?: string
    created_at?: string
}

export default function UsersClient({
    initialData
}: {
    initialData: UserItem[]
}) {
    const router = useRouter()
    const [data, setData] = useState<UserItem[]>(initialData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [currentItem, setCurrentItem] = useState<Partial<UserItem>>({})
    const [isLoading, setIsLoading] = useState(false)

    // --- CRUD FUNCTIONS ---

    const openModal = (item?: UserItem) => {
        setCurrentItem(item || {})
        setShowPassword(false)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentItem({})
        setIsLoading(false)
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const payload = {
                nama: currentItem.nama || '',
                password: currentItem.password || ''
            }

            if (currentItem.id) {
                // Update
                const { error } = await supabase
                    .from('user')
                    .update(payload)
                    .eq('id', currentItem.id)
                if (error) throw error
            } else {
                // Insert
                const { error } = await supabase
                    .from('user')
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
                .from('user')
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
            <TopBar title="Manajemen Pengguna" subtitle="Kelola akun administrator panel" />

            <div className="p-8 max-w-5xl mx-auto w-full">

                {/* TABLE CARD */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                                <List size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Daftar Admin</h3>
                        </div>
                        <button
                            onClick={() => openModal()}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-sm text-sm"
                        >
                            <Plus size={16} />
                            <span>Tambah User</span>
                        </button>
                    </div>

                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700 w-16 text-center">No</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700">Nama Lengkap</th>
                                    <th className="p-4 font-medium text-sm border-r border-slate-700">Password (Hashed/Hidden)</th>
                                    <th className="p-4 font-medium text-sm text-right w-32">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-slate-400 italic">
                                            Belum ada data pengguna.
                                        </td>
                                    </tr>
                                ) : (
                                    data.map((item, index) => (
                                        <tr key={item.id} className={`transition-colors duration-200 hover:bg-slate-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                                            <td className="p-4 text-center font-mono text-slate-500 border-r border-slate-100 align-middle">
                                                {index + 1}
                                            </td>
                                            <td className="p-4 font-medium text-slate-700 border-r border-slate-100 align-middle">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                                                        {item.nama.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span>{item.nama}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-slate-400 border-r border-slate-100 align-middle font-mono text-sm">
                                                ••••••••••••
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
                    <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">{currentItem.id ? 'Edit User' : 'Tambah User Admin'}</h3>
                        <form onSubmit={handleSave} className="space-y-4">

                            {/* Nama */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                        value={currentItem.nama || ''}
                                        onChange={e => setCurrentItem({ ...currentItem, nama: e.target.value })}
                                        placeholder="Username / Nama"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {currentItem.id ? 'Ganti Password (Opsional)' : 'Password'}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required={!currentItem.id}
                                        className="w-full border rounded-lg pl-10 pr-10 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                        value={currentItem.password || ''}
                                        onChange={e => setCurrentItem({ ...currentItem, password: e.target.value })}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {currentItem.id && (
                                    <p className="text-[10px] text-gray-400 mt-1">* Kosongkan jika tidak ingin mengganti password</p>
                                )}
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                                <button type="submit" disabled={isLoading} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">{isLoading ? 'Menyimpan...' : 'Simpan'}</button>
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
                        <h3 className="text-lg font-bold mb-2">Hapus User?</h3>
                        <p className="text-gray-500 mb-6 text-sm">Akses admin untuk user ini akan dicabut selamanya.</p>
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
