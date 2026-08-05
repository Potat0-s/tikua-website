import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, MapIcon, Navigation } from "lucide-react";
import { MapView, Marker } from "./MapLeaflet";

interface SalesPoint {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  type: "supermarket" | "gym" | "health" | "cafe";
  lat: number;
  lng: number;
  city: string;
}

export default function SalesPoints() {
  const [selectedPoint, setSelectedPoint] = useState<SalesPoint | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [nearestPoint, setNearestPoint] = useState<SalesPoint | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({ lat: 9.8277, lng: -84.2062 });
  const [mapZoom, setMapZoom] = useState(8);

  const salesPoints: SalesPoint[] = [
    {
      id: "1",
      name: "Mega Tienda San José",
      address: "Avenida Central, San José, Costa Rica",
      phone: "+506 2234-5678",
      hours: "Lun-Dom: 8:00 AM - 9:00 PM",
      type: "supermarket",
      lat: 9.9281,
      lng: -84.0907,
      city: "San José",
    },
    {
      id: "2",
      name: "FitLife Gym Alajuela",
      address: "Calle 4, Alajuela, Costa Rica",
      phone: "+506 2441-1234",
      hours: "Lun-Vie: 6:00 AM - 10:00 PM",
      type: "gym",
      lat: 10.0163,
      lng: -84.2317,
      city: "Alajuela",
    },
    {
      id: "3",
      name: "Farmacia Natural Cartago",
      address: "Avenida 2, Cartago, Costa Rica",
      phone: "+506 2551-5555",
      hours: "Lun-Sab: 8:00 AM - 8:00 PM",
      type: "health",
      lat: 9.8561,
      lng: -83.9185,
      city: "Cartago",
    },
    {
      id: "4",
      name: "Café Orgánico Heredia",
      address: "Calle Central, Heredia, Costa Rica",
      phone: "+506 2260-9876",
      hours: "Lun-Dom: 7:00 AM - 7:00 PM",
      type: "cafe",
      lat: 10.0067,
      lng: -84.1239,
      city: "Heredia",
    },
    {
      id: "5",
      name: "SuperMercado Puriscal",
      address: "Ruta 27, Puriscal, Costa Rica",
      phone: "+506 2541-2222",
      hours: "Lun-Dom: 8:00 AM - 8:00 PM",
      type: "supermarket",
      lat: 9.7667,
      lng: -84.3667,
      city: "Puriscal",
    },
    {
      id: "6",
      name: "Wellness Center San Isidro",
      address: "Avenida Principal, San Isidro, Costa Rica",
      phone: "+506 2770-4444",
      hours: "Lun-Vie: 7:00 AM - 6:00 PM",
      type: "health",
      lat: 9.5667,
      lng: -83.7333,
      city: "San Isidro",
    },
    {
      id: "7",
      name: "Supermercado La Vieja Estacion",
      address: "Calle 2, Limon, Costa Rica",
      phone: "+506 2758-1234",
      hours: "Lun-Dom: 7:00 AM - 9:00 PM",
      type: "supermarket",
      lat: 9.9933,
      lng: -83.0333,
      city: "Limon",
    },
    {
      id: "8",
      name: "Supermercado Central Puntarenas",
      address: "Avenida Central, Puntarenas, Costa Rica",
      phone: "+506 2661-5555",
      hours: "Lun-Dom: 8:00 AM - 8:00 PM",
      type: "supermarket",
      lat: 9.9789,
      lng: -84.8361,
      city: "Puntarenas",
    },
  ];

  const typeColors: Record<string, { bg: string; text: string; label: string }> =
    {
      supermarket: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        label: "Supermercado",
      },
      gym: { bg: "bg-green-100", text: "text-green-700", label: "Gimnasio" },
      health: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        label: "Salud",
      },
      cafe: { bg: "bg-amber-100", text: "text-amber-700", label: "Café" },
    };

  const handleMapReady = () => {
    setMapReady(true);
  };

  // Get user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
          setMapZoom(12);
          
          // Find nearest point
          let nearest = salesPoints[0];
          let minDistance = calculateDistance(latitude, longitude, nearest.lat, nearest.lng);
          
          salesPoints.forEach((point) => {
            const distance = calculateDistance(latitude, longitude, point.lat, point.lng);
            if (distance < minDistance) {
              minDistance = distance;
              nearest = point;
            }
          });
          
          setNearestPoint(nearest);
        },
        (error) => {
          console.warn("Geolocation error:", error);
        }
      );
    }
  }, []);

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Convert sales points to map markers
  const mapMarkers: Marker[] = salesPoints.map((point) => ({
    lat: point.lat,
    lng: point.lng,
    title: point.name,
    info: `${point.address}<br/>${point.phone}<br/>${point.hours}`,
    type: point.type as "supermarket" | "gym" | "health" | "cafe",
  }));

  const handleMarkerClick = (marker: Marker) => {
    const point = salesPoints.find((p) => p.name === marker.title);
    if (point) {
      setSelectedPoint(point);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Puntos de Venta
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Encuentra Tikua en los mejores puntos de venta de Costa Rica.
            Disponible en supermercados, gimnasios, tiendas de salud y cafés.
          </p>
          
          {/* Nearest Point Info */}
          {nearestPoint && (
            <div className="mt-6 inline-block bg-primary/10 border border-primary/30 rounded-lg p-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Navigation className="w-4 h-4" />
                <span>Punto más cercano: <strong>{nearestPoint.name}</strong></span>
              </div>
            </div>
          )}
        </div>

        {/* Map and List Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Map */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-full min-h-96">
              <MapView
                initialCenter={mapCenter}
                initialZoom={mapZoom}
                markers={mapMarkers}
                onMapReady={handleMapReady}
                onMarkerClick={handleMarkerClick}
              />
            </div>
          </div>

          {/* Sidebar with List */}
          <div className="space-y-4 max-h-96 md:max-h-full overflow-y-auto pr-2">
            {salesPoints.map((point) => (
              <div
                key={point.id}
                onClick={() => {
                  setSelectedPoint(point);
                  setMapCenter({ lat: point.lat, lng: point.lng });
                  setMapZoom(14);
                }}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedPoint?.id === point.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {/* Type Badge */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-bold text-foreground text-sm">
                    {point.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      typeColors[point.type].bg
                    } ${typeColors[point.type].text}`}
                  >
                    {typeColors[point.type].label}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex gap-2 items-start">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{point.address}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                    <a
                      href={`tel:${point.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {point.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{point.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type Legend */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="font-display font-bold text-foreground mb-4">
            Tipos de Puntos de Venta
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(typeColors).map(([key, colors]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${colors.bg}`}
                  style={{
                    backgroundColor:
                      key === "supermarket"
                        ? "#DBEAFE"
                        : key === "gym"
                          ? "#DCFCE7"
                          : key === "health"
                            ? "#F3E8FF"
                            : "#FEF3C7",
                  }}
                />
                <span className="text-sm text-foreground/70">
                  {colors.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 rounded-xl bg-white border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-2">
            ¿No encuentras Tikua cerca de ti?
          </h3>
          <p className="text-foreground/60 mb-6">
            Contáctanos para conocer sobre nuevos puntos de venta o compra online.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:info@tikua.com"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Enviar Consulta
            </a>
            <a
              href="#"
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              Comprar Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
