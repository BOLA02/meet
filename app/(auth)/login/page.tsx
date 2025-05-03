'use client'

import React from 'react'
import Image from "next/image"
import LoginForm from '@/components/auth/LoginForm'
import { motion } from 'framer-motion'

export default function Page() {
    return (
        <main className="flex min-h-screen bg-dark-600/60 flex-col md:flex-row">
            {/* Left side - Background image with logo */}
            <div className="relative flex-1 bg-gray-900">
                <Image
                    src="/Rectangle 22.svg"
                    alt="People in a meeting"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl font-bold text-white"
                    >
                        Meetio
                    </motion.h1>
                </div>
            </div>

            {/* Right side - Login form */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-1 items-center justify-center p-6 md:p-10"
            >
                <LoginForm />
            </motion.div>
        </main>
    )
}
