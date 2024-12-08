'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import { BiUser } from 'react-icons/bi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-orange-500">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-full py-1 px-4 pr-8 focus:outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          
          <Link href="/signup" className="text-white hover:text-yellow-300 ml-2 ">
                        <BiUser className="h-6 w-6 relative"/>
                        </Link>
        </div>
      
                        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3">
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full w-full py-1 px-4 pr-8 focus:outline-none"
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="mt-3">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

