import { 
  ClipboardCheck, 
  TrendingUp, 
  Camera, 
  Users, 
  Handshake, 
  Key 
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Personalizado",
    description: "Evaluación gratuita de tu propiedad con análisis de mercado real.",
  },
  {
    icon: TrendingUp,
    title: "Estrategia de Precio Inteligente",
    description: "Definimos el precio óptimo para vender rápido y al mejor valor.",
  },
  {
    icon: Camera,
    title: "Marketing Premium",
    description: "Fotos profesionales, videos y anuncios en las mejores plataformas.",
  },
  {
    icon: Users,
    title: "Visitas Calificadas",
    description: "Solo traemos compradores serios, pre-filtrados y listos para decidir.",
  },
  {
    icon: Handshake,
    title: "Negociación Experta",
    description: "Defendemos tus intereses para cerrar al mejor precio posible.",
  },
  {
    icon: Key,
    title: "Cierre + Post-Servicio",
    description: "Te acompañamos hasta la firma y entrega de llaves. Sin sorpresas.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="container-narrow text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
            MI PROCESO DE TRABAJO
          </h2>
          <p className="text-muted-foreground">
            Un sistema probado para vender tu propiedad con estrategia
          </p>
        </div>

        <div className="container-narrow space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-background rounded-xl shadow-soft animate-fade-up group hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-remax flex items-center justify-center shadow-remax group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary">PASO {index + 1}</span>
                </div>
                <h3 className="font-bold text-foreground mb-1 uppercase">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
