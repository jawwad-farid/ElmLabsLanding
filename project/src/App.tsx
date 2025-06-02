import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundImage from './components/BackgroundImage';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = 'Elm Labs | Coming Soon';
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundImage />
      <Header />
      <main className="flex-1 flex items-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;