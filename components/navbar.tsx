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

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpen && !(event.target as Element).closest('.mobile-menu')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <header className="border-b border-dark-300/20 bg-dark-600/80 backdrop-blur-md sticky top-0 z-50">
            <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-12">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center group">
                        <span className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">Meet</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex list-none justify-between space-x-8 items-center">
                        <li className="relative group">
                            <Link href="/" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center">
                                Products
                                <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            {/* Dropdown */}
                            <div className="absolute left-0 top-12 mt-1 w-[750px] bg-dark-500/95 backdrop-blur-md shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-dark-300/20">
                                <div className="grid grid-cols-2 gap-1 p-6">
                                    {products.map((product) => (
                                        <div key={product.id} className="flex flex-col group/item">
                                            <h3 className="text-lg text-gray-300 group-hover/item:text-white transition-colors duration-200">{product.title}</h3>
                                            <span className='border-b border-gray-300/30 mt-2 w-full'></span>
                                            <ul className="mt-3 flex flex-col gap-2 mb-6">
                                                {product.links.map((item) => (
                                                    <li key={item.link} className="flex items-center text-sm gap-2 hover:text-white cursor-pointer text-purple-400 group-hover/item:text-purple-300 transition-colors duration-200">
                                                        <Check className='text-white/70 group-hover/item:text-white transition-colors duration-200' />
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
                            <Link href="/" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center">
                                Solutions
                                <ChevronDown className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            {/* Dropdown */}
                            <div className="absolute left-0 top-12 mt-1 w-[900px] bg-dark-500/95 backdrop-blur-md shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-dark-300/20">
                                <div className="grid grid-cols-2 gap-1 p-6">
                                    {solutions.map((solution) => (
                                        <div key={solution.id} className="flex flex-col group/item">
                                            <h3 className="text-lg text-gray-300 group-hover/item:text-white transition-colors duration-200">{solution.title}</h3>
                                            <span className='border-b border-gray-300/30 mt-2 w-full'></span>
                                            <ul className="mt-3 flex flex-col gap-2 mb-6">
                                                {solution.links.map((item) => (
                                                    <li key={item.link} className="flex items-center text-sm gap-2 text-purple-400 hover:text-white cursor-pointer group-hover/item:text-purple-300 transition-colors duration-200">
                                                        <Check className='text-gray-300/70 group-hover/item:text-white transition-colors duration-200' />
                                                        {item.link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li><Link href="/about" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200">About Us</Link></li>
                        <li><Link href="/contact" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</Link></li>
                        <li><Link href="/pricing" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200">Pricing</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:flex items-center space-x-6">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                        Log in
                    </Link>
                    
                    <Link href='/register'>
                        <Button className="rounded-full bg-purple-500 px-6 py-2 text-dark-600 hover:bg-purple-400 transition-all duration-200 shadow-lg hover:shadow-purple-500/30 font-medium">
                            Sign Up For Free
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-white hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-dark-500/50"
                        aria-label="Toggle mobile menu"
                    >
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full h-screen bg-dark-600/95 backdrop-blur-md z-40 lg:hidden mobile-menu">
                    <div className="p-6 h-full overflow-y-auto">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <button 
                                    onClick={() => toggleDropdown("products")} 
                                    className="flex cursor-pointer text-white hover:text-purple-400 justify-between w-full text-left text-lg p-3 rounded-lg hover:bg-dark-500/50 transition-colors duration-200"
                                >
                                    Products
                                    <span className="cursor-pointer transition-transform duration-200">
                                        {dropdownOpen === "products" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                    </span>
                                </button>
                                {dropdownOpen === "products" && (
                                    <div className="mt-2 p-4 bg-dark-500/50 rounded-lg border border-dark-300/20 animate-in slide-in-from-top-2 duration-200">
                                        {products.map((product) => (
                                            <div key={product.id} className="flex flex-col mb-6 last:mb-0">
                                                <h3 className="text-lg text-gray-300 mb-3 font-medium">{product.title}</h3>
                                                <span className='border-b border-gray-300/30 mb-3 w-full'></span>
                                                <ul className="space-y-2">
                                                    {product.links.map((item) => (
                                                        <li key={item.link} className="flex items-center gap-2 text-gray-100 hover:text-purple-400 transition-colors duration-200 cursor-pointer p-2 rounded hover:bg-dark-400/50">
                                                            <Check className='text-purple-400 h-4 w-4' />
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
                                <button 
                                    onClick={() => toggleDropdown("solutions")} 
                                    className="flex cursor-pointer justify-between hover:text-purple-400 w-full text-left text-lg text-white p-3 rounded-lg hover:bg-dark-500/50 transition-colors duration-200"
                                >
                                    Solutions
                                    <span className="cursor-pointer transition-transform duration-200">
                                        {dropdownOpen === "solutions" ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                    </span>
                                </button>
                                {dropdownOpen === "solutions" && (
                                    <div className="mt-2 p-4 bg-dark-500/50 rounded-lg border border-dark-300/20 animate-in slide-in-from-top-2 duration-200">
                                        {solutions.map((solution) => (
                                            <div key={solution.id} className="flex flex-col mb-6 last:mb-0">
                                                <h3 className="text-lg text-gray-300 mb-3 font-medium">{solution.title}</h3>
                                                <span className='border-b border-gray-300/30 mb-3 w-full'></span>
                                                <ul className="space-y-2">
                                                    {solution.links.map((item) => (
                                                        <li key={item.link} className="flex items-center gap-2 text-gray-100 hover:text-purple-400 transition-colors duration-200 cursor-pointer p-2 rounded hover:bg-dark-400/50">
                                                            <Check className='text-purple-400 h-4 w-4' />
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
                                <Link 
                                    href="/about" 
                                    className="block text-lg text-gray-100 hover:text-purple-400 transition-colors duration-200 p-3 rounded-lg hover:bg-dark-500/50" 
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="block text-lg text-gray-100 hover:text-purple-400 transition-colors duration-200 p-3 rounded-lg hover:bg-dark-500/50" 
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/pricing" 
                                    className="block text-lg text-gray-100 hover:text-purple-400 transition-colors duration-200 p-3 rounded-lg hover:bg-dark-500/50" 
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Pricing
                                </Link>
                            </li>
                        </ul>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3">
                            <Link
                                href="/login"
                                className="text-white bg-purple-500 hover:bg-purple-600 py-3 px-6 font-medium w-full text-center transition-colors duration-200 rounded-lg"
                                onClick={() => setMenuOpen(false)}
                            >
                                Log In
                            </Link>

                            <Link
                                href="/register"
                                className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full text-center font-medium px-5 py-3 rounded-lg transition-all duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sign up free
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
