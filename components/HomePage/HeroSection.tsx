import React from "react";
import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import heroImage from "@/public/images/plumbing-hero.svg";

const HeroSection = () => {
  return (
    <main className="grid md:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 ml-12 md:pb-24 px-20 md:px-18 bg-primary text-primary-foreground">
      <div className="py-6 md:order-1 hidden md:block">
        <Image
          src={heroImage}
          alt="Plumber at work"
          width={500}
          height={350}
          sizes="(max-width: 800px) 100vw, 620px"
          priority
          className="mt-[-20px]"
        />
      </div>
      <div>
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold lg:tracking-tight xl:tracking-tighter">
          Expert Plumbing Services
        </h1>
        <p className="text-2xl mt-4 max-w-xl">
          Professional, reliable, and efficient plumbing solutions for your home and business.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="bg-secondary text-secondary-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
            Schedule Online <Clock size={32} className="ml-3" />
          </button>
          <button className="bg-accent text-accent-foreground px-10 py-5 rounded-full text-2xl font-semibold flex items-center">
            Call Now <Phone size={32} className="ml-3" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
