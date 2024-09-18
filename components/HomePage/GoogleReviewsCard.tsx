"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, Link } from "@nextui-org/react"
import { Star } from 'lucide-react'

export function GoogleReviewsCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // New state to control visibility

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const cstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
      const day = cstTime.getDay();
      const hour = cstTime.getHours();

      // Weekdays are 1 (Monday) through 5 (Friday), and business hours are 9 to 17 (5pm)
      const open = day >= 1 && day <= 5 && hour >= 9 && hour < 17;
      setIsOpen(open);
    };

    // Check immediately and then set an interval to check every minute
    checkIfOpen();
    const intervalId = setInterval(checkIfOpen, 60000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!isVisible) return null; // Return null if the card is not visible

  return (
    <div className="fixed bottom-4 left-4 z-50 hidden md:block hover:scale-105 transition-transform">
      <Card className="w-64 bg-white shadow-lg border-4 border-[rgb(var(--color-3))] rounded-lg pt-6">
        <CardHeader className="z-10 w-full shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex justify-around items-start gap-y-0 pt-5">
          <svg viewBox="0 0 24 24" width="64" height="64" className="mb-0"> 
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none"/>
          </svg>
          <div className="flex flex-col">
            <p className="text-md font-bold">Google Reviews</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-[rgb(var(--color-5))] mr-2">4.9</p>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
              ))}
            </div>
          </div>
          <button className="absolute top-0 right-0" onClick={() => setIsVisible(!isVisible)}>
            X
          </button>
        </CardHeader>
        <CardBody>
          <Link href="/reviews" color="primary" className="text-sm">
            Read our 647 Google Reviews
          </Link>
        </CardBody>
      </Card>
      <div className={`absolute top-0 left-0 transform transition-transform`}>
        <div className={`px-4 py-2 rounded-bl-lg ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
          {isOpen ? 'WE ARE OPEN!' : 'CURRENTLY CLOSED'}
        </div>
      </div>
    </div>
  )
}