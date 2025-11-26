
const PurchaseSection = () => {
    const editions = [
        {
            id: 1,
            name: 'Edición Fit',
            price: '$39',
            features: [
                'acceso a cualquier horario',
                'nutricionista personalizado',
                'casilleros para tus cosas',
                'regadero y vestuarios'
            ],
            image: '/src/assets/fit.png',
            popular: false
        },
        {
            id: 2,
            name: 'Plan Stándar',
            price: '$59',
            features: [
                'Todo lo de la Edición Fit',
                'Clases zumba y yoga',
                'plan de alimentación personalizado',
                'plan de entrenamiento mensual',
            ],
            image: '/src/assets/standar.png',
            popular: true
        },
        {
            id: 3,
            name: 'Plan StrongFit',
            price: '$99',
            features: [
                'Todo lo de el Plan Stándar',
                'Acompanamiento personalizado',
                'zona de hidratación',
                'eventos exclusivos',
                'nutricionista 24/7',
                'acceso a todas las sucursales'
            ],
            image: '/src/assets/strogfit.png',
            popular: false
        }
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-red-950/10 to-[#0a0a0a]" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
                        PLANES
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-6">
                        ELIGE TU PLAN
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Selecciona el plan perfecto para tu experiencia en nuestras instalaciones 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {editions.map((edition) => (
                        <div
                            key={edition.id}
                            className={`relative group ${edition.popular ? 'md:-translate-y-4' : ''
                                }`}
                        >
                            {edition.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 uppercase text-xs font-bold tracking-wider font-oswald z-20">
                                    Más Popular
                                </div>
                            )}

                            <div className={`relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 ${edition.popular
                                    ? 'ring-4 ring-red-600 shadow-2xl shadow-red-600/20'
                                    : 'hover:ring-2 hover:ring-gray-700'
                                }`}>
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={edition.image}
                                        alt={edition.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                </div>

                                <div className="p-6 space-y-4">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2 font-oswald">
                                            {edition.name}
                                        </h3>
                                        <div className="text-4xl font-bold text-red-600 mb-4 font-oswald">
                                            {edition.price}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {edition.features.map((feature, index) => (
                                            <li key={index} className="flex items-start text-gray-300 text-sm">
                                                <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 clip-path-button font-oswald ${edition.popular
                                            ? 'bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 hover:border-red-700'
                                            : 'bg-transparent text-white border-2 border-gray-600 hover:bg-white hover:text-black hover:border-white'
                                        }`}>
                                        INSCRIBETE YA!
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-gray-400 mb-4 uppercase text-sm tracking-wider font-oswald">
                        ACEPTAMOS
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap">
                        {['Kueski', 'Mastercard', 'PayPal', 'MercadoPago', 'Tarjeta de Credito'].map((platform) => (
                            <div key={platform} className="px-6 py-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                                <span className="text-white font-bold font-oswald">{platform}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurchaseSection;
