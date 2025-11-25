import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-500 py-12 border-t border-gray-900">
            <div className="container mx-auto px-4 flex flex-col items-center space-y-8">

                {/* Logos */}
                <div className="flex space-x-8 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="h-12 w-32 bg-gray-800 flex items-center justify-center text-xs">CAPCOM LOGO</div>
                    <div className="h-12 w-12 bg-gray-800 flex items-center justify-center text-xs">ESRB</div>
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
                    <p>&copy; CAPCOM CO., LTD. ALL RIGHTS RESERVED.</p>
                    <p>RESIDENT EVIL is a trademark and/or registered trademark of CAPCOM CO., LTD. in the U.S. and/or other countries.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
