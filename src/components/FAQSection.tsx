import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Por qué contratar un agente y no vender por mi cuenta?",
    answer:
      "Vender solo parece ahorrar dinero, pero la realidad es otra: pierdes tiempo valioso, te expones a compradores no calificados, y sin experiencia en negociación puedes dejar mucho dinero sobre la mesa. Un agente profesional maximiza tu precio, filtra interesados serios, maneja la documentación legal y te protege de errores costosos.",
  },
  {
    question: "¿Y si mi propiedad no se vende?",
    answer:
      "Eso no sucede cuando hay estrategia. Analizamos el mercado, definimos un precio competitivo y ejecutamos un plan de marketing profesional. Si algo no funciona, ajustamos rápidamente. Mi compromiso es venderte, no solo publicarte.",
  },
  {
    question: "¿Cuánto cuestan tus honorarios?",
    answer:
      "Mis honorarios son un porcentaje del valor de venta/alquiler, estándar en el mercado REMAX. Pero piénsalo así: mi trabajo no es un costo, es una inversión que te ayuda a vender más rápido y a mejor precio. En la evaluación gratuita te explico todo con transparencia.",
  },
  {
    question: "¿Por qué trabajas con exclusividad?",
    answer:
      "La exclusividad me permite invertir al máximo en tu propiedad: fotografía profesional, videos, publicidad pagada, seguimiento intensivo. Sin exclusividad, ningún agente invierte en serio porque sabe que otro puede cerrar el negocio. Yo me comprometo 100% contigo, y necesito que confíes en mi proceso.",
  },
  {
    question: "¿Cuánto tiempo toma vender una propiedad?",
    answer:
      "Depende del precio, ubicación y condición de la propiedad. Con una estrategia correcta, la mayoría de mis propiedades se venden en 60-90 días. Te mantendré informado en cada paso del proceso.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="container-narrow text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-muted-foreground">
            Resuelvo tus dudas con transparencia
          </p>
        </div>

        <div className="container-narrow">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-5 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-5 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
