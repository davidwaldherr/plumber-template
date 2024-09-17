import React, { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";
import { Phone, Send } from 'lucide-react';

function MapContent({ onLoad }: { onLoad: (map: google.maps.Map) => void }) {
  const map = useMap();

  React.useEffect(() => {
    if (map) {
      onLoad(map);
    }
  }, [map, onLoad]);

  return (
    <AdvancedMarker position={{ lat: 43.596478, lng: -88.0883927 }}>
      <Pin
        scale={3}
        background={"rgb(var(--color-3))"}
        borderColor={"rgb(var(--color-5))"}
        glyphColor={"rgb(var(--color-1))"}
      />
    </AdvancedMarker>
  );
}

export default function GoogleMapsSection() {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  return (
    <section className="py-20 bg-[rgb(var(--color-1))]">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* Map container */}
        <div className="w-full md:w-1/2 h-[400px] border-4 border-[rgb(var(--color-3))]">
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <Map
              mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID!}
              center={{ lat: 43.596478, lng: -88.0883928 }}
              zoom={13}
              disableDefaultUI={true}
            >
              <MapContent onLoad={onLoad} />
            </Map>
          </APIProvider>
        </div>

        {/* Information container */}
        <div className="hidden md:block md:w-1/2 pl-4">
          <div className="">
            <p className="text-2xl font-bold text-[rgb(var(--color-5))]">
              123 Main St, YourCity, YourState, 12345
            </p>
            <a
              href="https://www.google.com/search?q=123+Main+St,+YourCity,+YourState,+12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-[rgb(var(--color-3))] underline"
            >
              View on Google
            </a>
          </div>
        {/* Add other business information */}
        <div className=" mt-2">
          <p className="text-lg text-[rgb(var(--color-5))]">Open Hours: Mon-Fri 9am - 5pm</p>
          <p className="text-lg text-[rgb(var(--color-5))]">Phone: (123) 456-7890</p>
        </div>

        {/* Add Phone and Schedule Online buttons */}
        <div className="flex justify-center gap-10 mt-10 mb-6">
          <button className="bg-[rgb(var(--color-3))] text-white py-6 px-12 text-2xl rounded-lg shadow-xl flex items-center justify-center gap-2">
            <Phone size={24} /> {/* Icon added */}
            Call Us
          </button>
          <button className="bg-[rgb(var(--color-5))] text-white py-6 px-12 text-2xl rounded-lg shadow-xl flex items-center justify-center gap-2">
            <Send size={24} /> {/* Icon added */}
            Schedule Online
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
