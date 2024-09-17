'use client'

import React from 'react'
import Image from "next/image"
// Import Truck icon from lucide-react
import { Wrench, Droplet, Thermometer, Home, Truck, ArrowRight } from 'lucide-react' // Added Tool, Truck
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import Link from 'next/link'

const services = [
  {
    title: "Repair",
    icon: <Wrench size={48} />,
    description: "Fast and reliable repairs for all your plumbing issues.",
    sections: [
      "Leak Detection and Repair",
      "Pipe Repair and Replacement",
      "Drain Cleaning",
      "Toilet Repair",
      "Faucet and Fixture Repair",
      "Water Heater Repair"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Installation",
    // Change icon to Tool for Installation
    icon: <Wrench size={48} />, // Changed from <Wrench size={48} />
    description: "Expert installation of plumbing fixtures and systems.",
    sections: [
      "Water Heater Installation",
      "Toilet Installation",
      "Sink and Faucet Installation",
      "Shower and Bathtub Installation",
      "Garbage Disposal Installation",
      "Water Filtration System Installation"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Maintenance",
    icon: <Truck size={48} />,
    description: "Regular maintenance to keep your plumbing in top condition.",
    sections: [
      "Annual Plumbing Inspections",
      "Drain Cleaning and Maintenance",
      "Water Heater Maintenance",
      "Pipe Insulation",
      "Fixture Tune-ups",
      "Sewer Line Maintenance"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Water Solutions",
    icon: <Droplet size={48} />,
    description: "Comprehensive water quality and efficiency solutions.",
    sections: [
      "Water Softener Installation",
      "Water Filtration Systems",
      "Tankless Water Heater Installation",
      "Water Conservation Solutions",
      "Well Pump Services",
      "Water Testing and Treatment"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Heating & Cooling",
    icon: <Thermometer size={48} />,
    description: "HVAC services to keep your home comfortable year-round.",
    sections: [
      "Furnace Repair and Installation",
      "AC Repair and Installation",
      "Heat Pump Services",
      "Ductwork Installation and Repair",
      "Thermostat Installation",
      "Annual HVAC Maintenance"
    ],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Remodeling",
    icon: <Home size={48} />,
    description: "Plumbing services for your home renovation projects.",
    sections: [
      "Bathroom Remodeling",
      "Kitchen Remodeling",
      "Basement Remodeling",
      "Outdoor Kitchen Plumbing",
      "Laundry Room Upgrades",
      "Accessibility Modifications"
    ],
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8">
            Our Comprehensive Plumbing Services
          </h1>
          <p className="text-2xl text-center max-w-3xl mx-auto">
            From emergency repairs to complete home remodeling, we offer a wide range of professional plumbing services to meet all your needs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-secondary text-secondary-foreground border-4 border-white rounded-lg">
                <CardHeader className="flex gap-3">
                  {service.icon}
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </CardHeader>
                <CardBody>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full object-cover rounded-lg mb-4"
                  />
                  <p className="text-xl mb-4">{service.description}</p>
                  <ul className="list-disc list-inside">
                    {service.sections.map((section, idx) => (
                      <li key={idx} className="text-lg mb-2">{section}</li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button
                    as={Link}
                    href={`/services/${service.title.toLowerCase()}`}
                    color="primary"
                    endContent={<ArrowRight size={20} />}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Expert Plumbing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "24/7 Emergency Service", description: "We're always available when you need us most." },
              { title: "Licensed & Insured", description: "Our team of professionals is fully certified and insured." },
              { title: "100% Satisfaction Guarantee", description: "We stand behind our work with a satisfaction guarantee." },
              { title: "Upfront Pricing", description: "No surprises - we provide clear, upfront pricing for all services." },
              { title: "Experienced Technicians", description: "Our skilled technicians have years of experience in the field." },
              { title: "State-of-the-Art Equipment", description: "We use the latest technology to ensure efficient service." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-2xl mb-8">Contact us today for a free consultation and estimate.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" color="secondary">
              Schedule Service
            </Button>
            <Button size="lg" color="primary" variant="bordered">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}