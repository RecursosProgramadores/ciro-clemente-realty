import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "51999999999"; // Replace with actual phone number
  const message = encodeURIComponent(
    "Hola Ciro, quiero vender/alquilar mi propiedad. Me gustaría recibir más información."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-soft"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
