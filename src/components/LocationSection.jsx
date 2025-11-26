import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const LocationSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const locations = [
    {
      id: 1,
      name: "Tlaxcala",
      description: "Cerca de San Miguel a un lado de la gran bodega",
      image: "/src/assets/sanMiguel.png",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0049857362763!2d-0.6274266846037844!3d40.2896489793815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5f8b0a0a0a0a0b%3A0x0!2sTlaxcala%2C+Tlaxcala%2C+Mexico!5e0!3m2!1sen!2sus!4v1645564856321!5m2!1sen!2sus",
    },
    {
      id: 2,
      name: "Veracruz",
      description: "En boca del rio, cerca de el acuario amores mios",
      image: "/src/assets/veracruz.png",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.6587602384725!2d-0.7105556845688844!3d41.6705559792388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd58362760c6d707%3A0x8633753360670f56!2sVeracruz%2C+Mexico!5e0!3m2!1sen!2sus!4v1645564856321!5m2!1sen!2sus",
    },
    {
      id: 3,
      name: "CDMX",
      description:
        "en la colonia roma, cerca de un parque muy conocido de la concordia",
      image: "/src/assets/CdMx.png",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.863426737385!2d129.7363889151838!3d32.6277777810188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3515469d4b79c337%3A0x6c2d476675555555!2sCDMX!5e0!3m2!1sen!2sus!4v1645564856321!5m2!1sen!2sus",
    },
  ];

  const [activeLocation, setActiveLocation] = React.useState(locations[0]);
  const mapRef = React.useRef(null);

  const handleExplore = (location) => {
    setActiveLocation(location);
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x1080/0a0a0a/333333?text=Location+Background')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="text-center mb-16">
          <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
            Ubicaciones
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-4">
            EXPLORA NUESTRAS DIFERENTES UBICACIONES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conocidos a través de distintas locaciones de México, cada una con
            su propio encanto y características únicas.
          </p>
        </div>

        <div className="space-y-12">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative group overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] bg-gray-900 overflow-hidden rounded-lg">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 flex items-center justify-center rounded-md">
                  <span className="text-white text-2xl font-bold font-oswald">
                    {location.id}
                  </span>
                </div>
              </div>

              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald">
                  {location.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {location.description}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleExplore(location)}
                    className={`border-2 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald ${
                      activeLocation.id === location.id
                        ? "bg-transparent text-white border-white hover:bg-white hover:text-black"
                        : "bg-transparent border-gray-600 text-white hover:border-white hover:bg-white hover:text-black"
                    }`}
                  >
                    Ubicacion
                  </button>
                  <button className="bg-yellow-700 border-2 border-yellow-700 text-white hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                    Galería
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={mapRef}
          className="mt-16 p-2 bg-gray-900/50 rounded-lg border border-gray-800"
        >
          <h4 className="text-2xl font-bold text-white mb-4 font-oswald text-center">
            UBICACIÓN REAL:{" "}
            <span className="text-red-600">{activeLocation.name}</span>
          </h4>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-opacity duration-500 ease-in-out">
            <iframe
              key={activeLocation.id}
              src={activeLocation.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(110%) brightness(95%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${activeLocation.name}`}
              className="absolute inset-0 opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 pointer-events-none bg-red-900/10 mix-blend-overlay rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
