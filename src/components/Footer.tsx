import remaxLogo from "@/assets/remax-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="container mx-auto">
        <div className="container-narrow text-center">
          <img
            src={remaxLogo}
            alt="REMAX"
            className="h-12 mx-auto mb-4 brightness-0 invert"
          />
          
          <p className="text-lg font-black italic mb-4 text-primary">
            "Porque vender bien no es suerte. Es estrategia."
          </p>
          
          <div className="text-sm text-background/60 space-y-1">
            <p>Av. Rivera Navarrete 757, San Isidro, Lima</p>
            <p>ciro.clemente@remaxaces.pe</p>
          </div>
          
          <div className="border-t border-background/20 mt-6 pt-6">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} Ciro Clemente Albitres — REMAX Aces. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
