"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
    const router = useRouter()

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn")
        if (loggedIn !== "true") {
            router.replace("/login")
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("loggedIn")
        router.push("/login")
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-6">Welcome to Meetio!</h1>
            <p className="mb-8 text-lg">You have successfully logged in.</p>
            <button
                onClick={handleLogout}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition"
            >
                Logout
            </button>
        </div>
    )
}
