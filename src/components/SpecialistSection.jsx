import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SpecialistSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const dlcContent = [
    {
      id: 1,
      name: "Rutinas Personalizadas",
      subtitle: "Coach Especalizados",
      description:
        "Obtén planes de entrenamiento personalizados diseñados por nuestros expertos para alcanzar tus objetivos de fitness de manera efectiva.",
      image: "/src/assets/coach.webp",
      price: "$9.99",
      features: [
        "Plan de entrenamiento personalizado",
        "Coach especializado",
        "Seguimiento de progreso",
        "Soporte continuo",
      ],
    },
    {
      id: 2,
      name: "Nutriología Personalizada",
      subtitle: "Planes de Alimentación",
      description:
        "Obtén planes de alimentación personalizados que te ayuden a alcanzar tus objetivos de fitness de manera saludable.",
      image: "/src/assets/nutri.jpg",
      price: "$4.99",
      features: [
        "Planes de alimentación personalizados",
        "Asesoría nutricional",
        "Recetas saludables",
        "Seguimiento de progreso",
      ],
    },
    {
      id: 3,
      name: "productos Nutricionales",
      subtitle: "Suplementos y Vitaminas",
      description:
        "Obtén productos nutricionales de alta calidad que te ayuden a alcanzar tus objetivos de fitness de manera saludable.",
      image: "/src/assets/prote.jpg",
      price: "Precio Variable",
      features: [
        "Suplementos de alta calidad",
        "Vitaminas esenciales",
        "Proteínas y batidos",
        "Ropa y accesorios",
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 opacity-30 bg-[length:60px_60px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div
        ref={ref}
        className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="text-center mb-16">
          <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
            CONSULTAS Y ASESORIAS
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-6">
            ESPECIALISTAS Y MAS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Si buscas solo consulta o asesoría, nuestros especialistas están
            listos para ayudarte con planes personalizados independientes!
          </p>
        </div>

        <div className="space-y-12">
          {dlcContent.map((dlc, index) => (
            <div
              key={dlc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[3/2] bg-gray-900 rounded-lg overflow-hidden">
                  <img
                    src={dlc.image}
                    alt={dlc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md">
                    <span className="text-2xl font-bold font-oswald">
                      {dlc.price}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div>
                  <h4 className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 font-oswald">
                    {dlc.subtitle}
                  </h4>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 font-oswald">
                    {dlc.name}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {dlc.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {dlc.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-400 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-red-600 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-yellow-700 border-2 border-yellow-700 text-white hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                    MAS INFO
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 via-blue-950/30 to-blue-900/20 rounded-lg border border-blue-900/50">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-oswald">
              CONTÁCTANOS
            </h3>
            <p className="text-gray-300 mb-2">
              ¿Tienes alguna duda o quieres más información? Estamos aquí para
              ayudarte.
            </p>
            <p className="text-gray-300 mb-6">
              Completa el formulario o envíanos un WhatsApp y te responderemos a
              la brevedad.
            </p>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full p-3 rounded border border-blue-600 bg-blue-900/10 text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Escribe tu mensaje aquí"
                rows="4"
                className="w-full p-3 rounded border border-blue-600 bg-blue-900/10 text-white placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 border-2 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 px-10 py-3 uppercase tracking-widest text-base font-bold transition-all duration-300 clip-path-button font-oswald">
                Enviar mensaje
              </button>

              <a
                href="https://wa.me/TU_NUMERO?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-400 hover:bg-green-500/10 rounded-lg font-semibold transition-all duration-300"
              >
                <span className="uppercase tracking-wide text-sm font-oswald">
                  O envíanos un WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
