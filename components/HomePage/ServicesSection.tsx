import React from "react";
import { Wrench } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[rgb(var(--color-1))]">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-10 text-[rgb(var(--color-5))]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Repair", "Installation", "Maintenance"].map((service) => (
            <a key={service} href={`/services/${service.toLowerCase()}`} className="hover:scale-105 transition-transform">
              <div className="bg-[rgb(var(--color-5))] text-[rgb(var(--color-1))] shadow-md rounded-lg hover:bg-[rgb(var(--color-3))] transition-colors">
                <div className="p-6 text-center">
                  <Wrench className="mx-auto mb-4 text-[rgb(var(--color-1))]" size={48} />
                  <h3 className="text-3xl font-semibold text-center mb-2 text-[rgb(var(--color-1))]">{service}</h3>
                  <p>Professional {service.toLowerCase()} services for all your plumbing needs.</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;