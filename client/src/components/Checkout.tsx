import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";

export default function Checkout() {
  const { items, total } = useCart();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Costa Rica",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      console.log("Pedido enviado:", { formData, paymentMethod, items, total });
      alert("¡Pedido realizado exitosamente! Pronto recibirás un email de confirmación.");
      setIsSubmitting(false);
      setLocation("/");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Volver a la tienda
          </button>
          
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Tu carrito está vacío
            </h1>
            <p className="text-foreground/60 mb-8">
              Agrega productos antes de proceder al checkout
            </p>
            <Button
              onClick={() => setLocation("/")}
              className="bg-primary hover:bg-primary/90"
            >
              Ir a Productos
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container">
        {/* Header */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Volver a la tienda
        </button>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Checkout
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <Card className="p-6 border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Información Personal
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground font-medium mb-2">
                      Nombre
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Juan"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground font-medium mb-2">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Pérez"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="juan@example.com"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium mb-2">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+506 1234 5678"
                      className="border-border"
                    />
                  </div>
                </div>
              </Card>

              {/* Dirección de Envío */}
              <Card className="p-6 border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Dirección de Envío
                </h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address" className="text-foreground font-medium mb-2">
                      Dirección
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Calle Principal 123, Apartamento 4B"
                      className="border-border"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-foreground font-medium mb-2">
                        Ciudad
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="San José"
                        className="border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="province" className="text-foreground font-medium mb-2">
                        Provincia
                      </Label>
                      <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-white text-foreground"
                      >
                        <option value="">Selecciona una provincia</option>
                        <option value="San José">San José</option>
                        <option value="Alajuela">Alajuela</option>
                        <option value="Cartago">Cartago</option>
                        <option value="Heredia">Heredia</option>
                        <option value="Guanacaste">Guanacaste</option>
                        <option value="Puntarenas">Puntarenas</option>
                        <option value="Limón">Limón</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="postalCode" className="text-foreground font-medium mb-2">
                      Código Postal
                    </Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      placeholder="10101"
                      className="border-border"
                    />
                  </div>
                </div>
              </Card>

              {/* Método de Pago */}
              <Card className="p-6 border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Método de Pago
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="font-medium text-foreground">Tarjeta de Crédito/Débito</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={paymentMethod === "transfer"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="font-medium text-foreground">Transferencia Bancaria</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="font-medium text-foreground">Contra Entrega</span>
                  </label>
                </div>
              </Card>

              {/* Botón Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 font-medium"
              >
                {isSubmitting ? "Procesando..." : "Completar Pedido"}
              </Button>
            </form>
          </div>

          {/* Resumen del Pedido */}
          <div>
            <Card className="p-6 border-border sticky top-20">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Resumen del Pedido
              </h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                {items.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-foreground/60">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-foreground">₡{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/60">Subtotal</span>
                  <span className="font-medium text-foreground">{total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/60">Envío</span>
                  <span className="font-medium text-foreground">Gratis</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border">
                  <span className="font-bold text-foreground">Total</span>
                  <span className="font-bold text-lg text-primary">{total}</span>
                </div>
              </div>

              <p className="text-xs text-foreground/50 mt-4">
                Envío gratis para todos los pedidos en Costa Rica
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
