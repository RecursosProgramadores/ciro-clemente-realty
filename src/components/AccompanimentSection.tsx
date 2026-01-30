import { Heart, Shield, Clock, Camera } from "lucide-react";

const AccompanimentSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video lg:aspect-[4/3]">
              {/* Placeholder for closing/handshake image */}
              <div className="absolute inset-0 bg-gradient-to-br from-remax-bridge-blue to-foreground flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-bold text-lg mb-2">FOTO DE CIERRE</p>
                <p className="text-primary-foreground/70 text-sm max-w-xs">
                  Añade foto en notaría, entrega de llaves o con clientes satisfechos
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-4">
                NO ESTÁS SOLO EN ESTO
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Te acompaño desde la primera conversación hasta que tengas las llaves (o el cheque) en la mano. 
                Sin sorpresas, sin letras pequeñas.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Heart, label: "Acompañamiento humano", desc: "Siempre disponible" },
                  { icon: Shield, label: "Seguridad jurídica", desc: "Todo en regla" },
                  { icon: Clock, label: "Comunicación constante", desc: "Sin dejarte en visto" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 lg:p-5 bg-background rounded-xl shadow-soft"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 mb-3">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <p className="font-bold text-foreground text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompanimentSection;
