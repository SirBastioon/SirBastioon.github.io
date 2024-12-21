import React from 'react';
import Header from './components/Header';
import SectionHero from './components/SectionHero';
import SectionWorks from './components/SectionWorks';
import SectionCompany from './components/SectionCompany';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-black font-sans overflow-x-hidden">
      <Header />
      <main>
        <SectionHero />
        <SectionWorks />
        <SectionCompany />
        <SectionContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
