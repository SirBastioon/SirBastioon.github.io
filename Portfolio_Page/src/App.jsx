import React from 'react';
import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SectionCompany from './components/SectionCompany';
import SectionProjects from './components/SectionProjects';
import SectionWorks from './components/SectionWorks';
import SectionContact from './components/SectionContact';
import AirQuality from './components/AirQuality'; // Importiere die neue Komponente
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-black font-sans overflow-x-hidden">
      <Header />
      <main>
        <SectionHero />
        <SectionCompany />
        <SectionProjects />
        <SectionWorks />
        <AirQuality /> {/* Füge die neue Komponente hier ein */}
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
