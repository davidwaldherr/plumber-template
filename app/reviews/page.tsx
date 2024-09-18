'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { Star } from 'lucide-react'

const allReviews = Array(50).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Customer ${index + 1}`,
  rating: 5,
  date: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
  review: `This is review number ${index + 1}. The plumbing service was ${['excellent', 'great', 'very good'][Math.floor(Math.random() * 3)]}. ${['Would highly recommend!', 'Will use again.', 'Very satisfied.'][Math.floor(Math.random() * 3)]}`,
  avatar: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><rect width="100%" height="100%" fill="rgb(var(--color-5))" /></svg>`
}))

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
}

const ReviewCard = ({ review }: { review: Review }) => (
  <Card className="w-full h-full shadow-md hover:shadow-xl transition-shadow duration-300 bg-[rgb(var(--color-1))] text-[rgb(var(--color-5))] hover:bg-color-3 hover:text-color-1">
    <CardHeader className="flex gap-3">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-[rgb(var(--color-5))]"></div>
        <div className="absolute inset-1 rounded-full bg-[rgb(var(--color-1))]"></div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-semibold">{review.name}</p>
      </div>
    </CardHeader>
    <CardBody>
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < review.rating ? "currentColor" : "none"}
            className={i < review.rating ? "text-primary fill-primary" : "text-muted"}
          />
        ))}
      </div>
      <p className="text-secondary-foreground">{review.review}</p>
    </CardBody>
  </Card>
)

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef<IntersectionObserver | null>(null)
  const lastReviewElementRef = useRef(null)

  const loadMoreReviews = () => {
    setLoading(true)
    setTimeout(() => {
      const newReviews = allReviews.slice(reviews.length, reviews.length + 10)
      setReviews(prevReviews => [...prevReviews, ...newReviews])
      setLoading(false)
      setHasMore(reviews.length + newReviews.length < allReviews.length)
    }, 1000)
  }

  useEffect(() => {
    loadMoreReviews()
  }, [])

  useEffect(() => {
    if (loading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreReviews()
      }
    })

    if (lastReviewElementRef.current) {
      observer.current.observe(lastReviewElementRef.current)
    }
  }, [loading, hasMore])

  const getGridClass = (index: number) => {
    const position = index % 10
    if (position < 2 || (position >= 5 && position < 7)) {
      return "col-span-12 sm:col-span-6"
    } else {
      return "col-span-12 sm:col-span-4"
    }
  }

  return (
    <div className="min-h-screen bg-color-1 text-color-5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 text-color-5">Customer Reviews</h1>
        <p className="text-2xl text-center text-color-5 mb-12">
          See what our customers are saying about our plumbing services
        </p>
        <div className="grid grid-cols-12 gap-6 mb-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={getGridClass(index)}
              ref={index === reviews.length - 1 ? lastReviewElementRef : null}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        {loading && (
          <div className="text-center py-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        )}
        {!hasMore && (
          <p className="text-center text-muted-foreground mt-4">No more reviews to load.</p>
        )}
      </div>
    </div>
  )
}