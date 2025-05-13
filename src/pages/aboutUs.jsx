import Footer from "../components/footer";
import Header from "../components/navbar";
import CallButton from "../components/callButton";

export default function AboutUs() {
    function renderCredentialsSection() {
        const credentials = [
            'Médico Cirujano – Universidad de Guadalajara (CUCS)',
            'Especialista en Urología – Hospital Civil Fray Antonio Alcalde',
            'Experiencia en cirugía laparoscópica y láser (HoLEP)',
            'Atención integral en salud urinaria y reproductiva',
            'Participación en congresos y formación internacional',
            'Docente en la Universidad de Guadalajara',
        ];

        return (
            <section className="bg-[#f4f7fa] text-[#0D47A1] py-20 px-4 mt-32 font-sans">
                {/* Título centrado arriba */}
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                        Formación y Experiencia
                    </h2>
                </div>

                {/* Contenido en dos columnas */}
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 animate-fade-in">
                    {/* Columna de texto */}
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                            Credenciales Profesionales
                        </h3>
                        <ul className="space-y-4 text-gray-800 text-left text-lg leading-relaxed">
                            {credentials.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-[#0D47A1]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna de imagen */}
                    <div className="flex-1 max-w-sm mx-auto md:mx-0">
                        <img
                            src="https://assets.zyrosite.com/YKb3okXQjWh9R4GV/dr1-Y4LDpVWenkTj9EQ5.jpg"
                            alt="Dr. Adrián Fernández"
                            className="w-full rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>

                {/* Cédula profesional al final */}
                <div className="mt-12 text-center text-lg text-gray-700 font-medium">
                    No. de cédula profesional: <span className="font-semibold text-[#0D47A1]">13178380</span>
                </div>
            </section>
        );
    }

    function renderTrainingSection() {
        const eventos = [
            { titulo: "HOLEP – Láser de Holmio", lugar: "Hospital Universitario Moncloa, Madrid – Noviembre 2023" },
            { titulo: "Andrología Clínica", lugar: "Hospital Ángeles Metropolitano, CDMX – Octubre 2024" },
            { titulo: "Urología funcional y Urodinamia", lugar: "Dr. Luis Manuel Álvarez Tovar – 2023" },
            { titulo: "RCP – Escuela Vieja de Medicina", lugar: "Curso de Reanimación Cardiopulmonar – 2016" },
            { titulo: "BLS y DEA – AHA", lugar: "Soporte Vital Básico – 2020" },
            { titulo: "Soporte Vital Cardiovascular Avanzado", lugar: "American Heart Association – 2020" },
            { titulo: "Congreso Nacional de Urología", lugar: "SMU – Veracruz, 2022" },
            { titulo: "Congreso CIAM", lugar: "Congreso Internacional de Avances en Medicina – 2023" },
            { titulo: "Debate: Cáncer de Riñón y Vejiga", lugar: "Participante – Sociedad Mexicana de Urología" },
            { titulo: "CICOM XXIII", lugar: "Asistencia – 2015" },
            { titulo: "Jornadas en Pediatría", lugar: "Hospital Civil GDL – 30 y 101 Aniversario" },
            { titulo: "Módulo de Urología – CIAM", lugar: "Guadalajara – 2024" },
            { titulo: "Imagenología en Urología", lugar: "Unidad de Patología Clínica – 2024" },
            { titulo: "Enucleación endoscópica de próstata", lugar: "Instituto Urológico de Invasión Mínima – UROMIN" },
        ];

        return (
            <section className="bg-[#e3f2fd] text-[#0D47A1] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                        Formación Continua y Congresos
                    </h2>
                </div>

                <div className="relative max-w-3xl mx-auto pl-6 border-l-4 border-[#90CAF9]">
                    {eventos.map((item, index) => (
                        <div
                            key={index}
                            className="relative mb-10 animate-fade-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <span className="absolute -left-3 top-1 w-4 h-4 bg-[#42A5F5] border-4 border-[#E3F2FD] rounded-full shadow-[0_0_0_4px_rgba(33,150,243,0.2)]" />
                            <div className="bg-white p-4 rounded-lg shadow-md hover:-translate-y-1 transition-transform text-left">
                                <h3 className="text-lg font-bold mb-1">{item.titulo}</h3>
                                <p className="text-sm text-gray-700">{item.lugar}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    function renderClosingMessageSection() {
        return (
            <section className="bg-[#f4f7fa] text-[#0D47A1] py-24 px-4 font-sans text-center">
                <div className="max-w-3xl mx-auto animate-fade-in">
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        Como especialista en urología, creo firmemente en brindar una atención profesional, ética y cercana, donde el respeto y la confianza sean el punto de partida para mejorar tu salud.
                    </p>
                    <p className="text-[#4FC3F7] font-semibold italic text-base md:text-lg mt-6">
                        – Dr. Adrián Fernández
                    </p>
                </div>
            </section>
        );
    }

    return (
        <main className="text-gray-800 bg-white min-h-screen">
            <Header />
            {renderCredentialsSection()}
            {renderTrainingSection()}
            {renderClosingMessageSection()}
            <Footer />
            <CallButton />
        </main>
    );
}