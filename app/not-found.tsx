'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center max-w-md"
            >
                <Image
                    src="/404.png" 
                    alt="Page not found"
                    width={300}
                    height={300}
                    className="mb-6"
                />
                <p className="text-lg text-gray-400 mb-6">
                    Sorry, we couldn’t find the page you were looking for. <br />
                    It might have been removed or renamed.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/">
                        <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-2">
                            Return to Homepage
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}
