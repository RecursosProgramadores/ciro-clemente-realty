import { Phone, Mail } from "lucide-react";
import remaxLogo from "@/assets/remax-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <img 
          src={remaxLogo} 
          alt="REMAX Logo" 
          className="h-10 w-auto"
        />
        <div className="flex items-center gap-3">
          <a
            href="tel:+51999999999"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
            aria-label="Llamar"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="mailto:ciro.clemente@remaxaces.pe"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:scale-110"
            aria-label="Enviar email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
