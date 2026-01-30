import { Check, Camera, Plus } from "lucide-react";

const ResultsSection = () => {
  // Placeholder properties - user will replace with real ones
  const properties = [
    { id: 1, status: "VENDIDO" },
    { id: 2, status: "ALQUILADO" },
    { id: 3, status: "VENDIDO" },
    { id: 4, status: "ALQUILADO" },
  ];

  return (
    <section id="resultados" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Resultados reales
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
            PROPIEDADES QUE HE VENDIDO
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada propiedad tiene su historia de éxito. Estas son algunas de ellas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Property Grid - Placeholders for user images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {properties.map((property) => (
              <div
                key={property.id}
                className="relative rounded-2xl overflow-hidden shadow-elevated group aspect-[3/4]"
              >
                {/* Placeholder for property image */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-3">
                    <Camera className="h-6 w-6 text-foreground/50" />
                  </div>
                  <p className="text-sm font-semibold text-foreground/70">Foto propiedad</p>
                  <p className="text-xs text-muted-foreground">Añade tu imagen</p>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="flex items-center gap-1.5 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-bold text-primary">
                      {property.status}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <p className="font-bold mb-1">Tipo de propiedad</p>
                    <p className="text-sm opacity-80">Distrito, Lima</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Placeholder */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-xl text-muted-foreground">
              <Plus className="h-5 w-5" />
              <span className="text-sm">Añade más propiedades vendidas</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "50+", label: "Propiedades vendidas" },
              { value: "6", label: "Años de experiencia" },
              { value: "60-90", label: "Días promedio de venta" },
              { value: "100%", label: "Clientes satisfechos" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 lg:p-6 bg-card rounded-xl shadow-soft"
              >
                <p className="text-2xl lg:text-3xl font-black text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
