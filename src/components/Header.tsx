import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, MapPin } from "lucide-react";
import remaxLogo from "@/assets/remax-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#proceso", label: "Cómo Trabajo" },
    { href: "#resultados", label: "Resultados" },
    { href: "#faq", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-remax-bridge-blue text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+51999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+51 999 999 999</span>
            </a>
            <a href="mailto:ciro.clemente@remaxaces.pe" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>ciro.clemente@remaxaces.pe</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>San Isidro, Lima</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-card/98 backdrop-blur-md shadow-elevated py-3" 
            : "bg-card py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src={remaxLogo} 
                alt="REMAX Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block border-l-2 border-primary pl-3">
                <p className="text-xs font-bold text-foreground uppercase tracking-wide">Ciro Clemente</p>
                <p className="text-xs text-muted-foreground">Agente Inmobiliario</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+51999999999"
                className="flex items-center gap-2 px-4 py-2.5 border-2 border-secondary text-secondary rounded-lg font-semibold text-sm hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href="#contacto"
                className="btn-primary px-5 py-2.5 text-sm"
              >
                Agendar Cita Gratis
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+51999999999"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-105"
                aria-label="Llamar"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-foreground"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-elevated animate-fade-up">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-semibold text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full justify-center mt-4"
              >
                Agendar Cita Gratuita
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
