import { Check } from "lucide-react";
import propertyImage from "@/assets/property-1.jpg";
import closingImage from "@/assets/closing-deal.jpg";

const properties = [
  {
    image: propertyImage,
    type: "Departamento",
    location: "San Borja",
    status: "VENDIDO",
  },
  {
    image: closingImage,
    type: "Casa",
    location: "Surco",
    status: "ALQUILADO",
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="container-narrow text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
            RESULTADOS QUE HABLAN
          </h2>
          <p className="text-muted-foreground">
            Propiedades vendidas y alquiladas con éxito
          </p>
        </div>

        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-4">
            {properties.map((property, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-elevated group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={property.image}
                  alt={`${property.type} en ${property.location}`}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-xs font-bold text-accent uppercase">
                      {property.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-primary-foreground">
                    {property.type}
                  </h3>
                  <p className="text-xs text-primary-foreground/70">
                    {property.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "50+", label: "Propiedades vendidas" },
              { value: "6", label: "Años de experiencia" },
              { value: "100%", label: "Satisfacción" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-card rounded-xl shadow-soft"
              >
                <p className="text-2xl sm:text-3xl font-black text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
