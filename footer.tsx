import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across World.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p className="text-gray-400">Mon - Sat(8.00 - 6.00)</p>
            <p className="text-gray-400">Sunday - Closed</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              {['FAQ', 'Term & conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, '-')}`} className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">Subscribe Now</p>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white rounded-l-full py-2 px-4 focus:outline-none"
            />
            <button className="bg-orange-500 text-white rounded-r-full px-4 py-2 hover:bg-orange-600 transition duration-300">
              Subscribe
            </button>
          </div>
          <p className="mt-8 text-gray-400">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

