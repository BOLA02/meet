"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { loginUser } from "@/lib/authService" // Import the auth service

// Define form schema with validation rules
const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
    staySignedIn: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null) // Add error state
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            staySignedIn: false,
        },
    })

    const onSubmit = async (data: FormValues) => {
    setIsLoading(true)
    setError(null)

    try {
        // Use your existing loginUser function
        const response = await loginUser(data.email, data.password)
        
        if (response.token) {
            console.log("Login successful:", response)
            
            // Configuration - Main app running on localhost
            const MAIN_APP_URL = "http://localhost:3000" // Update port if different
            
            // Build redirect URL with auth data as query parameters
            const redirectUrl = new URL(`${MAIN_APP_URL}/auth/callback`)
            redirectUrl.searchParams.append('token', response.token)
            redirectUrl.searchParams.append('userId', response.userId)
            redirectUrl.searchParams.append('role', response.role)
            
            // Optional: Add stay signed in flag
            if (data.staySignedIn) {
                redirectUrl.searchParams.append('staySignedIn', 'true')
            }
            
            // Optional: Add return URL for after login
            redirectUrl.searchParams.append('returnUrl', '/dashboard')
            
            console.log("Redirecting to:", redirectUrl.toString())
            
            // Redirect to main application
            window.location.href = redirectUrl.toString()
        }
    } catch (error) {
        console.error("Login error:", error)
        setError(error instanceof Error ? error.message : "Login failed. Please try again.")
    } finally {
        setIsLoading(false)
    }
}

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Log in to your Account</h1>
                <p className="text-sm text-gray-200">
                    New to Meet?{" "}
                    <Link href="/register" className="text-purple-600 hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                        className={`w-full px-3 py-2 border  border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 text-white bg-transparent ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...register("password")}
                            className={`w-full px-3 py-2 border border-gray-700 rounded-md pr-10 focus:outline-none focus:ring-1 focus:ring-purple-500 text-white bg-transparent ${errors.password ? "border-red-500" : ""}`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                    <div className="text-right">
                        <Link href="/forgot-password" className="text-xs text-purple-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        "Log In"
                    )}
                </Button>

                <div className="text-xs text-center text-gray-500">
                    By logging in, you agree to Meetio's{" "}
                    <Link href="/terms" className="text-purple-600 hover:underline">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-purple-600 hover:underline">
                        Privacy Statement
                    </Link>
                </div>
            </form>


            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs ">
                    <span className="bg-dark-600 rounded-full px-2 text-gray-500">or</span>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300px-3 py-2 text-sm font-medium hover:bg-gray-800"
                >
                    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
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
                    Continue with Google
                </button>

                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path
                            fill="#1877F2"
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                    </svg>
                    Continue with Facebook
                </button>
            </div>

            <div className="flex justify-center items-center space-x-2">
                <Checkbox id="staySignedIn" {...register("staySignedIn")} />
                <label
                    htmlFor="staySignedIn"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Stay signed in
                </label>
            </div>
        </div>
    )
}
