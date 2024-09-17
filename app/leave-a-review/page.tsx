"use client"

import React, { useState } from "react"
import { Card, CardBody, CardHeader, Input, Textarea, Button } from "@nextui-org/react"
import { Star, Send, CheckCircle, Home } from "lucide-react"
import { motion } from "framer-motion"

export default function ReviewPage() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleRatingHover = (rating: number) => {
    setSelectedRating(rating)
  }

  const handleRatingLeave = () => {
    if (!showFeedbackForm) {
      setSelectedRating(null)
    }
  }

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating)
    if (rating === 5) {
      window.location.href = "https://www.google.com/localservices/prolist?g2lbs=AOHF13mpGp5jWiC8KDG_p8rC-GBYDxcVIRcEo68c09Evf3bIUJcriBLAo0J_oNLizu4hcBaPM0KPYhbXHMPdmv6Iz9qw_oShlg%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&src=1&gsas=1&slp=OvwDQ2hNSWlOTG4xLUhJaUFNVjZ6TUlCUjJLWVF1WEVpTUlCQkFCR2d3SXBZcnlpZ1VRLW9hNjZCZ2cwTzdaR1REOHI1UWZPS2ozN0F4SUFCSW1DQVFRQWhvTUNJcmhoWmdERVBUanRkZ0pJTS1zc0NFd25lZl9JVGlubHRnUVNNN3pfeEFTSWdnRUVBTWFDd2otaE5wX0VPeVQ5S3dKSVBHUWt5QXduNG1nSURpNHlJa1FTQUFTSXdnRUVBUWFEQWplc2RlR0FSQzgtLWV0Q1NEM2gtRWhNSjNuX3lFNC04UHdFRWdBRWlZSUJCQUZHZ3dJaTRmdHBRSVFyYmJKdlFrZzJQZXlJRENkNV84aE9PeTdtUkJJenZQX0VCSWpDQVFRQmhvTUNLXzBnSnNFRUpDWTJQTUpJT0wyM0NFd25lZl9JVGl4dS00UVNBQVNKZ2dFRUFjYURBakVpcDZWQkJDdjVNenVDU0NYcDRjaE1KM25feUU0eTlQREVFak84XzhRRWlNSUJCQUlHZ3dJN2ZQWjhBVVF3SzM1eUJZZ2xQSDZJVENkNV84aE9NcTRfUkJJQUNJR0NBUVFBeGdJS0F3eUxObklzUUxXeUxFQzFiS3hBdFd5c1FMVnNyRUMxYkt4QXJLcHNRS1hxN0VDeGFDeEFwdWZzUUxHb0xFQw%3D%3D&spp=ElcKEgiK4YWYAxD047XYCRj_x6-gJRIoeGNhdDpzZXJ2aWNlX2FyZWFfYnVzaW5lc3NfcGx1bWJlcjplbi1VU0ITCIjS59fhyIgDFeszCAUdimELl0gEUAI%3D&scp=Cih4Y2F0OnNlcnZpY2VfYXJlYV9idXNpbmVzc19wbHVtYmVyOmVuLVVTEiMaEgm9Ja_AvWZkiBEOk1YyegBYACIJTmFzaHZpbGxlOKPQPioIUGx1bWJpbmdKFQoTCIjS59fhyIgDFeszCAUdimELlw%3D%3D&q=plumber%20nashville%20google&ved=2ahUKEwiC2-DX4ciIAxXuhYkEHX7dDIgQlZUCegQICRAY"
    } else {
      setShowFeedbackForm(true)
    }
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your server
    setFeedbackSubmitted(true)
  }

  if (feedbackSubmitted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl shadow-2xl border-4 border-white rounded-lg">
          <CardBody className="text-center p-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Thank You for Your Feedback!</h2>
            <p className="text-xl text-default-500">
              We greatly appreciate your input and will use it to improve our services.
              Your opinion matters to us, and we are committed to providing the best plumbing experience possible.
            </p>
            <Button
              color="primary"
              variant="solid"
              size="lg"
              onClick={() => window.location.href = "/"}
              className="mt-6 py-4 font-bold text-lg text-primary-foreground"
            >
              Return to Home
              <Home className="ml-2" size={20} />
            </Button>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl shadow-2xl border-4 border-white rounded-lg">
        <CardHeader className={`flex flex-col items-center gap-4 p-8 ${showFeedbackForm ? "hidden" : ""}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-center">Rate Your Experience</h1>
          <p className="text-xl md:text-3xl text-center text-default-500">
            How would you rate our plumbing service?
          </p>
        </CardHeader>
        <CardBody className="p-8">
          {!showFeedbackForm ? (
            <div 
              className="flex justify-center space-x-4" 
              onMouseLeave={handleRatingLeave}
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.button
                  key={rating}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    rating === 5 
                      ? "hover:bg-yellow-100" 
                      : "hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => handleRatingHover(rating)}
                  onClick={() => handleRatingClick(rating)}
                  whileHover={rating === 5 ? { 
                    scale: 1.5, 
                    rotate: 360,
                    transition: { type: "spring", stiffness: 260, damping: 20 }
                  } : { scale: 1.2 }}
                >
                  <Star
                    size={48}
                    className={`${
                      rating <= (selectedRating || 0)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    } transition-colors duration-200`}
                  />
                </motion.button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-8">
              <div>
                <h1 className="text-3xl font-semibold mb-3">We Would Love to Hear More!</h1>
                <p className="text-lg text-default-500 mb-6">
                  Your feedback is incredibly valuable to us. Please let us know how we can improve our service!
                </p>
              </div>
              <div className="space-y-3">
                <label htmlFor="what-went-wrong" className="block text-lg font-medium text-default-700">
                  Did anything go wrong?
                </label>
                <Input
                  id="what-went-wrong"
                  placeholder="Please provide details about the issue"
                  required
                  size="lg"
                  classNames={{
                    input: "text-white",
                  }}
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="how-to-improve" className="block text-lg font-medium text-default-700">
                  How can we improve?
                </label>
                <Textarea
                  id="how-to-improve"
                  placeholder="Your suggestions for improvement"
                  required
                  size="lg"
                  classNames={{
                    input: "text-white",
                  }}
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="contact-info" className="block text-lg font-medium text-default-700">
                  Your contact information
                </label>
                <Input
                  id="contact-info"
                  placeholder="Email or phone number"
                  size="lg"
                  classNames={{
                    input: "text-white",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl font-semibold flex items-center justify-center transition-all duration-200 hover:bg-primary-dark"
              >
                Submit Feedback
                <Send size={24} className="ml-3" />
              </button>
            </form>
          )}
        </CardBody>
      </Card>
    </div>
  )
}