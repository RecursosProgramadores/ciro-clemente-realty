import { XCircle } from "lucide-react";

const painPoints = [
  "Tu propiedad publicada por meses sin recibir llamadas serias",
  "Consultas de curiosos sin intención real de compra",
  "Bajadas de precio innecesarias por desesperación",
  "Agentes que desaparecen después de firmar",
  "Incertidumbre total ante cada oferta que llega",
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="container-narrow text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
            ¿TE SUENA FAMILIAR?
          </h2>
          <p className="text-muted-foreground">
            Muchos propietarios viven este desgaste. No tiene que ser así.
          </p>
        </div>

        <div className="container-narrow space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-soft animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <XCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
