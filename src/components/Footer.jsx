import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
            <div className="container mx-auto px-4 flex flex-col items-center space-y-8">

                {/* Logos */}
                <div className="flex space-x-8 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-12 w-32 bg-gray-800 flex items-center justify-center text-xs">StrongFit Studio</div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                    <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
                    <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Soporte</a>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs space-y-2">
                    <p>&copy; StongFit CO., LTD. ALL RIGHTS RESERVED.</p>
                    <p>Helaborado por Armando Enriquez para mostrar el uso de React y Tailwind.</p>
                    <p>StrongFit Studio es una marca inventada no esta asociada con ninguna empresa.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
