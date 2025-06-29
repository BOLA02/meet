"use client"

import { useState } from "react"
import { CheckIcon, InfoIcon, ArrowRightIcon, Star, Zap, Crown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
    const [isMonthly, setIsMonthly] = useState(true)

    const pricingPlans = [
        {
            name: "Basic",
            price: isMonthly ? 19 : 190,
            popular: false,
            icon: <Zap className="h-6 w-6" />,
            features: [
                "Host up to 5 events per month",
                "AI generated event descriptions and scheduling assistance",
                "Custom event branding (Logo, colors)",
                "Access to event recording (up to 3 hours)",
                "Basic analytics and reporting",
                "Email support",
            ],
            bestFor: "Best for small businesses and casual event hosts",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20",
        },
        {
            name: "Pro",
            price: isMonthly ? 49 : 490,
            popular: true,
            icon: <Star className="h-6 w-6" />,
            features: [
                "Everything in Basic, plus:",
                "Host up to 20 events per month",
                "Advanced AI features and automation",
                "Priority customer support",
                "Advanced analytics dashboard",
                "Custom integrations",
                "Team collaboration tools",
            ],
            bestFor: "Best for growing teams and professional event organizers",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20",
        },
        {
            name: "Enterprise",
            price: isMonthly ? 99 : 990,
            popular: false,
            icon: <Crown className="h-6 w-6" />,
            features: [
                "Everything in Pro, plus:",
                "Unlimited events and participants",
                "Enterprise-grade security & compliance",
                "Dedicated account manager",
                "Custom API access",
                "Advanced reporting & analytics",
                "24/7 phone support",
            ],
            bestFor: "Best for large organizations and enterprise teams",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20",
        },
    ]

    const addOns = [
        "Additional Event attendees - $10 per 100 extra attendees",
        "Extended event recording storage - $5 per month for extra 6 months",
        "Advanced analytics dashboard - $15 per month",
        "Custom integrations - $25 per month",
        "Priority support - $20 per month",
    ]

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    Ready to get started?
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Choose a plan that fits your needs. All plans include a 14-day free trial.
                </p>

                <div className="flex justify-center items-center mb-8">
                    <div className="flex -space-x-2 overflow-hidden mr-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Avatar key={i} className="border-2 border-dark-600 w-10 h-10">
                                <AvatarImage src={`/assets/user${i}.png`} />
                                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-cyan-400 text-white font-bold">
                                    U{i}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                    <Badge className="bg-purple-600 text-white text-sm py-2 px-4">
                        Join 10,000+ users worldwide
                    </Badge>
                </div>

                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`font-medium transition-colors duration-200 ${isMonthly ? "text-white" : "text-gray-500"}`}>
                        Monthly
                    </span>
                    <Switch
                        checked={!isMonthly}
                        onCheckedChange={() => setIsMonthly(!isMonthly)}
                        className="data-[state=checked]:bg-purple-400"
                    />
                    <span className={`font-medium transition-colors duration-200 ${!isMonthly ? "text-white" : "text-gray-500"}`}>
                        Yearly
                    </span>
                    {!isMonthly && (
                        <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                            Save 20%
                        </Badge>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                            plan.popular 
                                ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20" 
                                : "bg-dark-500/50 border border-dark-300/20 hover:border-dark-300/40"
                        }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full">
                                    <Star className="h-3 w-3 mr-1" />
                                    Most Popular
                                </Badge>
                            </div>
                        )}

                        <div className="text-center mb-8">
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.bgColor} ${plan.borderColor} border mb-4`}>
                                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                                    {plan.icon}
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-white">${plan.price}</span>
                                <span className="text-gray-400 ml-2">
                                    {isMonthly ? "/mo" : "/year"}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckIcon className={`h-5 w-5 mr-3 mt-0.5 text-green-400 flex-shrink-0`} />
                                    <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-start mb-8">
                            <InfoIcon className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-400 leading-relaxed">{plan.bestFor}</span>
                        </div>

                        <Button
                            className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 group ${
                                plan.popular
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/30"
                                    : "bg-dark-400 hover:bg-dark-300 text-white border border-dark-300 hover:border-dark-200"
                            }`}
                        >
                            Get Started
                            <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                        Add-ons (Available for all plans)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addOns.map((addon, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-dark-500/50 rounded-lg border border-dark-300/20 hover:border-purple-500/30 transition-colors duration-200">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-sm text-gray-300">{addon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-400 mb-4">
                    Need a custom plan? Contact our sales team
                </p>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                    Contact Sales
                </Button>
            </div>
        </div>
    )
}
