import AdminLayoutClient from '@/components/admin/AdminLayoutClient'

export default function BackendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminLayoutClient>
            {children}
        </AdminLayoutClient>
    );
}
