import { XCircle, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    title: "Meses sin llamadas serias",
    description: "Tu propiedad publicada y el teléfono en silencio.",
  },
  {
    title: "Curiosos sin intención real",
    description: "Consultas que no llevan a ningún lado.",
  },
  {
    title: "Bajadas de precio por presión",
    description: "Vendes por menos de lo que realmente vale.",
  },
  {
    title: "Agentes que desaparecen",
    description: "Firmas y nunca más sabes de ellos.",
  },
  {
    title: "Incertidumbre constante",
    description: "No sabes si la oferta es buena o te están engañando.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <AlertTriangle className="h-4 w-4" />
            ¿Te identificas?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
            VENDER SOLO ES MÁS DIFÍCIL DE LO QUE PARECE
          </h2>
          <p className="text-lg text-muted-foreground">
            Muchos propietarios en Surco, San Borja y Magdalena viven este desgaste. 
            <strong className="text-foreground"> No tiene que ser así.</strong>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 lg:p-6 bg-background rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <XCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              ¿Cansado de este ciclo? Hay una mejor forma de vender.
            </p>
            <a href="#proceso" className="btn-primary inline-flex">
              Conoce mi método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
