import { 
  ClipboardCheck, 
  TrendingUp, 
  Camera, 
  Users, 
  Handshake, 
  Key,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Personalizado",
    description: "Evaluación gratuita con análisis real de mercado. Visitamos tu propiedad y te damos un informe detallado.",
    duration: "1-2 días",
  },
  {
    icon: TrendingUp,
    title: "Precio Estratégico",
    description: "Definimos el precio óptimo para maximizar tu ganancia sin ahuyentar compradores serios.",
    duration: "Incluido",
  },
  {
    icon: Camera,
    title: "Marketing Premium",
    description: "Fotografía profesional, videos, tour virtual y publicidad en las mejores plataformas del mercado.",
    duration: "3-5 días",
  },
  {
    icon: Users,
    title: "Visitas Calificadas",
    description: "Solo traemos compradores pre-filtrados, con capacidad real de compra y genuino interés.",
    duration: "Continuo",
  },
  {
    icon: Handshake,
    title: "Negociación Experta",
    description: "Defendemos tus intereses en cada oferta. Más de 6 años de experiencia cerrando al mejor precio.",
    duration: "Variable",
  },
  {
    icon: Key,
    title: "Cierre + Acompañamiento",
    description: "Desde la firma hasta la entrega de llaves. Te acompañamos en notaría y trámites finales.",
    duration: "Hasta el final",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Método probado
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
            CÓMO TE AYUDO A VENDER
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso claro, transparente y diseñado para que vendas con tranquilidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 lg:space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex gap-4 lg:gap-6 p-5 lg:p-6 bg-background rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-remax flex items-center justify-center shadow-remax group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-7 w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-secondary text-secondary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-foreground uppercase">
                      {step.title}
                    </h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -bottom-5 left-7 text-primary/30">
                    <ArrowRight className="h-5 w-5 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a href="#contacto" className="btn-primary inline-flex text-base">
              Empezar con evaluación gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
