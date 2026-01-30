import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import faqImg from "@/assets/ciroportada.jpg";

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
    <section id="faq" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Content Left */}
          <div className="flex-1 w-full animate-fade-in-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="h-4 w-4" />
              Resolviendo tus dudas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
              PREGUNTAS <span className="text-primary italic">FRECUENTES</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Transparencia total en cada paso. Aquí respondo lo que la mayoría de propietarios necesita saber antes de empezar.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 border border-border shadow-soft data-[state=open]:border-primary/30 data-[state=open]:shadow-elevated transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline py-5 text-base lg:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image Right */}
          <div className="flex-1 w-full lg:max-w-[45%] animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -rotate-2 -z-10" />
              <div className="absolute -inset-4 bg-secondary/5 rounded-[2.5rem] rotate-2 -z-10" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elevated aspect-[4/5]">
                <img
                  src={faqImg}
                  alt="Asesoría Inmobiliaria Profesional"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white text-sm font-medium">
                    "Vender bien no es cuestión de suerte, es cuestión de estrategia."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
