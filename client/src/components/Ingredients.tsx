export default function Ingredients() {
  const ingredients = [
    {
      name: "Agua Purificada",
      description: "Base pura y cristalina para una hidratación óptima",
      icon: "💧",
    },
    {
      name: "Electrolitos Naturales",
      description: "Sodio, potasio y magnesio para equilibrio perfecto",
      icon: "⚡",
    },
    {
      name: "Frutas Frescas",
      description: "Limón, fresas, frambuesas, piña y maracuyá naturales",
      icon: "🍓",
    },
    {
      name: "Extractos Naturales",
      description: "Menta, hierbas aromáticas sin químicos sintéticos",
      icon: "🌿",
    },
    {
      name: "Ácido Cítrico",
      description: "Conservante natural que realza el sabor",
      icon: "🍋",
    },
    {
      name: "Cero Aditivos",
      description: "Sin colorantes, sin conservantes artificiales",
      icon: "✓",
    },
  ];

  return (
    <section id="ingredientes" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Ingredientes Naturales
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Cada ingrediente está cuidadosamente seleccionado para garantizar
            calidad, pureza y beneficio real.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.name}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="text-4xl mb-3">{ingredient.icon}</div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {ingredient.name}
              </h3>
              <p className="text-foreground/60 text-sm">{ingredient.description}</p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-center text-foreground/80">
            <span className="font-display font-bold text-primary">
              Transparencia Total:
            </span>{" "}
            Todos nuestros ingredientes están listados en la etiqueta. Sin
            sorpresas, sin secretos. Solo agua funcional pura y natural.
          </p>
        </div>
      </div>
    </section>
  );
}
