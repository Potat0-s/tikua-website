import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

interface Marker {
  lat: number;
  lng: number;
  title: string;
  info: string;
  type?: "supermarket" | "gym" | "health" | "cafe";
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

// Helper function to create marker color based on type
export function getMarkerColor(type?: string): string {
  switch (type) {
    case "supermarket":
      return "#4ECDC4";
    case "gym":
      return "#95E1D3";
    case "health":
      return "#A8E6CF";
    case "cafe":
      return "#FFD3B6";
    default:
      return "#FF6B6B";
  }
}

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

    // Add new markers with custom colors based on type
    markers.forEach((markerData) => {
      // Determine marker color based on type
      let markerColor = "#FF6B6B"; // default red
      if (markerData.type === "supermarket") markerColor = "#4ECDC4"; // teal for supermarket
      else if (markerData.type === "gym") markerColor = "#95E1D3"; // light green for gym
      else if (markerData.type === "health") markerColor = "#A8E6CF"; // green for health
      else if (markerData.type === "cafe") markerColor = "#FFD3B6"; // orange for cafe

      // Create custom HTML for marker
      const markerHTML = `
        <div style="
          background-color: ${markerColor};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          color: white;
          font-weight: bold;
          font-size: 14px;
        ">
          📍
        </div>
      `;

      const markerElement = L.divIcon({
        html: markerHTML,
        iconSize: [30, 30],
        className: "custom-marker",
      });

      const marker = L.marker([markerData.lat, markerData.lng], {
        icon: markerElement,
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
