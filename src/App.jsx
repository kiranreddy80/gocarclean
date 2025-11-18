// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Import components normally for now (we'll set up proper code splitting later)
import Services from './components/Services';
import Categories from './components/Categories';
import ServiceGallery from './components/ServiceGallery';
import LegalSections from './components/Terms'; // Add this import

import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Categories />
     
    
      <Testimonials />
      <Contact />
      <LegalSections /> {/* Add this line */}
      <Footer />
    </div>
  );
}

export default App;