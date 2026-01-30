import { useState } from "react";
import { MessageCircle, Phone, Calendar, Send, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const distritos = [
  "Surco",
  "San Borja",
  "Magdalena",
  "Jesús María",
  "San Isidro",
  "Miraflores",
  "La Molina",
  "Otro",
];

const tiposPropiedad = [
  "Departamento",
  "Casa",
  "Terreno",
  "Local Comercial",
  "Oficina",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    tipoPropiedad: "",
    distrito: "",
  });

  const whatsappNumber = "51999999999";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hola Ciro, soy ${formData.nombre}. Quiero vender/alquilar mi ${formData.tipoPropiedad} en ${formData.distrito}. Mi WhatsApp es ${formData.whatsapp}. ¿Podemos coordinar una evaluación gratuita?`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaré muy pronto.",
    });
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="container-narrow">
          {/* Form */}
          <div className="card-premium mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-foreground mb-2 text-center">
              AGENDA TU EVALUACIÓN GRATUITA
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Deja tus datos y te contacto en menos de 24 horas
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
                className="h-12"
              />
              
              <Input
                placeholder="Tu WhatsApp (ej: 999 123 456)"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                required
                className="h-12"
              />
              
              <Select
                value={formData.tipoPropiedad}
                onValueChange={(value) =>
                  setFormData({ ...formData, tipoPropiedad: value })
                }
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Tipo de propiedad" />
                </SelectTrigger>
                <SelectContent>
                  {tiposPropiedad.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select
                value={formData.distrito}
                onValueChange={(value) =>
                  setFormData({ ...formData, distrito: value })
                }
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Distrito de la propiedad" />
                </SelectTrigger>
                <SelectContent>
                  {distritos.map((distrito) => (
                    <SelectItem key={distrito} value={distrito}>
                      {distrito}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button type="submit" className="w-full btn-primary h-14 text-base">
                <Send className="h-5 w-5" />
                Enviar y contactar por WhatsApp
              </Button>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-black text-foreground mb-4">
              HABLEMOS SIN COMPROMISO
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+51999999999"
                className="btn-secondary justify-center"
              >
                <Phone className="h-5 w-5" />
                Llamar ahora
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp directo
              </a>
            </div>
          </div>

          {/* Social & Location */}
          <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
            <h4 className="font-bold text-foreground mb-4">SÍGUEME EN REDES</h4>
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://tiktok.com/@ciro_clemente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                TikTok
              </a>
              <a
                href="https://instagram.com/ciro_asesorinmobiliario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-remax text-primary-foreground rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                Instagram
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4" />
              <span>Av. Rivera Navarrete 757, San Isidro</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:ciro.clemente@remaxaces.pe" className="hover:text-primary transition-colors">
                ciro.clemente@remaxaces.pe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
