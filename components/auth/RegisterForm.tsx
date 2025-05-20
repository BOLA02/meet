"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const router = useRouter()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    }

    const buttonVariants = {
        hover: { scale: 1.03, transition: { duration: 0.2 } },
        tap: { scale: 0.97 },
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Simple form validation
        let isValid = true

        // Email validation
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Please enter a valid email address.")
            isValid = false
        } else {
            setEmailError("")
        }

        // Password validation
        if (!password || password.length < 8) {
            setPasswordError("Password must be at least 8 characters long.")
            isValid = false
        } else {
            setPasswordError("")
        }

        // If valid, proceed with form submission (e.g., send data to server)
        if (isValid) {
            console.log("Form submitted", { email, password })

            setTimeout(() => {
                // After successful "registration", route to login page
                router.push("/login")
            }, 1000)
        }
    }

    return (
        <div className="flex h-screen bg-dark-600/80 text-gray-100">
            {/* Left side - Sign Up Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                <motion.div className="max-w-md mx-auto w-full" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1 variants={itemVariants} className="text-2xl text-center font-bold mb-1 text-white">
                        Sign Up
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-sm mb-6 text-gray-300 text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
                            Log in
                        </Link>
                    </motion.p>

                    <motion.form variants={itemVariants} className="space-y-4" onSubmit={handleSubmit}>
                        <motion.div variants={itemVariants}>
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 text-white"
                                placeholder="email@example.com"
                            />
                            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-300">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white"
                                    placeholder="At least 8 characters..."
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                                    aria-label="Toggle password visibility"
                                >
                                    <Eye className="h-5 w-5" />
                                </button>
                            </div>
                            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Sign Up
                        </motion.button>
                    </motion.form>

                    <motion.p variants={itemVariants} className="text-xs text-center mt-4 text-gray-400">
                        By continuing you agree to Meetio's
                        <br />
                        <Link href="/terms" className="underline hover:text-purple-400 transition-colors">
                            Terms of Service
                        </Link>
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-dark-600 rounded-full text-gray-400">or</span>
                        </div>
                    </motion.div>

                    <div className="mt-6 space-y-3">
                        <motion.button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 border border-gray-700 rounded-full py-2 px-4 hover:bg-gray-800 transition-colors text-white"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                    <path
                                        fill="#4285F4"
                                        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                                    />
                                </g>
                            </svg>
                            Sign Up with Google
                        </motion.button>

                        <motion.button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 border border-gray-700 rounded-full py-2 px-4 hover:bg-gray-800 transition-colors text-white"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    fill="#1877F2"
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                />
                            </svg>
                            Sign Up Facebook
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Right side - Image with animated overlay */}
            <div className="hidden lg:block md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-purple-900/30 z-10"
                    animate={{
                        opacity: [0.5, 0.7, 0.5],
                        background: [
                            "linear-gradient(to right, rgba(19, 78, 74, 0.3), rgba(88, 28, 135, 0.3))",
                            "linear-gradient(to right, rgba(15, 118, 110, 0.3), rgba(124, 58, 237, 0.3))",
                            "linear-gradient(to right, rgba(19, 78, 74, 0.3), rgba(88, 28, 135, 0.3))",
                        ],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <Image
                    src="/Rectangle 22.svg"
                    alt="People in a meeting"
                    fill
                    className="object-cover"
                    priority
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2
                        className="text-white text-5xl font-bold"
                        animate={{
                            textShadow: [
                                "0 0 8px rgba(20, 184, 166, 0.5)",
                                "0 0 16px rgba(20, 184, 166, 0.8)",
                                "0 0 8px rgba(20, 184, 166, 0.5)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                        Meetio
                    </motion.h2>
                </motion.div>
            </div>
        </div>
    )
}
