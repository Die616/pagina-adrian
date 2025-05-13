import { FaPhone } from 'react-icons/fa';

export default function CallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulso animado en tonos grises más visible */}
      <span
        className="absolute animate-ping inline-flex h-20 w-20 rounded-full"
        style={{ backgroundColor: '#ccc', opacity: 0.5 }}
      ></span>

      {/* Botón principal más grande */}
      <a
        href="tel:3334440990"
        className="relative bg-[#4FC3F7] hover:bg-[#039BE5] text-white p-5 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
        title="Llamar al Dr. Adrián"
      >
        <FaPhone size={28} />
      </a>
    </div>
  );
}
