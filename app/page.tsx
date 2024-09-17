"use client"

import React from "react"
import Image from "next/image"
import { Wrench, Phone, Star, Clock } from "lucide-react"
import heroImage from "../public/images/plumbing-hero.svg"
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps"
import { useState, useEffect } from "react"

function MapContent({ onLoad }: { onLoad: (map: google.maps.Map) => void }) {
  const map = useMap()

  useEffect(() => {
    if (map) {
      onLoad(map)
    }
  }, [map, onLoad])

  return (
    <AdvancedMarker 
      position={{ lat: 43.596478, lng: -88.0883928 }}
    >
      <Pin 
        scale={3}
        background={"rgb(var(--color-4))"}
        borderColor={"rgb(var(--color-1))"}
        glyphColor={"rgb(var(--color-1))"}
      />
    </AdvancedMarker>
  )
}

export default function Homepage() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontSize: "1.25em" }}>
      {/* Hero Section */}
      <main className="grid md:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 ml-12 md:pb-24 px-20 md:px-18 bg-primary text-primary-foreground">
        <div className="py-6 md:order-1 hidden md:block">
          <Image
            src={heroImage}
            alt="Plumber at work"
            width={500}
            height={350}
            sizes="(max-width: 800px) 100vw, 620px"
            priority
            className="mt-[-20px]"
          />
        </div>
        <div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tight xl:tracking-tighter">
            Expert Plumbing Services
          </h1>
          <p className="text-2xl mt-4 max-w-xl">
            Professional, reliable, and efficient plumbing solutions for your home and business.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="bg-secondary text-secondary-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
              Schedule Online <Clock size={32} className="ml-3" />
            </button>
            <button className="bg-accent text-accent-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
              Call Now <Phone size={32} className="ml-3" />
            </button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-bold text-center mb-10 text-foreground">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Repair", "Installation", "Maintenance"].map((service) => (
              <div key={service} className="bg-secondary text-secondary-foreground shadow-md rounded-lg">
                <div className="p-6 text-center">
                  <Wrench className="mx-auto mb-4" size={48} />
                  <h3 className="text-3xl font-semibold text-center mb-2">{service}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-10">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "John D.", text: "Excellent service! Fixed our leak quickly and efficiently.", rating: 5 },
              { name: "Sarah M.", text: "Very professional and knowledgeable. Highly recommend!", rating: 5 },
            ].map((review, index) => (
              <div key={index} className="bg-background text-foreground shadow-md rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary mr-2" size={32} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="mb-2">"{review.text}"</p>
                <p className="font-semibold text-2xl">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-foreground">Find Us</h2>
          <div className="w-full h-[400px]">
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
              <Map
                mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID!}
                center={{ lat: 43.596478, lng: -88.0883928 }}
                zoom={15}
              >
                <MapContent onLoad={onLoad} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </section>

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