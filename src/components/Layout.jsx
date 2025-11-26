import Navbar from './Navbar';
import WeaponDecoration from './WeaponDecoration';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden selection:bg-red-900 selection:text-white">
            <div className="bg-noise"></div>

            <WeaponDecoration />

            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
