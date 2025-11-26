
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <img
          src="/src/assets/nuevofondo.gif"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
          style={{ objectPosition: "0% 0%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-screen-xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 drop-shadow-lg font-oswald text-shadow-blue">
          <span className="text-yellow-500">STRONG</span>
          <span className="text-white">FI</span>
          <span className="text-yellow-500">T</span>
          <span className="text-white"> STUDIO</span>
        </h1>

        <p className="text-lg md:text-2xl text-red-600 font-bold tracking-[0.2em] uppercase mb-8 drop-shadow-md animate-pulse font-oswald">
          Inscribete Ahora
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 uppercase tracking-widest transition-all duration-300 clip-path-button font-oswald text-sm md:text-base">
            Mas Informacion
          </button>
          <button className="bg-yellow-700 border-2 border-yellow-700 text-white hover:bg-yellow-600 hover:border-yellow-600 font-bold py-3 px-8 uppercase tracking-widest transition-all duration-300 clip-path-button font-oswald text-sm md:text-base">
            <a href="#planes">Planes y Precios</a>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
