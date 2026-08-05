import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

interface Marker {
  lat: number;
  lng: number;
  title: string;
  info: string;
}

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  markers?: Marker[];
  onMapReady?: (map: L.Map) => void;
  onMarkerClick?: (marker: Marker) => void;
}

export { Marker };

export function MapView({
  className,
  initialCenter = { lat: 9.8277, lng: -84.2062 },
  initialZoom = 8,
  markers = [],
  onMapReady,
  onMarkerClick,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView(
        [initialCenter.lat, initialCenter.lng],
        initialZoom
      );

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map.current);

      if (onMapReady) {
        onMapReady(map.current);
      }
    }

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers
    markers.forEach((markerData) => {
      const marker = L.marker([markerData.lat, markerData.lng], {
        title: markerData.title,
      }).addTo(map.current!);

      const popupContent = `<div class="p-2"><strong>${markerData.title}</strong><p class="text-sm mt-1">${markerData.info}</p></div>`;
      marker.bindPopup(popupContent);

      marker.on("click", () => {
        marker.openPopup();
        if (onMarkerClick) {
          onMarkerClick(markerData);
        }
      });

      markersRef.current.push(marker);
    });
  }, [initialCenter, initialZoom, markers, onMapReady, onMarkerClick]);

  return (
    <div ref={mapContainer} className={cn("w-full h-[300px]", className)} />
  );
}
