import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/nav/navbar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'nathanmaire',
    description: 'Nathan Maire Website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <SidebarProvider>
                    <Navbar />
                    <main className='w-full'>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}
