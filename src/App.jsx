import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Publications from './components/Publications';
import InteractiveDemos from './components/InteractiveDemos';
import Experience from './components/Experience';
import Skills from './components/Skills';
import References from './components/References';
import Footer from './components/Footer';
import BibtexModal from './components/BibtexModal';
import DeployModal from './components/DeployModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedBibtexItem, setSelectedBibtexItem] = useState(null);
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const handleDownloadCV = () => {
    // Generate/print CV or prompt user
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header */}
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Content Areas */}
      <main className="flex-grow space-y-4">
        <Hero onDownloadCV={handleDownloadCV} />
        <Statement />
        <Publications onOpenBibtex={(item) => setSelectedBibtexItem(item)} />
        <InteractiveDemos />
        <Experience />
        <Skills />
        <References />
      </main>

      {/* Footer */}
      <Footer onOpenDeployGuide={() => setDeployModalOpen(true)} />

      {/* BibTeX Citation Modal */}
      {selectedBibtexItem && (
        <BibtexModal
          manuscript={selectedBibtexItem}
          onClose={() => setSelectedBibtexItem(null)}
        />
      )}

      {/* GitHub Pages Deploy Guide Modal */}
      {deployModalOpen && (
        <DeployModal onClose={() => setDeployModalOpen(false)} />
      )}

    </div>
  );
}
