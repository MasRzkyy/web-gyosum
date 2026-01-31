'use client'

import TopBar from '@/components/admin/TopBar'

export default function DashboardHome() {
    return (
        <div className="flex flex-col h-full">
            <TopBar title="Dashboard" subtitle="Selamat datang di panel admin Gypsum Construction" />

            <div className="p-8">
                <div className="bg-white rounded-xl shadow-sm border p-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Selamat Datang, Admin!</h2>
                    <p className="text-gray-600 mb-6">
                        Gunakan menu di sidebar sebelah kiri untuk mengelola konten website Anda.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
                            <h3 className="font-semibold text-blue-700 mb-2">Layanan</h3>
                            <p className="text-sm text-blue-600 mb-4">Kelola daftar layanan dan harga.</p>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-100">
                            <h3 className="font-semibold text-emerald-700 mb-2">Pengguna</h3>
                            <p className="text-sm text-emerald-600 mb-4">Lihat daftar pengguna terdaftar.</p>
                        </div>
                        {/* Tambahkan widget info lainnya */}
                    </div>
                </div>
            </div>
        </div>
    )
}
