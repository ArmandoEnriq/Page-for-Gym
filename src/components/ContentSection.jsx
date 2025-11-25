import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContentSection = ({ id, title, subtitle, description, image, reverse = false, dark = false }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id={id} className={`py-20 px-4 md:px-0 ${dark ? 'bg-[#0a0a0a]' : 'bg-[#111]'} overflow-hidden`}>
      <div
        ref={ref}
        className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >

        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <div className="aspect-video bg-gray-800 relative overflow-hidden">
            <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`} style={{ backgroundImage: `url(${image})` }}></div>
            {/* Overlay for grunge effect */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          {subtitle && (
            <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base font-oswald">
              {subtitle}
            </h3>
          )}
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight font-oswald">
            {title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-sans">
            {description}
          </p>
          <button className="mt-4 bg-transparent border border-gray-600 text-white hover:border-white hover:text-white px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
            Leer Más
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
