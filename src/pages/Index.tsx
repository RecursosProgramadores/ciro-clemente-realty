import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import AccompanimentSection from "@/components/AccompanimentSection";
import MissionSection from "@/components/MissionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <AuthoritySection />
      <ProcessSection />
      <ResultsSection />
      <AccompanimentSection />
      <MissionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
