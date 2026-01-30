import remaxLogo from "@/assets/remax-logo.png";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-remax-bridge-blue text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <img
                src={remaxLogo}
                alt="REMAX"
                className="h-16 mx-auto md:mx-0 mb-4 brightness-0 invert"
              />
              <p className="text-xl font-black italic text-primary">
                "Porque vender bien no es suerte. Es estrategia."
              </p>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right space-y-3">
              <p className="font-bold text-lg">Ciro Clemente Albitres</p>
              <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Av. Rivera Navarrete 757, San Isidro</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:ciro.clemente@remaxaces.pe" className="text-sm hover:text-primary transition-colors">
                  ciro.clemente@remaxaces.pe
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+51999999999" className="text-sm hover:text-primary transition-colors">
                  +51 999 999 999
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://tiktok.com/@ciro_clemente"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full text-sm font-semibold transition-colors"
            >
              TikTok @ciro_clemente
            </a>
            <a
              href="https://instagram.com/ciro_asesorinmobiliario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full text-sm font-semibold transition-colors"
            >
              Instagram @ciro_asesorinmobiliario
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-4 px-4">
        <div className="container mx-auto">
          <p className="text-center text-xs text-primary-foreground/50">
            © {currentYear} Ciro Clemente Albitres — REMAX Aces. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
