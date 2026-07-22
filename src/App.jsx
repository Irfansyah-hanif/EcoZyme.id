import React, { useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy loading komponen
const Sejarah = lazy(() => import('./components/Sejarah'));
const Steps = lazy(() => import('./components/Steps'));
const Calculator = lazy(() => import('./components/Calculator'));
const HasilEnzyme = lazy(() => import('./components/HasilEnzyme'));
const Planner = lazy(() => import('./components/Planner'));
const Timeline = lazy(() => import('./components/Timeline'));
const Tupoksi = lazy(() => import('./components/Tupoksi'));
const Troubleshooting = lazy(() => import('./components/Troubleshooting'));

const ComponentLoader = () => (
  <div className="flex justify-center items-center py-12 text-emerald-600 font-medium animate-pulse">
    Memuat konten...
  </div>
);

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [calcResult, setCalcResult] = useState(null);
  
  // ⚡ State terpusat untuk Tupoksi Satgas (Default: 'ketua')
  const [activeTupoksi, setActiveTupoksi] = useState('ketua');

  const handleCalculate = useCallback((data) => {
    setCalcResult(data);
  }, []);

  const handleReset = useCallback(() => {
    setCalcResult(null);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white w-full">
      {/* Header / Navbar Navigasi */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full space-y-16 md:space-y-24 pb-16">
        {/* Hero Section */}
        <section id="hero" className="w-full">
          <Hero />
        </section>

        {/* Dynamic Lazy Loaded Sections */}
        <Suspense fallback={<ComponentLoader />}>
          <section id="sejarah" className="w-full">
            <Sejarah />
          </section>

          <section id="panduan" className="w-full">
            <Steps activeStep={activeStep} setActiveStep={setActiveStep} />
          </section>

          <section id="kalkulator" className="w-full space-y-8">
            <Calculator onCalculate={handleCalculate} onReset={handleReset} />
            {calcResult && <HasilEnzyme data={calcResult} />}
          </section>

          <section id="planner" className="w-full">
            <Planner />
          </section>

          <section id="timeline" className="w-full">
            <Timeline />
          </section>

          {/* ⚡ Oper Props activeTupoksi dan setActiveTupoksi di sini */}
          <section id="struktur" className="w-full">
            <Tupoksi 
              activeTupoksi={activeTupoksi} 
              setActiveTupoksi={setActiveTupoksi} 
            />
          </section>

          <section id="troubleshooting" className="w-full">
            <Troubleshooting />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}