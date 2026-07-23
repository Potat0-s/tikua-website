import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Sabores", href: "products-section" },
    { label: "Beneficios", href: "benefits-section" },
    { label: "Ingredientes", href: "ingredients-section" },
  ];

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/manus-storage/tikua_logo_dfffeb1a.png"
            alt="Tikua"
            className="w-10 h-10"
          />
          <span className="font-display font-bold text-xl text-primary">
            Tikua
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            onClick={() => handleNavClick("products-section")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Comprar Ahora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors text-left cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick("products-section")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Comprar Ahora
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
