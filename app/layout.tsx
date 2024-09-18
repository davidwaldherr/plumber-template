'use client'

import React, { useState } from 'react';
import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";
import { GoogleReviewsCard } from "@/components/HomePage/GoogleReviewsCard";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('theme-light');

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <html lang="en" className={theme}>
      <head>
        <title>Plumber Pipeline</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Template for a plumbing website"
        />
        <meta property="og:title" content="Plumbing Template" />
        <meta
          property="og:description"
          content="Template for a plumbing website"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing Template" />
        <meta
          name="twitter:description"
          content="Template for a plumbing website"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="theme-toggle">
            <button 
              className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => toggleTheme('theme-light')}
            >
              GreyBlue-Beige
            </button>
            <button 
              className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => toggleTheme('theme-dark')}
            >
              Dark
            </button>
            <button 
              className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => toggleTheme('theme-blue')}
            >
              Blue-Red
            </button>
            <button 
              className="px-4 py-2 m-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => toggleTheme('theme-green')}
            >
              Turquoise
            </button>
          </div>
          {children}
          <GoogleReviewsCard />
        </main>
        <Footer />
      </body>
    </html>
  );
}
