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
import ScrollCar from "./components/ScrollCar";
import Testimonials from './components/Testimonials';
import DownloadApp from './components/Download';
import Footer from './components/Footer';
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <Categories />
     <DownloadApp />
    <ScrollCar />
      <Testimonials />
      <Contact />
      <LegalSections /> 
      <Footer />  
    </div>
  );
}

export default App;