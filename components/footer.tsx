import React from 'react'
import { Link, Spacer } from "@nextui-org/react"
import { Wrench, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <Wrench size={48} className="mr-3 text-primary" />
                <p className="text-4xl font-semibold text-foreground">Expert Plumbing</p>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Providing top-notch plumbing services since 1990. Your satisfaction is our priority.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-foreground hover:text-accent">
                  <Facebook size={36} />
                </Link>
                <Link href="#" className="text-foreground hover:text-accent">
                  <Twitter size={36} />
                </Link>
                <Link href="#" className="text-foreground hover:text-accent">
                  <Instagram size={36} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <h4 className="text-3xl font-semibold text-foreground mb-6">Quick Links</h4>
              <Link href="/services" className="text-xl text-foreground hover:text-accent mb-4">Services</Link>
              <Link href="/about" className="text-xl text-foreground hover:text-accent mb-4">About Us</Link>
              <Link href="/contact" className="text-xl text-foreground hover:text-accent mb-4">Contact</Link>
              <Link href="/reviews" className="text-xl text-foreground hover:text-accent mb-4">Reviews</Link>
              <Link href="/leave-a-review" className="text-xl text-foreground hover:text-accent mb-4">Leave a Review</Link>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <h4 className="text-3xl font-semibold text-foreground mb-6">Contact Us</h4>
              <div className="flex items-center mb-4">
                <Phone size={28} className="mr-3 text-primary" />
                <p className="text-xl text-foreground">(555) 123-4567</p>
              </div>
              <div className="flex items-center mb-4">
                <Mail size={28} className="mr-3 text-primary" />
                <p className="text-xl text-foreground">info@expertplumbing.com</p>
              </div>
              <div className="flex items-start mb-4">
                <MapPin size={28} className="mr-3 mt-1 text-primary" />
                <p className="text-xl text-foreground">
                  123 Plumber Street,<br />
                  Pipetown, PL 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <h4 className="text-3xl font-semibold text-foreground mb-6">Business Hours</h4>
              <p className="text-xl text-foreground mb-4">Monday - Friday: 8am - 6pm</p>
              <p className="text-xl text-foreground mb-4">Saturday: 9am - 4pm</p>
              <p className="text-xl text-foreground mb-4">Sunday: Closed</p>
              <p className="text-xl text-primary mt-2">24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>
        
        <Spacer y={4} />
        
        <div className="border-t border-border pt-8">
          <p className="text-center text-xl text-muted-foreground">
            © {new Date().getFullYear()} Expert Plumbing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}