import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const TrailerSection = () => {
    const [ref, isVisible] = useScrollAnimation();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
        // Aquí se podría abrir un modal con el video real
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-[#0a0a0a] to-blue-950/20" />

            <div
                ref={ref}
                className={`container mx-auto max-w-7xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
            >
                <div className="text-center mb-12">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        Encuentranos en Youtube
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-4">
                        Buscanos como StrongFit Studio
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Revive uno de nuestros principales comienzos y logros en nuestras instalaciones
                    </p>
                </div>

                {/* Video Player Placeholder */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden group relative">
                        {/* Thumbnail */}
                        <img
                            src="https://via.placeholder.com/1280x720/1a0a0a/ffffff?text=Video+Thumbnail"
                            alt="Video de StrongFit Studio"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Play Button */}
                        <button
                            onClick={handlePlayClick}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-500 hover:scale-110 group-hover:scale-125"
                        >
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-md">
                            <span className="text-white text-sm font-bold font-oswald">3:45</span>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                            <div className="text-red-600 text-3xl font-bold font-oswald mb-1">4K</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Ultra HD</div>
                        </div>
                        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                            <div className="text-red-600 text-3xl font-bold font-oswald mb-1">60</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">FPS</div>
                        </div>
                        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                            <div className="text-red-600 text-3xl font-bold font-oswald mb-1">HDR</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Disponible</div>
                        </div>
                        <div className="text-center p-4 bg-gray-900/50 rounded-lg">
                            <div className="text-red-600 text-3xl font-bold font-oswald mb-1">RT</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">Ray Tracing</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrailerSection;
