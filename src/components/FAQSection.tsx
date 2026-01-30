import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Por qué contratar un agente y no vender por mi cuenta?",
    answer:
      "Vender solo parece ahorrar dinero, pero la realidad es diferente: pierdes tiempo valioso, te expones a compradores no calificados, y sin experiencia en negociación puedes dejar mucho dinero sobre la mesa. Un agente profesional maximiza tu precio, filtra interesados serios, maneja la documentación legal y te protege de errores costosos. En Lima, donde los compradores son cada vez más exigentes, tener a un experto hace la diferencia.",
  },
  {
    question: "¿Y si mi propiedad no se vende?",
    answer:
      "Eso no sucede cuando hay estrategia. Analizamos el mercado actual, definimos un precio competitivo basado en datos reales y ejecutamos un plan de marketing profesional. Si algo no funciona, ajustamos rápidamente. Mi compromiso es venderte, no solo publicarte. En más de 6 años con REMAX, he cerrado exitosamente cada propiedad que me han confiado.",
  },
  {
    question: "¿Cuánto cuestan tus honorarios?",
    answer:
      "Mis honorarios son un porcentaje del valor de venta/alquiler, estándar en el mercado REMAX. Pero piénsalo así: mi trabajo no es un costo, es una inversión que te ayuda a vender más rápido y a mejor precio. Muchos propietarios que intentan vender solos terminan bajando el precio más de lo que habrían pagado en comisión. En la evaluación gratuita te explico todo con total transparencia.",
  },
  {
    question: "¿Por qué trabajas con exclusividad?",
    answer:
      "La exclusividad me permite invertir al máximo en tu propiedad: fotografía profesional, videos de calidad, publicidad pagada, seguimiento intensivo. Sin exclusividad, ningún agente invierte en serio porque sabe que otro puede cerrar el negocio y perder su inversión. Yo me comprometo 100% contigo, y necesito que confíes en mi proceso para darte resultados.",
  },
  {
    question: "¿Cuánto tiempo toma vender una propiedad en Lima?",
    answer:
      "Depende del precio, ubicación y condición de la propiedad. Con una estrategia correcta, la mayoría de mis propiedades en Lima Top y Lima Moderna se venden en 60-90 días. Te mantendré informado en cada paso: cantidad de visitas, feedback de interesados, y ajustes de estrategia si es necesario.",
  },
  {
    question: "¿Qué zonas de Lima cubres?",
    answer:
      "Me especializo en Lima Top (Surco, San Borja, San Isidro, Miraflores, La Molina) y Lima Moderna (Magdalena, Jesús María, Lince, Pueblo Libre). Estas son las zonas donde tengo mayor conocimiento del mercado y red de contactos. Si tu propiedad está en otra zona, podemos evaluarlo juntos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            Preguntas frecuentes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
            RESUELVO TUS DUDAS
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparencia total. Esto es lo que otros propietarios me han preguntado.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-5 lg:px-6 shadow-soft border-none data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-5 text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
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
