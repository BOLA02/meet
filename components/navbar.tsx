"use client"
import { products, solutions } from '@/index'
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, ChevronUp, Menu, X } from "lucide-react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <header className="border-b border-dark-300/20 bg-dark-600/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center">
                        <span className="text-xl font-bold text-purple-400">Meet</span>
                    </Link>


                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex list-none justify-between space-x-8 items-center">
                        <li className="relative group">
                            <Link href="/" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">Products</Link>
                            {/* Dropdown */}
                            <div className="absolute left-0 top-12 mt-1 w-[750px] bg-dark-500 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="grid grid-cols-2 gap-1 p-4">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex flex-col">
                                            <h3 className="text-lg text-gray-300 transition-colors">{product.title}</h3>
                                            <span className='border-b border-gray-300 mt-1 w-[300px]'></span>
                                            <ul className="mt-1 flex flex-col gap-1 mb-6">
                                                {product.links.map((item) => (
                                                    <li key={item.link} className="flex items-center text-md gap-1 hover:text-white cursor-pointer text-purple-400">
                                                        <Check className='text-white  transition-colors' />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link href="/" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">Solutions</Link>
                            {/* Dropdown */}
                            <div className="absolute left-0 top-12 mt-1 w-[900px] bg-dark-500 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="grid grid-cols-2 gap-1 p-4">
                                    {solutions.map((solution) => (
                                        <div key={solution.id} className="flex flex-col">
                                            <h3 className="text-lg text-gray-300 transition-colors">{solution.title}</h3>
                                            <span className='border-b border-gray-300 mt-1 w-[300px]'></span>

                                            <ul className="mt-1 flex flex-col gap-1 mb-6">
                                                {solution.links.map((item) => (
                                                    <li key={item.link} className="flex items-center text-purple-400 hover:text-white gap-1 cursor-pointer">
                                                        <Check className='text-gray-300 transition-colors' />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li><Link href="/about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">Contact</Link></li>
                        <li><Link href="/pricing" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">Pricing</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                    <Link
                        href="#"
                        className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                    >
                        Log in
                    </Link>
                    <Button className="rounded-full bg-purple-500 px-4 py-2 text-dark-600 hover:bg-purple-400 transition-colors shadow-md hover:shadow-purple-500/20">
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[40px] text-white cursor-pointer">
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-0 w-full h-screen bg-dark-600 z-40 p-6 lg:hidden">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <button onClick={() => toggleDropdown("products")} className="flex cursor-pointer text-white hover:text-purple-400 justify-between w-full text-left text-lg">
                                Products
                                <span className="cursor-pointer">{dropdownOpen === "products" ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>
                            {dropdownOpen === "products" && (
                                <div className="mt-1 p-4 bg-gray-950 rounded-lg overflow-scroll">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex flex-col">
                                            <h3 className="text-lg text-gray-300 hover:text-purple-400 transition-colors">{product.title}</h3>
                                            <span className='border-b border-gray-100 mt-1 w-[300px]'></span>

                                            <ul className="mt-1 mb-6">
                                                {product.links.map((item) => (
                                                    <li key={item.link} className="flex items-center gap-1 text-gray-100 hover:text-purple-400 transition-colors cursor-pointer">
                                                        <Check className='text-gray-100 hover:text-purple-400 transition-colors' />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <button onClick={() => toggleDropdown("solutions")} className="flex cursor-pointer justify-between hover:text-purple-400 w-full text-left text-lg text-white">
                                Solutions
                                <span className="cursor-pointer">{dropdownOpen === "solutions" ? <ChevronUp /> : <ChevronDown />}</span>
                            </button>
                            {dropdownOpen === "solutions" && (
                                <div className="mt-1 p-4 bg-gray-950 rounded-lg overflow-scroll">
                                    {solutions.map((solution) => (
                                        <div key={solution.id} className="flex flex-col">
                                            <h3 className="text-lg text-gray-300 hover:text-purple-400 transition-colors">{solution.title}</h3>
                                            <span className='border-b border-gray-100 mt-1 w-[300px]'></span>

                                            <ul className="mt-1 mb-6">
                                                {solution.links.map((item) => (
                                                    <li key={item.link} className="flex items-center gap-1 text-gray-100 hover:text-purple-400 transition-colors cursor-pointer">
                                                        <Check className='text-gray-100 hover:text-purple-400 transition-colors' />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li><Link href="/about" className="text-lg text-gray-100 hover:text-purple-400 transition-colors" onClick={() => setMenuOpen(false)}>About us</Link></li>
                        <li><Link href="/contact" className="text-lg text-gray-100 hover:text-purple-400 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link href="/pricing" className="text-lg text-gray-100 hover:text-purple-400 transition-colors" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
                    </ul>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                        <Link
                            href="/login"
                            className="text-white bg-purple-400 py-3 px-6 font-medium w-full text-center transition rounded-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            Log In
                        </Link>

                        <Link
                            href="/signup"
                            className="bg-transparent border-purple-400 border text-white w-full text-center font-medium px-5 py-2 rounded-lg transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign up free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
