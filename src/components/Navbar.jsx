import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'INICIO', href: '#inicio' },
        { name: 'INSTALACIONES', href: '#instalaciones' },
        { name: 'REDES', href: '#redes' },
        { name: 'UBICACIONES', href: '#ubicaciones' },
        { name: 'PLANES', href: '#planes' },
        { name: 'ESPECIALISTAS', href: '#especialistas' },
        { name: 'CONTACTANOS', href: '#contactanos' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <a href="#" className="text-3xl font-bold text-white tracking-tighter hover:text-[#F3D311] transition-colors font-oswald">
                        SFit
                    </a>

                    <div className="hidden lg:flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-gray-300 hover:text-white tracking-widest transition-colors relative group font-oswald"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="hidden md:block bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-6 uppercase tracking-widest text-sm transition-colors clip-path-button font-oswald">
                        Comprar
                    </button>
                    <button
                        className="lg:hidden text-white focus:outline-none "
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-bold text-white hover:text-yellow-600 tracking-widest transition-colors font-oswald"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <button className="bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-3 px-8 uppercase tracking-widest text-lg transition-colors clip-path-button font-oswald">
                    Comprar
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
