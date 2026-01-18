import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Offers from './components/offers';
import Gallery from './components/gallery';
import Testimonials from './components/Testimonials'; // Folder structure ke hisaab se sahi path
import Contact from './components/Contact'; // Note: Capital 'C' zaroori hai
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;