import React, { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from "@vis.gl/react-google-maps";

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
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-10 text-[rgb(var(--color-5))]">Find Us</h2>
        <div className="w-full h-[400px] border-4 border-[rgb(var(--color-3))]">
          <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY!}>
            <Map
              mapId={process.env.GOOGLE_MAPS_ID!}
              center={{ lat: 43.596478, lng: -88.0883928 }}
              zoom={13}
              disableDefaultUI={true}
            >
              <MapContent onLoad={onLoad} />
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}
