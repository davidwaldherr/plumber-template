'use client'

import React from "react"
import { Star } from "lucide-react"

// Define the reviews array outside of the component
const reviews = [
  { name: "John D.", text: "They handled our complex plumbing issue with ease. Very impressed!", rating: 5 },
  { name: "Tom B.", text: "They handled our complex plumbing issue with ease. Very impressed!", rating: 5 },
  { name: "Jane S.", text: "Excellent service! Fixed our leak quickly and efficiently.", rating: 5 },
  { name: "Bob J.", text: "Very professional and knowledgeable. Highly recommend!", rating: 5 },
  { name: "John D.", text: "They handled our complex plumbing issue with ease. Very impressed!", rating: 5 },
  { name: "Tom B.", text: "They handled our complex plumbing issue with ease. Very impressed!", rating: 5 },
  { name: "Jane S.", text: "Excellent service! Fixed our leak quickly and efficiently.", rating: 5 },
  { name: "Bob J.", text: "Very professional and knowledgeable. Highly recommend!", rating: 5 },
  { name: "John D.", text: "They handled our complex plumbing issue with ease. Very impressed!", rating: 5 },
]

// Extract the ReviewsSection into its own component
const ReviewsSection = () => {
  return (
    <section className="py-20 bg-[rgb(var(--color-5))] text-[rgb(var(--color-1))]">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-10">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <a key={index} href="/reviews" className="group">
              <div className="bg-[rgb(var(--color-1))] text-[rgb(var(--color-5))] shadow-md rounded-lg p-6 hover:bg-[rgb(var(--color-3))] hover:text-[rgb(var(--color-1))] transition-colors hover:scale-105 h-[250px] flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[rgb(var(--color-5))] mr-2 group-hover:text-[rgb(var(--color-1))] transition-colors" size={32} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="mb-2">&quot;{review.text}&quot;</p>
                <p className="font-semibold text-2xl">- {review.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection;