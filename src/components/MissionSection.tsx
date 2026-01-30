import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-remax-bridge-blue via-remax-river-blue to-remax-bridge-blue text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              MI COMPROMISO <span className="text-primary italic">PROFESIONAL</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Misión */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-elevated relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all" />

              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider">Misión</h3>
              </div>

              <p className="text-white/80 text-lg leading-relaxed relative">
                Ayudar a propietarios a <strong className="text-white">vender o alquilar</strong> sus inmuebles de forma estratégica, segura y transparente, acompañándolos en cada etapa del proceso para lograr resultados reales.
              </p>
            </div>

            {/* Visión */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-elevated relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/40 transition-all" />

              <div className="flex items-center gap-4 mb-6 relative">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg transform group-hover:-rotate-6 transition-transform">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider">Visión</h3>
              </div>

              <p className="text-white/80 text-lg leading-relaxed relative">
                Ser un referente en <strong className="text-white">asesoría inmobiliaria estratégica</strong>, elevando la forma en que se venden y alquilan propiedades en el Perú.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
