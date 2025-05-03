'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ForgotPasswordFormValues {
    email: string
}

export default function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordFormValues>()

    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (data: ForgotPasswordFormValues) => {
        console.log(data)
        setTimeout(() => {
            setSubmitted(true)
        }, 1000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-600/60 px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-md p-6 rounded-lg border border-gray-900 shadow-md bg-black/40 backdrop-blur"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>

                {submitted ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-purple-600 text-sm text-center"
                    >
                        If your email is registered, you will receive reset instructions.
                    </motion.p>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register('email', { required: 'Email is required' })}
                                className={`bg-transparent ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            Send Reset Link
                        </Button>
                    </form>
                )}
            </motion.div>
        </div>
    )
}
