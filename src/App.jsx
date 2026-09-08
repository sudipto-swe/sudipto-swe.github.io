import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Publications from './components/Publications';
import Visualizer from './components/Visualizer';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { cvData } from './data/cvData';

function App() {
  const handleDownloadCV = () => {
    // We assume the CV PDF will be in the public directory
    const link = document.createElement('a');
    link.href = '/Sudipto_Biswas_CV.pdf';
    link.download = 'Sudipto_Biswas_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onDownloadCV={handleDownloadCV} />
      
      <main style={{ flex: 1 }}>
        <Hero onDownloadCV={handleDownloadCV} />
        
        <Statement />
        
        <Publications />
        
        <Visualizer />
        
        <Experience />
        
        <Skills />
      </main>

      <Footer />
    </div>
  );
}

export default App;
