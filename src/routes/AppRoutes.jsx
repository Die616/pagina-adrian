import { Routes, Route } from 'react-router-dom';

import Home from '../pages/mainpage';
import AboutUs from '../pages/aboutUs';
import Specialties from '../pages/specialties';
import Contact from '../pages/contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<AboutUs />} />
      <Route path="/especialidades" element={<Specialties />} />
      <Route path="/contacto" element={<Contact />} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}
