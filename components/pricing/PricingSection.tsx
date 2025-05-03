"use client"

import { useState } from "react"
import { CheckIcon, InfoIcon, ArrowRightIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function PricingSection() {
    const [isMonthly, setIsMonthly] = useState(true)

    const pricingPlans = [
        {
            name: "Basic",
            price: isMonthly ? 19 : 190,
            popular: true,
            features: [
                "Host up to 5 events per month",
                "AI generated event descriptions and scheduling assistance",
                "Custom event branding (Logo, colors)",
                "Access to event recording (up to 3 hours)",
            ],
            bestFor: "Best for small businesses and casual event hosts",
        },
        {
            name: "Pro",
            price: isMonthly ? 49 : 490,
            popular: false,
            features: [
                "Host up to 5 events per month",
                "AI generated event descriptions and scheduling assistance",
                "Custom event branding (Logo, colors)",
                "Access to event recording (up to 3 hours)",
            ],
            bestFor: "Best for small businesses and casual event hosts",
        },
        {
            name: "Enterprise",
            price: isMonthly ? 99 : 990,
            popular: false,
            features: [
                "Host up to 5 events per month",
                "AI generated event descriptions and scheduling assistance",
                "Custom event branding (Logo, colors)",
                "Access to event recording (up to 3 hours)",
            ],
            bestFor: "Best for small businesses and casual event hosts",
        },
    ]

    const addOns = [
        "Additional Event attendees - $10 per 100 extra attendees",
        "Extended event recording storage - $5 per month for extra 6 months",
        "Advanced analytics dashboard - $15 per month",
    ]

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Ready to get started?</h1>
                <p className="text-gray-400">Choose a plan that befits your needs</p>

                <div className="flex justify-center items-center mt-6 mb-8">
                    <div className="flex -space-x-2 overflow-hidden mr-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Avatar key={i} className="border-2 border-black w-8 h-8">
                                <AvatarImage src={`/assets/user2?height=32&width=32`} />
                                <AvatarFallback>U{i}</AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                    <Badge className="bg-purple-600 text-white text-xs py-1">Join 10,000+ users worldwide</Badge>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className={`font-medium ${isMonthly ? "text-white" : "text-gray-500"}`}>Monthly</span>
                    <Switch
                        checked={!isMonthly}
                        onCheckedChange={() => setIsMonthly(!isMonthly)}
                        className="data-[state=checked]:bg-purple-400"
                    />
                    <span className={`font-medium ${!isMonthly ? "text-white" : "text-gray-500"}`}>Yearly</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={plan.name}
                        className={`rounded-lg p-8 ${index === 0
                            ? "bg-gray-900 border border-gray-800"
                            : index === 1
                                ? "bg-purple-900"
                                : "bg-purple-600 text-white"
                            }`}
                    >
                        {plan.popular && (
                            <div className="mb-4 flex items-center">
                                <span className="text-amber-500 mr-1">★</span>
                                <span className="text-sm font-medium">Most popular</span>
                            </div>
                        )}

                        <h2 className="text-2xl font-bold mb-6">{plan.name}</h2>

                        <div className="mb-6">
                            <span className="text-5xl font-bold">${plan.price}</span>
                            <span className={`${index === 2 ? "text-purple-100" : "text-gray-400"}`}>
                                {isMonthly ? "/mo" : "/year"}
                            </span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckIcon className={`h-5 w-5 mr-2 mt-0.5 ${index === 2 ? "text-purple-100" : "text-purple-400"}`} />
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-start mb-6">
                            <InfoIcon className={`h-5 w-5 mr-2 ${index === 2 ? "text-purple-100" : "text-gray-400"}`} />
                            <span className={`text-xs ${index === 2 ? "text-purple-100" : "text-gray-400"}`}>{plan.bestFor}</span>
                        </div>

                        <button
                            className={`w-full py-2 px-4 rounded flex items-center justify-center ${index === 0
                                ? "bg-purple-600 text-white hover:bg-purple-700"
                                : index === 1
                                    ? "bg-purple-800 text-white hover:bg-purple-700"
                                    : "bg-white text-purple-600 hover:bg-gray-100"
                                } transition-colors duration-200`}
                        >
                            Learn More
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="max-w-2xl mx-auto mt-12 bg-purple-600 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Add-ons (Available for all plans)</h3>
                <ul className="space-y-2 text-center">
                    {addOns.map((addon, i) => (
                        <li key={i} className="text-sm">
                            {addon}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
