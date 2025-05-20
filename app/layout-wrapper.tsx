'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import React from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // List of routes where Navbar and Footer should be hidden
    const hideLayoutRoutes = ['/login', '/register', '/forgot-password', '/not-found', '/welcome', ]

    const shouldHideLayout = hideLayoutRoutes.includes(pathname)

    return (
        <>
            {!shouldHideLayout && <Navbar />}
                {children}
            {!shouldHideLayout && <Footer />}
        </>
    )
}
