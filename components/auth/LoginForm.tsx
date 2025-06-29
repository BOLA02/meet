"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { loginUser } from "@/lib/authService"

// Define form schema with validation rules
const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
    password: z.string().min(1, { message: "Password is required" }).min(6, { message: "Password must be at least 6 characters" }),
    staySignedIn: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
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
        setSuccess(null)

        try {
            // Simulate API call for demo purposes
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            // Use your existing loginUser function
            const response = await loginUser(data.email, data.password)
            
            if (response.token) {
                setSuccess("Login successful! Redirecting...")
                console.log("Login successful:", response)
                
                // Configuration - Main app running on localhost
                const MAIN_APP_URL = "http://localhost:3000"
                
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
                
                // Redirect to main application after a short delay
                setTimeout(() => {
                    window.location.href = redirectUrl.toString()
                }, 1000)
            }
        } catch (error) {
            console.error("Login error:", error)
            setError(error instanceof Error ? error.message : "Login failed. Please check your credentials and try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md space-y-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
                <p className="text-gray-300">
                    New to Meet?{" "}
                    <Link href="/register" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium">
                        Create an account
                    </Link>
                </p>
            </div>

            {/* Success/Error Messages */}
            {success && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <p className="text-sm text-green-400">{success}</p>
                </div>
            )}

            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                    <p className="text-sm text-red-400">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email address
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email")}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white bg-dark-500/50 placeholder:text-gray-400 transition-all duration-200 ${
                            errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-600 hover:border-gray-500"
                        }`}
                        disabled={isLoading}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-200">
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            {...register("password")}
                            className={`w-full px-4 py-3 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white bg-dark-500/50 placeholder:text-gray-400 transition-all duration-200 ${
                                errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-600 hover:border-gray-500"
                            }`}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded"
                            tabIndex={-1}
                            disabled={isLoading}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {errors.password.message}
                        </p>
                    )}
                    <div className="text-right">
                        <Link 
                            href="/forgot-password" 
                            className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="staySignedIn"
                        {...register("staySignedIn")}
                        disabled={isLoading}
                    />
                    <label
                        htmlFor="staySignedIn"
                        className="text-sm text-gray-300 cursor-pointer"
                    >
                        Keep me signed in
                    </label>
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25" 
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        "Sign in to your account"
                    )}
                </Button>

                <div className="text-xs text-center text-gray-400">
                    By signing in, you agree to Meet's{" "}
                    <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                        Privacy Policy
                    </Link>
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-dark-600 px-4 text-gray-400">or continue with</span>
                </div>
            </div>

            <div className="space-y-3">
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-600 bg-dark-500/50 px-4 py-3 text-sm font-medium text-gray-300 hover:bg-dark-500 hover:border-gray-500 transition-all duration-200"
                    disabled={isLoading}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
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
            </div>
        </div>
    )
}
