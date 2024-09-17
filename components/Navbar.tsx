'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAreasOpen, setIsAreasOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const toggleServicesOpen = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isAreasOpen) setIsAreasOpen(false);
  };

  const toggleAreasOpen = () => {
    setIsAreasOpen(!isAreasOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  return (
    <nav className="bg-slate-800 text-white border-b-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-4xl font-bold text-orange-400">Expert Plumbing</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              Home
            </Link>
            <Link href="/reviews" className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/reviews') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              Reviews
            </Link>
            <div className="relative">
              <button
                onClick={toggleServicesOpen}
                className="px-3 py-2 rounded-md text-xl font-medium bg-amber-500 text-slate-800 hover:bg-amber-400 hover:border hover:border-white hover:text-white hover:scale-105 focus:outline-none"
              >
                Services <ChevronDown size={20} className="inline-block ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/services/repair" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Repair</Link>
                    <Link href="/services/installation" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Installation</Link>
                    <Link href="/services/maintenance" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Maintenance</Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleAreasOpen}
                className="px-3 py-2 rounded-md text-xl font-medium bg-amber-500 text-slate-800 hover:bg-amber-400 hover:border hover:border-white hover:text-white hover:scale-105 focus:outline-none"
              >
                Service Areas <ChevronDown size={20} className="inline-block ml-1" />
              </button>
              {isAreasOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link href="/areas/area1" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Area 1</Link>
                    <Link href="/areas/area2" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Area 2</Link>
                    <Link href="/areas/area3" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">Area 3</Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className={`px-3 py-2 rounded-md text-xl font-medium ${isActive('/about') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              About Us
            </Link>
            {/* Phone Button */}
            <button className="bg-amber-500 text-slate-800 px-4 py-2 rounded-md text-xl font-medium flex items-center hover:bg-amber-400 hover:border hover:border-white hover:text-white hover:scale-105">
              <Phone size={32} className="mr-2" />
              (555) 123-4567
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-300 hover:scale-105 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 rounded-md text-xl font-medium ${isActive('/') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              Home
            </Link>
            <Link href="/reviews" className={`block px-3 py-2 rounded-md text-xl font-medium ${isActive('/reviews') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              Reviews
            </Link>
            <button
              onClick={toggleServicesOpen}
              className="w-full text-left px-3 py-2 rounded-md text-xl font-medium text-white hover:text-orange-300 focus:outline-none"
            >
              Services <ChevronDown size={20} className="inline-block ml-1" />
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                <Link href="/services/repair" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Repair</Link>
                <Link href="/services/installation" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Installation</Link>
                <Link href="/services/maintenance" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Maintenance</Link>
              </div>
            )}
            <button
              onClick={toggleAreasOpen}
              className="w-full text-left px-3 py-2 rounded-md text-xl font-medium text-white hover:text-orange-300 focus:outline-none"
            >
              Service Areas <ChevronDown size={20} className="inline-block ml-1" />
            </button>
            {isAreasOpen && (
              <div className="pl-4">
                <Link href="/areas/area1" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Area 1</Link>
                <Link href="/areas/area2" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Area 2</Link>
                <Link href="/areas/area3" className="block px-3 py-2 rounded-md text-lg font-medium text-white hover:text-orange-300">Area 3</Link>
              </div>
            )}
            <Link href="/about" className={`block px-3 py-2 rounded-md text-xl font-medium ${isActive('/about') ? 'text-orange-400' : 'text-white hover:text-white hover:border hover:border-white hover:scale-105'}`}>
              About Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <button className="bg-amber-500 text-slate-800 px-4 py-2 rounded-md text-xl font-medium flex items-center hover:bg-amber-400 hover:border hover:border-white hover:text-white hover:scale-105">
                <Phone size={24} className="mr-2" />
                (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}