'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 w-full bg-slate-900 text-white z-40 px-4 h-16 flex items-center justify-between shadow-md">
                <h2 className="text-xl font-bold text-blue-400">AdminPanel</h2>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar (Responsive) */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden pt-16 md:pt-0">
                {/* pt-16 only on mobile to account for fixed header */}
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </main>

            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}
