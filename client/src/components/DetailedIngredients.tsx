import { Droplet, Leaf, Zap, Shield } from "lucide-react";

export default function DetailedIngredients() {
  const ingredients = [
    {
      name: "Agua Purificada (89%)",
      description:
        "Base del producto, tratada mediante filtración de carbono, ósmosis inversa y luz ultravioleta, lo que garantiza pureza microbiológica sin alterar su sabor.",
      icon: <Droplet className="w-6 h-6" />,
      color: "#0891b2",
    },
    {
      name: "Pulpa Natural de Fruta (8%)",
      description:
        "Según la variedad: pulpa de cas (fruta ácida y aromática originaria de Costa Rica), guanábana (pulpa cremosa, dulce y perfumada) o carambola (la 'fruta estrella', refrescante y cítrica). La pulpa es adquirida directamente a cooperativas nacionales.",
      icon: <Leaf className="w-6 h-6" />,
      color: "#22c55e",
    },
    {
      name: "Electrolitos Naturales",
      description:
        "Citratos de sodio, potasio y magnesio. Minerales esenciales que ayudan a reponer las sales que el cuerpo pierde con la sudoración, favoreciendo una hidratación más efectiva. Son el componente funcional del producto.",
      icon: <Zap className="w-6 h-6" />,
      color: "#f59e0b",
    },
    {
      name: "Stevia (Glucósidos de Esteviol)",
      description:
        "Endulzante de origen vegetal, sin calorías, que aporta un dulzor suave sin elevar el azúcar en sangre. Permite declarar el producto como sin azúcar añadida.",
      icon: <Shield className="w-6 h-6" />,
      color: "#a855f7",
    },
    {
      name: "Ácido Cítrico",
      description:
        "Conservante natural presente en las frutas cítricas. Regula la acidez, protege el color y extiende la vida útil del producto sin necesidad de preservantes artificiales.",
      icon: <Droplet className="w-6 h-6" />,
      color: "#ec4899",
    },
    {
      name: "Esencia Natural de Fruta",
      description:
        "Extracto aromático obtenido de la misma fruta de cada variedad, que refuerza el aroma y la experiencia sensorial.",
      icon: <Leaf className="w-6 h-6" />,
      color: "#10b981",
    },
  ];

  return (
    <section id="ingredients-section" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nuestros Ingredientes
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada botella de Tikua contiene únicamente seis ingredientes, todos de origen natural.
            Sin artificiales, sin sorpresas.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.name}
              className="p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${ingredient.color}15`, color: ingredient.color }}
              >
                {ingredient.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {ingredient.name}
              </h3>
              <p className="text-foreground/70 text-sm">{ingredient.description}</p>
            </div>
          ))}
        </div>

        {/* Nutrition Facts */}
        <div className="max-w-2xl mx-auto p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            Información Nutricional
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">10</p>
              <p className="text-sm text-foreground/60">kcal por porción</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">0g</p>
              <p className="text-sm text-foreground/60">Azúcar añadida</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">55mg</p>
              <p className="text-sm text-foreground/60">Sodio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">75mg</p>
              <p className="text-sm text-foreground/60">Potasio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">10mg</p>
              <p className="text-sm text-foreground/60">Magnesio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-display font-bold text-primary">2g</p>
              <p className="text-sm text-foreground/60">Carbohidratos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
