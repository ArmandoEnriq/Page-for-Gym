import React, { useState, useEffect } from 'react';

const GameplayCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const gameplayImages = [
        {
            id: 1,
            image: 'https://via.placeholder.com/1200x675/2a0a0a/ffffff?text=Combat+System',
            title: 'Sistema de Combate',
            description: 'Combate cuerpo a cuerpo mejorado con nuevas mecánicas'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/1200x675/1a1a2a/ffffff?text=Weapons+Customization',
            title: 'Personalización de Armas',
            description: 'Mejora y personaliza tu arsenal completo'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/1200x675/0a2a1a/ffffff?text=Exploration',
            title: 'Exploración',
            description: 'Descubre secretos y resuelve puzzles complejos'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/1200x675/2a1a0a/ffffff?text=Boss+Battles',
            title: 'Batallas Épicas',
            description: 'Enfréntate a jefes memorables y desafiantes'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % gameplayImages.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % gameplayImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + gameplayImages.length) % gameplayImages.length);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Main Carousel Container */}
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
                {/* Images */}
                {gameplayImages.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-700">
                            <h3 className={`text-3xl md:text-4xl font-bold text-white mb-2 font-oswald transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}>
                                {slide.title}
                            </h3>
                            <p className={`text-gray-300 text-lg transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}>
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-6 grid grid-cols-4 gap-4">
                {gameplayImages.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide
                                ? 'ring-4 ring-red-600 scale-105'
                                : 'opacity-60 hover:opacity-100'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white text-xs font-bold font-oswald truncate">
                                {slide.title}
                            </p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Progress Indicators */}
            <div className="mt-4 flex justify-center gap-2">
                {gameplayImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-red-600 w-12'
                                : 'bg-gray-600 w-8 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default GameplayCarousel;
