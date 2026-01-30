import {
  ClipboardCheck,
  TrendingUp,
  Camera,
  Users,
  Handshake,
  Key,
  ArrowRight,
  ArrowDown
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
    <section id="proceso" className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Método probado y efectivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            CÓMO VENDEMOS TU PROPIEDAD
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso estratégico diseñado para maximizar el valor de tu inmueble
            en el menor tiempo posible, con total transparencia.
          </p>
        </div>

        {/* Process Map Container */}
        <div className="relative max-w-6xl mx-auto">

          {/* Row 1: Steps 1-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 lg:mb-12">
            {steps.slice(0, 3).map((step, index) => (
              <div key={index} className="relative group">
                <div className="card-premium h-full flex flex-col p-8 hover:translate-y-[-5px] transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-remax flex items-center justify-center shadow-remax group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-black text-primary/60 group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3 uppercase leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Horizontal Arrow (Desktop) */}
                {index < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-primary animate-bounce-horizontal">
                    <ArrowRight className="h-8 w-8 stroke-[3px]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connection Line: From Step 3 to 4 (Desktop) */}
          <div className="hidden lg:flex absolute right-[16.6%] top-[200px] h-12 w-12 border-r-4 border-b-4 border-dashed border-primary/20 rounded-br-2xl -z-10" />
          <div className="hidden lg:flex absolute right-[16.6%] top-[248px] w-[66.6%] border-b-4 border-dashed border-primary/20 -z-10" />
          <div className="hidden lg:flex absolute left-[16.6%] top-[248px] h-12 w-12 border-l-4 border-t-4 border-dashed border-primary/20 rounded-tl-2xl -z-10" />

          {/* Row 2: Steps 4-6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.slice(3, 6).map((step, index) => (
              <div key={index + 3} className="relative group">
                <div className="card-premium h-full flex flex-col p-8 hover:translate-y-[-5px] transition-all duration-300 border-primary/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-remax flex items-center justify-center shadow-remax group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-black text-primary/60 group-hover:text-primary transition-colors">
                      0{index + 4}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3 uppercase leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Horizontal Arrow (Desktop) */}
                {index < 2 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-primary animate-bounce-horizontal">
                    <ArrowRight className="h-8 w-8 stroke-[3px]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Connectors */}
          {steps.map((_, index) => (
            index < steps.length - 1 && (
              <div key={`mob-arrow-${index}`} className="flex lg:hidden justify-center my-4 text-primary animate-bounce">
                <ArrowDown className="h-6 w-6 stroke-[3px]" />
              </div>
            )
          ))}

        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="btn-primary inline-flex scale-110 hover:scale-115 transition-transform"
          >
            Empezar mi evaluación gratuita ahora
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Sin compromisos. Resultados garantizados por expertos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
