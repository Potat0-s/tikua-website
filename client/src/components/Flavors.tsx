import FlavorCard from "./FlavorCard";
import { Leaf, Zap, Droplets } from "lucide-react";

export default function Flavors() {
  const flavors = [
    {
      name: "Cas",
      subtitle: "Endémica de Costa Rica",
      description:
        "Cas, la fruta endémica de Costa Rica con sabor único y refrescante. Rica en vitamina C y antioxidantes naturales para tu bienestar diario.",
      color: "#F59E0B",
      icon: <Leaf className="w-5 h-5" style={{ color: "#F59E0B" }} />,
      image: "/manus-storage/tikua_cas_ba459fb8.png",
      benefits: ["Vitamina C", "Antioxidantes", "Costarricense"],
    },
    {
      name: "Guanábana",
      subtitle: "Tropical y Suave",
      description:
        "Guanábana cremosa y exótica. Rica en vitamina C y fibra natural para una hidratación nutritiva y deliciosa.",
      color: "#22c55e",
      icon: <Zap className="w-5 h-5" style={{ color: "#22c55e" }} />,
      image: "/manus-storage/tikua_guanabana_e3380d0c.png",
      benefits: ["Vitamina C", "Fibra", "Tropical"],
    },
    {
      name: "Carambola",
      subtitle: "Exótica y Refrescante",
      description:
        "Carambola con su forma de estrella y sabor único. Una experiencia tropical que refresca y energiza tu día.",
      color: "#a855f7",
      icon: <Droplets className="w-5 h-5" style={{ color: "#a855f7" }} />,
      image: "/manus-storage/tikua_carambola_1bb3f843.png",
      benefits: ["Refrescante", "Exótica", "Energía"],
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
