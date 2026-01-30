import { Star, Quote, Award, Users, Building } from "lucide-react";
import remaxLogo from "@/assets/remax-logo.png";
import negociosImg from "@/assets/negocios.jpg";

const AuthoritySection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { icon: Award, value: "6+", label: "Años REMAX" },
              { icon: Building, value: "50+", label: "Propiedades" },
              { icon: Users, value: "100%", label: "Satisfacción" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 lg:p-6 bg-card rounded-xl shadow-soft"
              >
                <stat.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl lg:text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Agent Profile Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Image Container */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated aspect-square lg:aspect-[4/5] bg-muted">
                <img
                  src={negociosImg}
                  alt="Ciro Clemente - Negocios Inmobiliarios"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* REMAX Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-3 shadow-elevated">
                <img src={remaxLogo} alt="REMAX" className="h-14 w-auto" />
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
                CIRO CLEMENTE ALBITRES
              </h2>
              <p className="text-primary font-bold uppercase mb-4 text-lg">
                Agente REMAX Aces • San Isidro
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Con más de 6 años en REMAX, me especializo en propiedades de alto valor en
                <strong className="text-foreground"> Lima Top y Lima Moderna</strong>.
                Mi enfoque: vender bien, no solo vender rápido. Tu patrimonio merece estrategia.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {["Surco", "San Borja", "Magdalena", "Jesús María", "San Isidro"].map((zone) => (
                  <span
                    key={zone}
                    className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium text-foreground"
                  >
                    {zone}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Parte de la <strong className="text-foreground">red inmobiliaria #1 mundial</strong> en ventas de propiedades
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-elevated border-l-4 border-primary">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
              "Es la segunda vez que trabajo con el Sr. Ciro Clemente y puedo decir que estoy
              <strong> satisfecha con su profesionalismo</strong>. Me da confianza para poner en sus manos
              la búsqueda de un inquilino que cumpla con el perfil que deseo, además de encargarse de
              todo lo necesario de la gestión. <strong className="text-primary">Lo recomiendo 100%.</strong>"
            </blockquote>

            <footer className="flex items-center gap-4">
              {/* Placeholder for testimonial photo */}
              <div className="w-14 h-14 rounded-full bg-gradient-remax flex items-center justify-center text-primary-foreground font-bold text-lg">
                JP
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Janet Rocío Palomino Olivares</p>
                <p className="text-muted-foreground">Cliente recurrente • Lima</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
