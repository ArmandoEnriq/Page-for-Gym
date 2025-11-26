import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SectionAreas = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="relative py-20 px-4 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
                    style={{
                        backgroundImage: `url('https://via.placeholder.com/1920x1080/1a0a0a/333333?text=Theme+Background')`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>

            <div
                ref={ref}
                className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                <div className="text-center mb-12">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        Entrena nunca fue tan divertido!
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-8">
                        Dividido en Diferentes Areas
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative overflow-hidden">
                        <div className="aspect-video bg-gray-800 overflow-hidden">
                            <img
                                src="/src/assets/tricep.png"
                                alt="Survival Horror"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 font-oswald">
                                Brazo
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Area para trabajar el brazo completo
                            </p>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden">
                        <div className="aspect-video bg-gray-800 overflow-hidden">
                            <img
                                src="/src/assets/pecho.png"
                                alt="Action Combat"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 font-oswald">
                                Torso
                            </h3>
                            <p className="text-gray-300 text-sm">
                                CTrabaja el tronco superior sin preocuparte
                            </p>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden">
                        <div className="aspect-video bg-gray-800 overflow-hidden">
                            <img
                                src="/src/assets/pierna.png"
                                alt="Puzzle Exploration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2 font-oswald">
                                Pierna
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Crea unas piernas fuertes y resistentes 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAreas;
