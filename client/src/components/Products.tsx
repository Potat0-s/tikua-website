import { ShoppingCart, Leaf } from "lucide-react";

interface Product {
  name: string;
  flavor: string;
  description: string;
  color: string;
  image: string;
  price: string;
}

export default function Products() {
  const products: Product[] = [
    {
      name: "Tikua Cas",
      flavor: "Cas",
      description:
        "Fruta endémica de Costa Rica con sabor único y refrescante. Rica en vitamina C y antioxidantes naturales.",
      color: "#FF6B35",
      image: "/manus-storage/tikua_products_cas_5ffb85b9.png",
      price: "₡2,500",
    },
    {
      name: "Tikua Guanábana",
      flavor: "Guanábana",
      description:
        "Cremosa y exótica. Rica en vitamina C y fibra natural para una hidratación nutritiva y deliciosa.",
      color: "#E91E63",
      image: "/manus-storage/tikua_products_guanabana_10248184.png",
      price: "₡2,500",
    },
    {
      name: "Tikua Carambola",
      flavor: "Carambola",
      description:
        "Con su forma de estrella y sabor único. Una experiencia tropical que refresca y energiza tu día.",
      color: "#9C27B0",
      image: "/manus-storage/tikua_products_carambola_6425bd12.png",
      price: "₡2,500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Descubre la variedad de sabores de Tikua Agua Funcional Natural.
            Cada botella es una experiencia refrescante con beneficios reales.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.flavor}
              className="animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Color Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: product.color }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Flavor Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className="text-sm font-bold"
                      style={{ color: product.color }}
                    >
                      {product.flavor}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm mb-6">
                    {product.description}
                  </p>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-display font-bold"
                      style={{ color: product.color }}
                    >
                      {product.price}
                    </span>
                    <button
                      className="p-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: `${product.color}15`,
                        color: product.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = product.color;
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${product.color}15`;
                        e.currentTarget.style.color = product.color;
                      }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#FF6B3515" }}
            >
              <Leaf className="w-6 h-6" style={{ color: "#FF6B35" }} />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">
              100% Natural
            </h4>
            <p className="text-sm text-foreground/60">
              Ingredientes puros sin conservantes artificiales
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#E91E6315" }}
            >
              <Leaf className="w-6 h-6" style={{ color: "#E91E63" }} />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">
              Funcional
            </h4>
            <p className="text-sm text-foreground/60">
              Con electrolitos y beneficios para tu bienestar
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#9C27B015" }}
            >
              <Leaf className="w-6 h-6" style={{ color: "#9C27B0" }} />
            </div>
            <h4 className="font-display font-bold text-foreground mb-2">
              Sostenible
            </h4>
            <p className="text-sm text-foreground/60">
              Envase reciclable PET 100% amigable con el ambiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
