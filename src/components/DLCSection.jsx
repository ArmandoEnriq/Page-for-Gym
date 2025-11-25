import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const DLCSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    const dlcContent = [
        {
            id: 1,
            name: 'Separate Ways',
            subtitle: 'La historia de Ada',
            description: 'Experimenta la campaña desde la perspectiva de Ada Wong con nuevas mecánicas de juego y revelaciones sobre la trama principal.',
            image: 'https://via.placeholder.com/600x400/2a0a1a/ffffff?text=Separate+Ways+DLC',
            price: '$9.99',
            features: ['Nueva campaña', 'Personaje jugable: Ada', 'Armas exclusivas', '6-8 horas de juego']
        },
        {
            id: 2,
            name: 'Modo Mercenarios+',
            subtitle: 'Acción sin límites',
            description: 'Desbloquea personajes adicionales y mapas nuevos para el modo Mercenarios con desafíos únicos y recompensas especiales.',
            image: 'https://via.placeholder.com/600x400/1a1a2a/ffffff?text=Mercenaries+DLC',
            price: '$4.99',
            features: ['4 personajes nuevos', '3 mapas exclusivos', 'Trajes especiales', 'Clasificatorios online']
        },
        {
            id: 3,
            name: 'Paquete de Trajes',
            subtitle: 'Personalización total',
            description: 'Colección premium de trajes clásicos y exclusivos para Leon, Ashley y otros personajes del juego.',
            image: 'https://via.placeholder.com/600x400/0a2a1a/ffffff?text=Costume+Pack+DLC',
            price: '$7.99',
            features: ['12 trajes únicos', 'Trajes clásicos RE4', 'Trajes exclusivos nuevos', 'Filtros especiales']
        }
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden bg-[#0a0a0a]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 opacity-30 bg-[length:60px_60px]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>

            <div
                ref={ref}
                className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        Contenido Descargable
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-6">
                        DLC & EXPANSIONES
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Expande tu experiencia con contenido adicional exclusivo.
                    </p>
                </div>

                {/* DLC Grid */}
                <div className="space-y-12">
                    {dlcContent.map((dlc, index) => (
                        <div
                            key={dlc.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* DLC Image */}
                            <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[3/2] bg-gray-900 rounded-lg overflow-hidden">
                                    <img
                                        src={dlc.image}
                                        alt={dlc.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md">
                                        <span className="text-2xl font-bold font-oswald">{dlc.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* DLC Info */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-3">
                                    {dlc.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-400 text-sm">
                                            <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <button className="bg-red-700 border-2 border-red-700 text-white hover:bg-red-600 hover:border-red-600 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                                        Comprar DLC
                                    </button>
                                    <button className="bg-transparent border-2 border-gray-600 text-white hover:border-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                                        Más Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Season Pass CTA */}
                <div className="mt-16 p-8 bg-gradient-to-r from-red-900/20 via-red-950/30 to-red-900/20 rounded-lg border border-red-900/50">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-oswald">
                            PASE DE TEMPORADA
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Obtén acceso a todo el contenido DLC con un descuento del 20%. Incluye todos los DLC actuales y futuros.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-gray-500 line-through text-2xl font-oswald">$24.99</span>
                            <span className="text-red-600 text-4xl font-bold font-oswald">$19.99</span>
                            <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase rounded">Ahorra 20%</span>
                        </div>
                        <button className="bg-red-600 border-2 border-red-600 text-white hover:bg-red-700 hover:border-red-700 px-12 py-4 uppercase tracking-widest text-base font-bold transition-all duration-300 clip-path-button font-oswald">
                            Comprar Pase de Temporada
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DLCSection;
