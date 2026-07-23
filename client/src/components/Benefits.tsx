import { Droplets, Leaf, Zap, Heart } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Hidratación Inteligente",
      description:
        "Electrolitos naturales que hidratan tu cuerpo de manera efectiva y duradera.",
      color: "#0891b2",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description:
        "Sin colorantes artificiales, sin conservantes. Solo ingredientes puros de la naturaleza.",
      color: "#10b981",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Funcional",
      description:
        "Con electrolitos, vitaminas y minerales que trabajan para tu bienestar diario.",
      color: "#f59e0b",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bajo en Calorías",
      description:
        "Solo 10 calorías por porción. Hidratación consciente sin culpa.",
      color: "#ec4899",
    },
  ];

  return (
    <section id="benefits-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Por Qué Tikua?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hidratación con propósito. Cada botella está diseñada para apoyar tu
            estilo de vida activo y consciente.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="p-8 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
