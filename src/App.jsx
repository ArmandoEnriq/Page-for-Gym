import Layout from './components/Layout';
import Hero from './components/Hero';
import SectionInstalaciones from './components/SectionInstalaciones';
import SectionAreas from './components/SectionAreas';
import SectionRedes from './components/SectionRedes';
import LocationSection from './components/LocationSection';
import PurchaseSection from './components/PurchaseSection';
import SpecialistSection from './components/SpecialistSection';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <div id="inicio">
        <Hero />
      </div>

      <div id="instalaciones">
        <SectionInstalaciones />
      </div>
      <SectionAreas />

      <div id="redes">
        <SectionRedes />
      </div>
      

      <div id="ubicaciones">
        <LocationSection />
      </div>

      <div id="planes">
        <PurchaseSection />
      </div>

      <div id="especialistas">
        <SpecialistSection />
      </div>

      <div id="contactanos">
          <Footer />
      </div>
    </Layout>
  );
}

export default App;
