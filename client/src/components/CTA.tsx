import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Comienza tu Viaje de Hidratación Consciente
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-foreground/70 mb-8">
            Únete a miles de personas que ya disfrutan de Tikua Agua Funcional
            Natural. Hidratación pura, sabor real, beneficios comprobados.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Envío gratis en pedidos mayores a $50",
              "Garantía de satisfacción 100%",
              "Ingredientes 100% naturales certificados",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8"
            >
              Comprar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-primary/30 hover:bg-primary/5"
            >
              Conocer Más
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="mt-8 text-sm text-foreground/60">
            ✓ Certificado por organismos de salud | ✓ Producción sostenible |
            ✓ Empaques reciclables
          </p>
        </div>
      </div>
    </section>
  );
}
