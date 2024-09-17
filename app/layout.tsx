import React from 'react';
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
  return (
    <html lang="en">
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
          {children}
          <GoogleReviewsCard />
        </main>
        <Footer />
      </body>
    </html>
  );
}
