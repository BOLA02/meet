import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-dark-700 px-8 py-4 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Newsletter */}
          <div>
            <h2 className="text-xl font-bold text-purple-600 mb-4">Meetio</h2>
            <p className="text-sm text-white mb-4">Keep in touch with Meetio News and updates</p>
            
            <div className="flex">
              <input 
                type="email"
                placeholder="Email..."
                className="border border-gray-300 rounded-l-lg px-4 py-2 w-full text-sm"
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-r-lg text-sm">
                Submit
              </button>
            </div>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="text-white  hover:text-purple-500">Our Team</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">About Meetio</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Careers</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Privacy at Meetio</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Investors</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Diversity & Inclusion</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Careers at Meetio</a></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="text-white   hover:text-purple-500">Meeting Features</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Collaboration Tools</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">User Experience & Innovation</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Security & Privacy</a></li>
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="text-white   hover:text-purple-500">Account</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Support Center</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Contact Us</a></li>
              <li><a href="#" className="text-white   hover:text-purple-500">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs  text-purple-400">© 2023 Meetio. All rights reserved.</p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#" className="text-xs text-white   hover:text-purple-500 mx-2">Terms & Conditions</a>
            <a href="#" className="text-xs text-white   hover:text-purple-500 mx-2">Privacy Policy</a>
            <a href="#" className="text-xs text-white   hover:text-purple-500 mx-2">Legal</a>
            
            <div className="flex items-center ml-4">
              <a href="#" className="mx-1">
                <img src="/api/placeholder/24/24" alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a href="#" className="mx-1">
                <img src="/api/placeholder/24/24" alt="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="mx-1">
                <img src="/api/placeholder/24/24" alt="Facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>



    
  )
}
