import { MessageCircle, Calendar } from "lucide-react";
import heroImage from "@/assets/ciro-hero.jpg";

const HeroSection = () => {
  const whatsappNumber = "51999999999";
  const whatsappMessage = encodeURIComponent(
    "Hola Ciro, quiero vender/alquilar mi propiedad. Me gustaría agendar una evaluación gratuita."
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-8 pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ciro Clemente - Agente Inmobiliario REMAX"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-lg animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-foreground leading-tight mb-4">
            TU PROPIEDAD, AL PRECIO QUE MERECE
            <span className="block text-primary mt-2">— SIN ESTRÉS, SIN DUDAS.</span>
          </h1>
          
          <p className="text-lg text-primary-foreground/90 mb-2 font-medium">
            Soy Ciro Clemente, agente REMAX con 6 años de resultados reales.
          </p>
          
          <p className="text-base text-primary-foreground/70 mb-6 italic">
            "Porque vender bien no es suerte. Es estrategia."
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-5 w-5" />
              Escríbeme por WhatsApp
            </a>
            <a
              href="#contacto"
              className="btn-secondary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              <Calendar className="h-5 w-5" />
              Agendar visita gratuita
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
