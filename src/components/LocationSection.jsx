import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const LocationSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    const locations = [
        {
            id: 1,
            name: 'El Pueblo',
            description: 'Una aldea europea aislada con habitantes infectados por un parásito misterioso.',
            image: 'https://via.placeholder.com/800x600/2a1a0a/ffffff?text=El+Pueblo'
        },
        {
            id: 2,
            name: 'El Castillo',
            description: 'Una fortaleza medieval llena de trampas mortales y enemigos formidables.',
            image: 'https://via.placeholder.com/800x600/1a1a2a/ffffff?text=El+Castillo'
        },
        {
            id: 3,
            name: 'La Isla',
            description: 'Un complejo de investigación donde se crearon los experimentos más peligrosos.',
            image: 'https://via.placeholder.com/800x600/0a2a1a/ffffff?text=La+Isla'
        }
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
                    style={{
                        backgroundImage: `url('https://via.placeholder.com/1920x1080/0a0a0a/333333?text=Location+Background')`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>

            <div
                ref={ref}
                className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                <div className="text-center mb-16">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        Ubicación
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-4">
                        EXPLORA LUGARES TERRORÍFICOS
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Viaja a través de distintas locaciones mientras descubres la verdad detrás del culto misterioso.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="space-y-12">
                    {locations.map((location, index) => (
                        <div
                            key={location.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative group overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="aspect-[4/3] bg-gray-900 overflow-hidden rounded-lg">
                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>
                                {/* Location Number */}
                                <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 flex items-center justify-center rounded-md">
                                    <span className="text-white text-2xl font-bold font-oswald">{location.id}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald">
                                    {location.name}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {location.description}
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-transparent border-2 border-gray-600 text-white hover:border-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                                        Explorar
                                    </button>
                                    <button className="bg-red-700 border-2 border-red-700 text-white hover:bg-red-600 hover:border-red-600 px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 clip-path-button font-oswald">
                                        Galería
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Overview with Carousel */}
                <div className="mt-16 p-8 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h4 className="text-2xl font-bold text-white mb-4 font-oswald text-center">
                        MAPA INTERACTIVO
                    </h4>
                    <MapCarousel />
                </div>
            </div>
        </section>
    );
};

// Map Carousel Component
const MapCarousel = () => {
    const [currentImage, setCurrentImage] = React.useState(0);

    const mapImages = [
        'https://via.placeholder.com/1200x675/1a1a1a/666666?text=Village+Map',
        'https://via.placeholder.com/1200x675/2a1a1a/777777?text=Castle+Map',
        'https://via.placeholder.com/1200x675/1a2a1a/888888?text=Island+Map',
        'https://via.placeholder.com/1200x675/1a1a2a/999999?text=Full+Map'
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % mapImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
            {mapImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Map ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {mapImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage
                                ? 'bg-red-600 w-8'
                                : 'bg-gray-500 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LocationSection;
