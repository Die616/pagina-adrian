import { FaPhone } from 'react-icons/fa';

export default function CallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulso animado centrado detrás */}
      <span
        className="absolute animate-ping inline-flex h-16 w-16 rounded-full"
        style={{ backgroundColor: '#f4f7fa', opacity: 0.8 }}
      ></span>

      {/* Botón principal */}
      <a
        href="tel:3334440990"
        className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        title="Llamar al Dr. Adrián"
      >
        <FaPhone size={20} />
      </a>
    </div>
  );
}
