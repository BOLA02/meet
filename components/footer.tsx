import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"
// import { TiSocialFacebook } from "react-icons/ti";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-dark-700 border-t border-dark-300/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Newsletter */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Meet</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Keep in touch with Meet News and updates. Stay informed about new features and improvements.
            </p>
            
            <div className="space-y-3">
              <div className="flex">
                <Input 
                  type="email"
                  placeholder="Enter your email..."
                  className="border-gray-600 bg-dark-600 text-white placeholder:text-gray-400 rounded-l-lg focus:border-purple-400 focus:ring-purple-400"
                />
                <Button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-r-lg border-l-0 transition-colors duration-200">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  About Meet
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Privacy at Meet
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Diversity & Inclusion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Meeting Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Collaboration Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  User Experience & Innovation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Security & Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Developer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                  Status Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-300/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-sm text-gray-400">
              © 2024 Meet. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Legal
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Follow us:</span>
            <div className="flex items-center space-x-3">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-dark-600"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-dark-600"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-dark-600"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
