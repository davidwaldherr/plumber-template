'use client'

import React from 'react'
import Image from "next/image"
import { Wrench, Phone, Star, Clock, CheckCircle } from 'lucide-react'
import repairHeroImage from "@/public/images/repair-hero.svg"
import { Button } from "@nextui-org/react"

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontSize: '1.25em' }}>
      {/* Hero Section */}
      <main className="grid md:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24 px-4 md:px-16 bg-primary text-primary-foreground">
        <div className="py-6 md:order-1 hidden md:block">
          <Image
            src={repairHeroImage}
            alt="Plumber repairing a pipe"
            width={500}
            height={350}
            sizes="(max-width: 800px) 100vw, 620px"
            priority
            className="mt-[-20px]"
          />
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            Expert Plumbing Repair
          </h1>
          <p className="text-2xl mt-4 max-w-xl">
            Fast, reliable repairs for all your plumbing emergencies and issues.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button color="secondary" size="lg" endContent={<Clock size={24} />}>
              Schedule Repair
            </Button>
            <Button color="primary" variant="bordered" size="lg" endContent={<Phone size={24} />}>
              Call Now
            </Button>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-10 text-foreground">Our Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Leak Detection and Repair',
              'Pipe Repair and Replacement',
              'Drain Cleaning',
              'Toilet Repair',
              'Faucet and Fixture Repair',
              'Water Heater Repair'
            ].map((service) => (
              <div key={service} className="bg-secondary text-secondary-foreground shadow-md rounded-lg p-6">
                <CheckCircle className="mb-4" size={32} />
                <h3 className="text-2xl font-semibold mb-2">{service}</h3>
                <p>Professional and efficient {service.toLowerCase()} services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-10">Why Choose Our Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '24/7 Emergency Service', icon: <Clock size={48} /> },
              { title: 'Licensed & Insured Technicians', icon: <CheckCircle size={48} /> },
              { title: 'Upfront Pricing', icon: <Wrench size={48} /> },
              { title: 'Satisfaction Guaranteed', icon: <Star size={48} /> },
              { title: 'State-of-the-Art Equipment', icon: <Wrench size={48} /> },
              { title: 'Fast Response Time', icon: <Clock size={48} /> },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p>We pride ourselves on providing top-quality repair services.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Need a Plumbing Repair?</h2>
            <p className="text-2xl max-w-2xl mx-auto">
              Our expert technicians are ready to solve your plumbing issues quickly and efficiently.
            </p>
            <div className="flex justify-center space-x-4">
              <Button color="secondary" size="lg" endContent={<Phone size={24} />}>
                Call Now
              </Button>
              <Button color="primary" variant="bordered" size="lg" endContent={<Clock size={24} />}>
                Schedule Online
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}