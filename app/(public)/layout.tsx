import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </SmoothScroll>
    );
}
