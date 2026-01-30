import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, MapPin } from "lucide-react";
import remaxLogo from "@/assets/remax-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const phoneNumber = "+51 971 438 756";
  const phoneHref = "tel:+51971438756";

  return (
    <>
      {/* Top Bar - Contact Info (Part of sticky flow or hidden on scroll) */}
      <div className={`hidden md:block bg-remax-bridge-blue text-primary-foreground py-2 transition-all duration-300 ${isScrolled ? "-translate-y-full opacity-0 h-0" : "translate-y-0 opacity-100"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href={phoneHref} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{phoneNumber}</span>
            </a>
            <a href="mailto:ciro.clemente@remaxaces.pe" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>ciro.clemente@remaxaces.pe</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>San Isidro, Lima</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-elevated py-2"
            : "bg-white py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
              <img
                src={remaxLogo}
                alt="REMAX Logo"
                className={`transition-all duration-500 ${isScrolled ? "h-10" : "h-14"} w-auto`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-[0.15em] relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={phoneHref}
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-secondary text-secondary rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href="#contacto"
                className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary-hover transition-all shadow-remax hover:shadow-remax-lg transform hover:-translate-y-0.5"
              >
                Agendar Cita Gratis
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4">
              <a
                href={phoneHref}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-white shadow-lg shadow-secondary/20 active:scale-95 transition-transform"
                aria-label="Llamar"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground active:scale-95 transition-transform"
                aria-label="Menú"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[calc(100%-1px)] bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            }`}
        >
          <nav className="container mx-auto px-6 py-10 flex flex-col gap-6 h-screen overflow-y-auto pb-32">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-black text-foreground hover:text-primary transition-all uppercase tracking-tighter flex items-center justify-between group border-b border-border pb-4`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
                <X className="h-5 w-5 opacity-0 group-hover:opacity-100 rotate-45 transition-all" />
              </a>
            ))}
            <div className="mt-4 space-y-4">
              <a
                href={phoneHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-14 flex items-center justify-center gap-3 border-2 border-secondary text-secondary rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-secondary hover:text-white transition-all"
              >
                <Phone className="h-5 w-5" />
                Llamar Ahora
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-14 flex items-center justify-center bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-sm shadow-remax"
              >
                Agendar Cita Gratuita
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
