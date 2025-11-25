import React, { useState } from 'react';

const CharacterCarousel = () => {
    const characters = [
        {
            id: 1,
            name: 'Maquinaria Nueva',
            description: 'Contamos con maquinaria de ultima generación para brindarte el mejor servicio.',
            image: '/src/assets/maquinasnuevas.jpg',
            thumbnail: '/src/assets/maquinasnuevas.jpg',
            bgColor: 'from-yellow-900/20 to-while-950/40'
        },
        {
            id: 2,
            name: 'Baños y Vestuarios',
            description: 'Baños y vestuarios modernos y limpios para tu comodidad.',
            image: '/src/assets/baños.jpg',
            thumbnail: '/src/assets/baños.jpg',
            bgColor: 'from-white-900/20 to-yellow-950/40'
        },
        {
            id: 3,
            name: 'Coaches Profesionales',
            description: 'Contamos con coaches profesionales para guiarte en tu entrenamiento.',
            image: '/src/assets/coach.jpeg',
            thumbnail: '/src/assets/coach.jpeg',
            bgColor: 'from-green-900/20 to-black-950/40'
        },
        {
            id: 4,
            name: 'Area de hidratacion y descanso',
            description: 'Te ofrecemos un area de hidratacion para tu bienestar y descanso.',
            image: '/src/assets/agua.jpg',
            thumbnail: '/src/assets/agua.jpg',
            bgColor: 'from-blue-900/20 to-white-950/40'
        },
        {
            id: 5,
            name: 'Clases de bienestar y fitness:',
            description: 'Ofrecemos clases de bienestar y fitness para todos los niveles desde yoga, pilates y zumba.',
            image: '/src/assets/fitness.jpg',
            thumbnail: '/src/assets/fitness.jpg',
            bgColor: 'from-purple-800/20 to-black-950/40'
        }
    ];

    const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCharacterSelect = (character) => {
        if (character.id === selectedCharacter.id) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedCharacter(character);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Animated Background Gradient */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedCharacter.bgColor} transition-all duration-1000 ease-in-out`}
            />

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 opacity-30 bg-[length:60px_60px]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        Experiencia StrongFit Studio
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald">
                        CONOCE NUESTRAS INSTALACIONES Y SERVICIOS
                    </h2>
                </div>

                {/* Main Display Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                    {/* Character Image */}
                    <div className="relative">
                        <div
                            className={`relative aspect-[3/4] max-w-md mx-auto overflow-hidden transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                        >
                            <img
                                src={selectedCharacter.image}
                                alt={selectedCharacter.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Character Info */}
                    <div
                        className={`space-y-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                            }`}
                    >
                        <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight font-oswald">
                            {selectedCharacter.name}
                        </h3>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans">
                            {selectedCharacter.description}
                        </p>
                        <button className="bg-transparent border-2 border-gray-600 text-white hover:border-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                            Ver más
                        </button>
                    </div>
                </div>

                {/* Character Thumbnails */}
                <div className="flex justify-center gap-4 flex-wrap">
                    {characters.map((character) => (
                        <button
                            key={character.id}
                            onClick={() => handleCharacterSelect(character)}
                            className={`relative group transition-all duration-300 ${selectedCharacter.id === character.id
                                    ? 'scale-110 ring-4 ring-red-600'
                                    : 'scale-100 hover:scale-105 opacity-60 hover:opacity-100'
                                }`}
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden clip-path-button">
                                <img
                                    src={character.thumbnail}
                                    alt={character.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            {/* Active Indicator */}
                            {selectedCharacter.id === character.id && (
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CharacterCarousel;
