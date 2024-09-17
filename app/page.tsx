'use client'

import React from "react"
import Image from "next/image"
import { Wrench, Phone, Star, Clock } from "lucide-react"
import heroImage from "../public/images/plumbing-hero.svg"
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps"
import { useState, useEffect } from "react"
import ReviewsSection from "@/components/HomePage/ReviewsSection"
import ServicesSection from "@/components/HomePage/ServicesSection"
import HeroSection from "@/components/HomePage/HeroSection"
import GoogleMapsSection from "@/components/HomePage/GoogleMapsSection"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontSize: "1.25em" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Google Maps Section */}
      <GoogleMapsSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Solve Your Plumbing Issues?</h2>
            <p className="text-2xl max-w-2xl mx-auto">
              Our team of expert plumbers is just a call away. Get in touch for fast and reliable service.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-accent text-accent-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
                Call Now <Phone size={32} className="ml-3" />
              </button>
              <button className="bg-secondary text-secondary-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
                Schedule Online <Clock size={32} className="ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}