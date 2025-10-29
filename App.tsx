
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Simulator from './components/Simulator';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Simulator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
