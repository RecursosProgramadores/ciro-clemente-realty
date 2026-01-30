import { Star, Quote } from "lucide-react";
import ciroImage from "@/assets/ciro-hero.jpg";
import remaxLogo from "@/assets/remax-logo.png";

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="container-narrow">
          {/* Agent Card */}
          <div className="card-premium mb-8 text-center">
            <div className="relative inline-block mb-4">
              <img
                src={ciroImage}
                alt="Ciro Clemente"
                className="w-32 h-32 rounded-full object-cover object-top border-4 border-primary shadow-remax"
              />
              <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                6 AÑOS
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
              CIRO CLEMENTE ALBITRES
            </h2>
            <p className="text-primary font-bold uppercase mb-4">
              Agente REMAX Aces
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={remaxLogo} alt="REMAX" className="h-12" />
            </div>
            
            <p className="text-muted-foreground text-sm">
              Parte de la red inmobiliaria <strong className="text-foreground">#1 mundial</strong> en ventas de propiedades
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative bg-secondary/10 rounded-2xl p-6 border-l-4 border-primary">
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
            
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            
            <blockquote className="text-foreground italic mb-4">
              "Es la segunda vez que trabajo con el Sr. Ciro Clemente y puedo decir que estoy satisfecha con su profesionalismo. Me da confianza para poner en sus manos la búsqueda de un inquilino que cumpla con el perfil que deseo, además de encargarse de todo lo necesario de la gestión. <strong>Lo recomiendo 100%.</strong>"
            </blockquote>
            
            <footer className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                JP
              </div>
              <div>
                <p className="font-bold text-foreground">Janet Rocío Palomino Olivares</p>
                <p className="text-sm text-muted-foreground">Cliente recurrente</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
