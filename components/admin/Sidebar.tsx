'use client'

import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    LogOut,
    Briefcase
} from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

interface SidebarProps {
    isOpen?: boolean
    onClose?: () => void
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
    const router = useRouter()
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

    return (
        <>
            <aside
                className={`
                    bg-slate-900 text-white flex flex-col
                    fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out
                    md:relative md:translate-x-0
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-blue-400">AdminPanel</h2>
                    {/* Close Button for Mobile */}
                    <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
                        <LogOut size={20} className="rotate-180" />
                        {/* Using LogOut rotated as a back/close arrow makeshift or just X if preferred */}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <NavItem
                        icon={<LayoutDashboard size={20} />}
                        label="Dashboard"
                        active={pathname === '/backend'}
                        onClick={() => { router.push('/backend'); onClose?.(); }}
                    />
                    <NavItem
                        icon={<FileText size={20} />}
                        label="Layanan"
                        active={isActive('/backend/layanan')}
                        onClick={() => { router.push('/backend/layanan'); onClose?.(); }}
                    />
                    <NavItem
                        icon={<Users size={20} />}
                        label="Pengguna"
                        active={isActive('/backend/users')}
                        onClick={() => { router.push('/backend/users'); onClose?.(); }}
                    />
                    <NavItem
                        icon={<Briefcase size={20} />}
                        label="Portofolio"
                        active={isActive('/backend/portofolio')}
                        onClick={() => { router.push('/backend/portofolio'); onClose?.(); }}
                    />
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center space-x-3 text-slate-400 hover:text-white transition w-full">
                        <LogOut size={20} />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

function NavItem({ icon, label, active, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`
        flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition
        ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
      `}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </div>
    )
}
