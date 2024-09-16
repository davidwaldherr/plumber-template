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

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
            <p className="ml-2 font-bold text-foreground">Expert Plumbing</p>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                Home
              </Link>
              <Link href="/reviews" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/reviews') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                Reviews
              </Link>
              <div className="relative group">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
                >
                  Services <ChevronDown size={16} className="inline-block ml-1" />
                </button>
                {isServicesOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-background px-5 py-6 sm:gap-8 sm:p-8">
                        <Link href="/services/repair" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Repair</Link>
                        <Link href="/services/installation" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Installation</Link>
                        <Link href="/services/maintenance" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Maintenance</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  onClick={() => setIsAreasOpen(!isAreasOpen)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
                >
                  Service Areas <ChevronDown size={16} className="inline-block ml-1" />
                </button>
                {isAreasOpen && (
                  <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-background px-5 py-6 sm:gap-8 sm:p-8">
                        <Link href="/areas/area1" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 1</Link>
                        <Link href="/areas/area2" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 2</Link>
                        <Link href="/areas/area3" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 3</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                About Us
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <Phone size={18} className="mr-2" />
              (555) 123-4567
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-background inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
              Home
            </Link>
            <Link href="/reviews" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/reviews') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
              Reviews
            </Link>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
            >
              Services <ChevronDown size={16} className="inline-block ml-1" />
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                <Link href="/services/repair" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Repair</Link>
                <Link href="/services/installation" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Installation</Link>
                <Link href="/services/maintenance" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Maintenance</Link>
              </div>
            )}
            <button
              onClick={() => setIsAreasOpen(!isAreasOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
            >
              Service Areas <ChevronDown size={16} className="inline-block ml-1" />
            </button>
            {isAreasOpen && (
              <div className="pl-4">
                <Link href="/areas/area1" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 1</Link>
                <Link href="/areas/area2" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 2</Link>
                <Link href="/areas/area3" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Area 3</Link>
              </div>
            )}
            <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
              About Us
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-border">
            <div className="flex items-center px-5">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-base font-medium flex items-center">
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}