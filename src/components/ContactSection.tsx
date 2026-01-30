import { useState } from "react";
import { MessageCircle, Phone, Calendar, Send, MapPin, Mail, Clock } from "lucide-react";
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
  "San Isidro",
  "Miraflores",
  "La Molina",
  "Magdalena",
  "Jesús María",
  "Lince",
  "Pueblo Libre",
  "Otro distrito",
];

const tiposPropiedad = [
  "Departamento",
  "Casa",
  "Terreno",
  "Local Comercial",
  "Oficina",
];

const tiposOperacion = [
  "Vender",
  "Alquilar",
  "Aún no estoy seguro/a",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    tipoPropiedad: "",
    distrito: "",
    operacion: "",
  });

  const whatsappNumber = "51999999999";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hola Ciro, soy ${formData.nombre}. Quiero ${formData.operacion.toLowerCase()} mi ${formData.tipoPropiedad.toLowerCase()} en ${formData.distrito}. Mi WhatsApp es ${formData.whatsapp}. ¿Podemos coordinar una evaluación gratuita?`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "¡Perfecto!",
      description: "Te redirigimos a WhatsApp. Te responderé muy pronto.",
    });
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="h-4 w-4" />
              Sin compromiso
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
              AGENDA TU EVALUACIÓN GRATUITA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deja tus datos y te contacto en menos de 24 horas. 
              Conversemos sobre cómo puedo ayudarte a vender mejor.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-premium">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Tu nombre completo
                    </label>
                    <Input
                      placeholder="Ej: María García"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Tu número de WhatsApp
                    </label>
                    <Input
                      placeholder="Ej: 999 123 456"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      ¿Qué deseas hacer?
                    </label>
                    <Select
                      value={formData.operacion}
                      onValueChange={(value) =>
                        setFormData({ ...formData, operacion: value })
                      }
                    >
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border border-border z-50">
                        {tiposOperacion.map((tipo) => (
                          <SelectItem key={tipo} value={tipo}>
                            {tipo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Tipo de propiedad
                      </label>
                      <Select
                        value={formData.tipoPropiedad}
                        onValueChange={(value) =>
                          setFormData({ ...formData, tipoPropiedad: value })
                        }
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border z-50">
                          {tiposPropiedad.map((tipo) => (
                            <SelectItem key={tipo} value={tipo}>
                              {tipo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Distrito
                      </label>
                      <Select
                        value={formData.distrito}
                        onValueChange={(value) =>
                          setFormData({ ...formData, distrito: value })
                        }
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border z-50">
                          {distritos.map((distrito) => (
                            <SelectItem key={distrito} value={distrito}>
                              {distrito}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-primary h-14 text-base mt-2">
                    <Send className="h-5 w-5" />
                    Enviar y contactar por WhatsApp
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="card-premium">
                <h3 className="font-bold text-foreground mb-4">Contacto directo</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+51999999999"
                    className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Llamar ahora</p>
                      <p className="text-xs text-muted-foreground">+51 999 999 999</p>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">Respuesta rápida</p>
                    </div>
                  </a>
                  <a
                    href="mailto:ciro.clemente@remaxaces.pe"
                    className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Email</p>
                      <p className="text-xs text-muted-foreground">ciro.clemente@remaxaces.pe</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="card-premium">
                <h3 className="font-bold text-foreground mb-4">Ubicación</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Oficina REMAX Aces</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Rivera Navarrete 757<br />
                      San Isidro, Lima
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-premium">
                <h3 className="font-bold text-foreground mb-4">Horario de atención</h3>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground">Lun - Vie: 9:00 - 19:00</p>
                    <p className="text-sm text-foreground">Sábado: 9:00 - 14:00</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Visitas con cita previa
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                <a
                  href="https://tiktok.com/@ciro_clemente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  TikTok
                </a>
                <a
                  href="https://instagram.com/ciro_asesorinmobiliario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-remax text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
