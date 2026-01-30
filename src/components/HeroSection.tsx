import { Calendar, Play, CheckCircle } from "lucide-react";
import { useState } from "react";
import wsp from "@/assets/logos/wstp.svg";
import ciroPortada from "@/assets/ciroportada.jpg";

const HeroSection = () => {
  const whatsappNumber = "51971438756";
  const whatsappMessage = encodeURIComponent(
    "Hola Ciro, quiero vender/alquilar mi propiedad. Me gustaría agendar una evaluación gratuita."
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  const benefits = [
    "Evaluación gratuita de tu propiedad",
    "Sin compromiso inicial",
    "Respuesta en menos de 24 horas",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-12 lg:py-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 z-0" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              REMAX Aces • 6 años de experiencia
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6 uppercase">
              VENDE TU PROPIEDAD
              <span className="block text-primary mt-1">AL PRECIO QUE MERECE</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-6 leading-relaxed">
              Soy <strong className="text-foreground">Ciro Clemente</strong>, agente inmobiliario especializado en Lima Top y Lima Moderna. Te ayudo a vender con estrategia, no con prisas.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <img src={wsp} alt="WhatsApp" className="h-5 w-5" />
                Escríbeme por WhatsApp
              </a>
              <a
                href="#contacto"
                className="btn-secondary text-base"
              >
                <Calendar className="h-5 w-5" />
                Agendar cita gratuita
              </a>
            </div>

            {/* Slogan */}
            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
              "Porque vender bien no es suerte. <strong className="text-foreground">Es estrategia.</strong>"
            </p>
          </div>

          {/* Image/Video Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className={`relative rounded-2xl overflow-hidden shadow-elevated bg-muted aspect-[4/5] lg:aspect-[3/4] transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                <img
                  src={ciroPortada}
                  alt="Ciro Clemente - Agente Inmobiliario REMAX"
                  className="w-full h-full object-cover object-top"
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
              </div>

              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-2xl animate-pulse">
                  <Play className="h-10 w-10 text-primary/20" />
                </div>
              )}

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-4 right-4 lg:-left-8 lg:right-auto lg:w-72 bg-card rounded-xl p-4 shadow-elevated border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-remax flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-black text-lg">6+</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Años de Experiencia</p>
                    <p className="text-xs text-muted-foreground">Parte de la red #1 mundial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
