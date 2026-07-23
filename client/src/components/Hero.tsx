import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const productsRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("benefits-section");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/manus-storage/tikua_hero_bg_782531a8.png')",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex flex-col gap-6 max-w-2xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Hidratación con Propósito
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Agua funcional natural con ingredientes puros y beneficios reales.
            Cada sorbo cuenta.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14"
          >
            Descubre Nuestros Sabores
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            onClick={scrollToBenefits}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg h-14"
          >
            Conoce los Beneficios
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
