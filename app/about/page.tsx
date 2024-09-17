'use client'

import React from 'react'
import { Card, CardBody, CardHeader, Image, Spacer } from "@nextui-org/react"

export default function AboutPage() {
  const teamMembers = [
    { name: "John Doe", title: "Founder & CEO", image: "/placeholder.svg?height=400&width=300" },
    { name: "Jane Smith", title: "Master Plumber", image: "/placeholder.svg?height=400&width=300" },
    { name: "Mike Johnson", title: "Operations Manager", image: "/placeholder.svg?height=400&width=300" },
  ]

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-12 mb-12 bg-background text-foreground">
      <h1 className="text-6xl font-bold text-center text-primary mb-12">
        About Expert Plumbing
      </h1>
      
      <section className="mb-16">
        <h2 className="text-5xl font-semibold mb-8 text-secondary">Our Story</h2>
        <p className="text-2xl mb-6">
          <strong>Founded in 1960</strong> by John Doe Sr., Expert Plumbing has been <strong>serving our community</strong> for over six decades. What started as a <strong>one-man operation</strong> in a small garage has <strong>grown</strong> into a trusted name in plumbing services across the region.
        </p>
        <p className="text-2xl mb-6">
          Our journey began when John Doe Sr., <strong>fresh out of his apprenticeship</strong>, decided to <strong>start his own plumbing business</strong>. Armed with a toolbox and a <strong>commitment to quality service</strong>, he quickly gained a reputation for <strong>reliability and expertise</strong>.
        </p>
        <p className="text-2xl mb-6">
          Today, led by the <strong>second generation</strong> of the Doe family, we continue to uphold the values of <strong>integrity, quality, and customer satisfaction</strong> that have been our hallmark since 1960. Our team of skilled plumbers combines <strong>years of experience</strong> with the <strong>latest technology</strong> to provide <strong>top-notch plumbing solutions</strong> for homes and businesses alike.
        </p>
      </section>

      <section>
        <h2 className="text-5xl font-semibold mb-12 text-secondary">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-primary">
              <Image
                removeWrapper
                alt={member.name}
                className="z-0 w-full h-[400px] object-cover"
                src={member.image}
              />
              <CardBody className="absolute bg-background/40 bottom-0 z-10 border-t-1 border-secondary">
                <h3 className="text-foreground font-bold text-3xl">{member.name}</h3>
                <p className="text-foreground text-xl">{member.title}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}