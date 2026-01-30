import { useState } from "react";
import { Phone, Calendar, Send, MapPin, Mail, Clock } from "lucide-react";
import wsp from "@/assets/logos/wstp.svg";
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
          <div className="text-center mb-8 lg:mb-12">

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calendar className="h-4 w-4" />
              Sin compromiso
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4 leading-tight">
              AGENDA TU EVALUACIÓN GRATUITA
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Deja tus datos y te contacto en menos de 24 horas.
              Conversemos sobre cómo puedo ayudarte a vender mejor.
            </p>
          </div>


          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-5 sm:p-8">

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">
                      Tu nombre completo
                    </label>
                    <Input
                      placeholder="Ej: María García"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      className="h-12 sm:h-14 text-base bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">
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
                      className="h-12 sm:h-14 text-base bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-foreground mb-1.5">
                      ¿Qué deseas hacer?
                    </label>
                    <Select
                      value={formData.operacion}
                      onValueChange={(value) =>
                        setFormData({ ...formData, operacion: value })
                      }
                    >
                      <SelectTrigger className="h-12 sm:h-14 text-base bg-muted/30 border-muted-foreground/20">
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


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-foreground mb-1.5">
                        Tipo de propiedad
                      </label>
                      <Select
                        value={formData.tipoPropiedad}
                        onValueChange={(value) =>
                          setFormData({ ...formData, tipoPropiedad: value })
                        }
                      >
                        <SelectTrigger className="h-12 sm:h-14 text-base bg-muted/30 border-muted-foreground/20">
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
                      <label className="block text-sm font-bold text-foreground mb-1.5">
                        Distrito
                      </label>
                      <Select
                        value={formData.distrito}
                        onValueChange={(value) =>
                          setFormData({ ...formData, distrito: value })
                        }
                      >
                        <SelectTrigger className="h-12 sm:h-14 text-base bg-muted/30 border-muted-foreground/20">
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

            <div className="lg:col-span-2 space-y-6">
              {/* Grouped Info Card */}
              <div className="card-premium p-5 sm:p-6 space-y-6">
                <div>
                  <h3 className="font-black text-foreground mb-4 text-center sm:text-left">CONTACTO DIRECTO</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <img src={wsp} alt="WhatsApp" className="h-5 w-5 brightness-0 invert" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm uppercase">WhatsApp</p>
                        <p className="text-xs text-muted-foreground font-mono">+51 971 438 756</p>
                      </div>
                    </a>

                    <a
                      href="tel:+51 971 438 756"
                      className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-all group border border-transparent hover:border-muted-foreground/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm uppercase">Llamada</p>
                        <p className="text-xs text-muted-foreground font-mono">+51 971 438 756</p>
                      </div>
                    </a>

                    <a
                      href="mailto:ciro.clemente@remaxaces.pe"
                      className="flex items-center gap-3 p-4 bg-muted rounded-xl hover:bg-muted/80 transition-all group border border-transparent hover:border-muted-foreground/20 sm:col-span-2 lg:col-span-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-bold text-foreground text-sm uppercase">Email</p>
                        <p className="text-xs text-muted-foreground truncate">ciro.clemente@remaxaces.pe</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border/50" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  <div>
                    <h3 className="font-black text-foreground mb-3 text-xs uppercase tracking-wider">Ubicación</h3>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-foreground text-sm">Oficina REMAX Aces</p>
                        <p className="text-sm text-muted-foreground leading-snug">
                          Av. Rivera Navarrete 757<br />
                          San Isidro, Lima
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-black text-foreground mb-3 text-xs uppercase tracking-wider">Horario</h3>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm text-foreground font-medium">Lun - Vie: 9:00 - 19:00</p>
                        <p className="text-sm text-foreground font-medium">Sáb: 9:00 - 14:00</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1">
                          Cita previa necesaria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://tiktok.com/@ciro_clemente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-foreground text-background rounded-xl font-bold text-sm hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  TIKTOK
                </a>
                <a
                  href="https://instagram.com/ciro_asesorinmobiliario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-remax text-primary-foreground rounded-xl font-bold text-sm hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  INSTAGRAM
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
