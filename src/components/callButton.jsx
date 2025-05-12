import { FaPhone } from 'react-icons/fa';

export default function CallButton() {
  return (
    <a
      href="tel:3334440990"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
      title="Llamar al Dr. Adrián"
    >
      <FaPhone size={20} />
    </a>
  );
}
