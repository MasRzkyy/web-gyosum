'use client'

import { Search } from 'lucide-react'

export default function TopBar({ title, subtitle }: { title?: string, subtitle?: string }) {
    return (
        <header className="bg-white border-b h-16 flex items-center justify-between px-8">
            {/* Search Bar / Breadcrumbs area */}
            <div className="flex flex-col justify-center">
                {title && <h1 className="text-lg font-bold text-gray-800">{title}</h1>}
                {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            </div>

            <div className="flex items-center space-x-4">
                {/* User Profile */}
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    A
                </div>
            </div>
        </header>
    )
}
