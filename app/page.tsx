'use client'

import React from 'react'
import { Wrench, Phone, Star, Clock } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <Wrench size={48} />
            <h1 className="text-4xl font-bold">Expert Plumbing Services</h1>
            <p className="text-xl max-w-2xl">
              Professional, reliable, and efficient plumbing solutions for your home and business.
            </p>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-lg font-semibold flex items-center">
              Schedule Online <Clock size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Repair', 'Installation', 'Maintenance'].map((service) => (
              <div key={service} className="bg-white shadow-md rounded-lg">
                <div className="p-6 text-center">
                  <Wrench className="mx-auto mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p>Professional {service.toLowerCase()} services for all your plumbing needs.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'John D.', text: 'Excellent service! Fixed our leak quickly and efficiently.' },
              { name: 'Sarah M.', text: 'Very professional and knowledgeable. Highly recommend!' },
            ].map((review, index) => (
              <div key={index} className="bg-white text-foreground shadow-md rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 mr-2" size={20} />
                  ))}
                </div>
                <p className="mb-2">"{review.text}"</p>
                <p className="font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Solve Your Plumbing Issues?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Our team of expert plumbers is just a call away. Get in touch for fast and reliable service.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold flex items-center">
                Call Now <Phone size={20} className="ml-2" />
              </button>
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg text-lg font-semibold flex items-center">
                Schedule Online <Clock size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Wrench size={24} className="mr-2" />
              <p className="text-xl font-semibold">Expert Plumbing</p>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="text-foreground">Services</a>
              <a href="#" className="text-foreground">About</a>
              <a href="#" className="text-foreground">Contact</a>
            </nav>
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Expert Plumbing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}