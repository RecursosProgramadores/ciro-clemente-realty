import { Heart, Shield, Clock } from "lucide-react";
import closingImage from "@/assets/closing-deal.jpg";

const AccompanimentSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="container-narrow">
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src={closingImage}
              alt="Acompañamiento en el cierre"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl sm:text-3xl font-black text-primary-foreground mb-2">
                NO ESTÁS SOLO
              </h2>
              <p className="text-primary-foreground/90">
                Te acompaño desde la decisión hasta la firma y entrega final.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Heart, label: "Acompañamiento humano" },
              { icon: Shield, label: "Seguridad jurídica" },
              { icon: Clock, label: "Disponibilidad total" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-background rounded-xl shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-3">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-xs font-semibold text-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompanimentSection;
