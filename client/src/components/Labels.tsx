export default function Labels() {
  const labels = [
    {
      name: "Cas",
      image: "/manus-storage/tikua_label_cas_final_4e9ed50c.png",
      color: "#F59E0B",
    },
    {
      name: "Guanábana",
      image: "/manus-storage/tikua_label_guanabana_94451d63.png",
      color: "#22c55e",
    },
    {
      name: "Carambola",
      image: "/manus-storage/tikua_label_carambola_7ac6e036.png",
      color: "#a855f7",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nuestras Etiquetas
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Diseño profesional que refleja la calidad y naturalidad de Tikua.
            Cada etiqueta cuenta la historia de nuestro producto.
          </p>
        </div>

        {/* Labels Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {labels.map((label, index) => (
            <div
              key={label.name}
              className="animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                {/* Label Image */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={label.image}
                    alt={`Etiqueta ${label.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Label Name */}
                <div className="p-4 text-center border-t border-border">
                  <h3
                    className="text-lg font-display font-bold"
                    style={{ color: label.color }}
                  >
                    {label.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    Etiqueta completa
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 p-8 rounded-xl bg-white border border-primary/20">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">
            Componentes de la Etiqueta
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-display font-bold text-foreground mb-2">
                Información Nutricional
              </h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• 10 kcal por porción</li>
                <li>• 0g de azúcar añadida</li>
                <li>• Electrolitos naturales (Na, K, Mg)</li>
                <li>• Sin conservantes artificiales</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-2">
                Ingredientes Naturales
              </h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• Agua purificada (89%)</li>
                <li>• Pulpa natural de fruta (8%)</li>
                <li>• Electrolitos naturales</li>
                <li>• Stevia, ácido cítrico y esencia natural</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
