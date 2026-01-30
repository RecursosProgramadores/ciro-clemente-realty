import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section-padding bg-gradient-blue text-secondary-foreground">
      <div className="container mx-auto">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">
            MI COMPROMISO CONTIGO
          </h2>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-bold uppercase">Misión</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Ayudar a propietarios a vender o alquilar sus inmuebles de forma estratégica, segura y transparente, acompañándolos en cada etapa del proceso para lograr resultados reales.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-bold uppercase">Visión</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Ser un referente en asesoría inmobiliaria estratégica, elevando la forma en que se venden y alquilan propiedades en el Perú.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
