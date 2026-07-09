import FlavorCard from "./FlavorCard";
import { Leaf, Zap, Droplets } from "lucide-react";

export default function Flavors() {
  const flavors = [
    {
      name: "Limón & Menta",
      subtitle: "Fresco y Revitalizante",
      description:
        "Una combinación clásica que refresca y energiza. Limón natural con menta pura para una experiencia refrescante sin igual.",
      color: "#0891b2",
      icon: <Leaf className="w-5 h-5" style={{ color: "#0891b2" }} />,
      image: "/manus-storage/tikua_limon_menta_nature.png",
      benefits: ["Energía", "Digestión", "Frescura"],
    },
    {
      name: "Frutos Rojos",
      subtitle: "Antioxidantes Naturales",
      description:
        "Fresas, frambuesas y arándanos en una mezcla vibrante. Rico en antioxidantes y vitaminas para tu bienestar diario.",
      color: "#ec4899",
      icon: <Zap className="w-5 h-5" style={{ color: "#ec4899" }} />,
      image: "/manus-storage/tikua_frutos_rojos.png",
      benefits: ["Antioxidantes", "Vitaminas", "Vitalidad"],
    },
    {
      name: "Piña & Maracuyá",
      subtitle: "Tropical y Exótico",
      description:
        "Sabores tropicales que transportan tus sentidos. Piña dulce con maracuyá ácida para un equilibrio perfecto.",
      color: "#f59e0b",
      icon: <Droplets className="w-5 h-5" style={{ color: "#f59e0b" }} />,
      image: "/manus-storage/tikua_pina_maracuya.png",
      benefits: ["Tropical", "Enzimas", "Refrescante"],
    },
  ];

  return (
    <section id="sabores" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nuestros Sabores
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada sabor es una experiencia única diseñada con ingredientes
            naturales puros y beneficios funcionales reales.
          </p>
        </div>

        {/* Flavor Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <FlavorCard {...flavor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
