import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Producto: [
      { label: "Sabores", href: "#sabores" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Ingredientes", href: "#ingredientes" },
    ],
    Empresa: [
      { label: "Acerca de Nosotros", href: "#" },
      { label: "Sostenibilidad", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Legal: [
      { label: "Términos de Servicio", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/tikuacr" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/tikuacr" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/tikuacr" },
    { icon: Mail, label: "Email", href: "mailto:info@tikua.com" },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/tikua_logo_dfffeb1a.png"
                alt="Tikua"
                className="w-8 h-8"
              />
              <span className="font-display font-bold text-lg">Tikua</span>
            </div>
            <p className="text-white/70 text-sm">
              Hidratación con propósito. Agua funcional natural para tu estilo
              de vida activo.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm">
            <p>
              &copy; {currentYear} Tikua Agua Funcional Natural. Todos los
              derechos reservados.
            </p>
            <p className="mt-2">
              Hecho con ❤️ para tu bienestar y el del planeta.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
