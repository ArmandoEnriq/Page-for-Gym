import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import CharacterCarousel from './components/CharacterCarousel';
import ThemeSection from './components/ThemeSection';
import TrailerSection from './components/TrailerSection';
import LocationSection from './components/LocationSection';
import PurchaseSection from './components/PurchaseSection';
import DLCSection from './components/DLCSection';
import GameplayCarousel from './components/GameplayCarousel';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />

      <CharacterCarousel />

      <ThemeSection />

      <TrailerSection />

      <ContentSection
        id="character"
        title="LEON S. KENNEDY"
        subtitle="Personajes"
        description="Tras sobrevivir al incidente de Raccoon City, Leon se convirtió en agente de los Estados Unidos. Ha madurado considerablemente tras numerosas misiones."
        image="https://via.placeholder.com/800x450/0a1a2a/ffffff?text=Leon+Image"
        reverse={true}
      />

      <LocationSection />

      <section className="relative py-20 px-4 overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-oswald">
              El Juego
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-oswald mb-6">
              ACCIÓN RENOVADA
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
              La cámara en tercera persona sobre el hombro regresa con mecánicas de acción actualizadas. Enfréntate a hordas de enemigos con un sistema de combate cuerpo a cuerpo mejorado.
            </p>
          </div>
          <GameplayCarousel />
        </div>
      </section>

      <PurchaseSection />

      <DLCSection />

      <Footer />
    </Layout>
  );
}

export default App;
