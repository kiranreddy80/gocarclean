// src/components/Hero.jsx
import React, { useState } from 'react';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');

  const popularServices = [
    { name: 'Foam Wash', time: '45 min', price: '₹499', icon: '🧼' },
    { name: 'Touchless Wash', time: '30 min', price: '₹599', icon: '💦' },
    { name: 'Interior Cleaning', time: '60 min', price: '₹799', icon: '🚗' },
    { name: 'Full Detailing', time: '3 hours', price: '₹1999', icon: '✨' }
  ];

  const stats = [
    { number: '400+', label: 'Cars Cleaned', icon: '🚗' },
    { number: '4.9★', label: 'Customer Rating', icon: '⭐' },
    { number: '24/7', label: 'Service Available', icon: '⏰' },
    { number: '15 min', label: 'Quick Response', icon: '⚡' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-primary/10 w-full overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-8xl animate-float">🚗</div>
        <div className="absolute top-40 right-32 text-6xl animate-float" style={{ animationDelay: '1s' }}>🧼</div>
        <div className="absolute bottom-40 left-32 text-7xl animate-float" style={{ animationDelay: '2s' }}>💦</div>
        <div className="absolute bottom-20 right-20 text-8xl animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      <div className="w-full px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold">
                <span>🚀</span>
                India's #1 Doorstep Car Cleaning Service
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional 
                <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text"> Car Care </span>
                At Your Doorstep 
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience premium car cleaning services delivered to your location. 
                <span className="font-semibold text-primary"> Book in 60 seconds</span> and watch your car transform!
              </p>

              {/* Search Box */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Location Input */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      📍 Your Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your address or area"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-gray-50"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        📍
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      🚗 Select Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 bg-gray-50 appearance-none"
                    >
                      <option value="">Choose a service</option>
                      <option value="foam-wash">Foam Wash - ₹499</option>
                      <option value="touchless-wash">Touchless Wash - ₹599</option>
                      <option value="interior-cleaning">Interior Cleaning - ₹799</option>
                      <option value="full-detailing">Full Detailing - ₹1999</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
              
<div className="flex flex-col sm:flex-row gap-3">
  <button 
    onClick={() => {
      localStorage.setItem('selectedServiceTab', 'all');
      window.location.href = '/services';
    }}
    className="flex-1 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
  >
    <span>🚗</span>
    Book Instant Service
    <span>⚡</span>
  </button>
  <button 
    onClick={() => {
      localStorage.setItem('selectedServiceTab', 'daily');
      window.location.href = '/services';
    }}
    className="flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:from-emerald-600 hover:to-green-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
  >
    <span>📅</span>
    Daily Service Plans
  </button>
</div>

                {/* Quick Info */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    Free Inspection
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🛡️</span>
                    100% Satisfaction
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💰</span>
                    Best Price Guarantee
                  </div>
                </div>
              </div>

              {/* Popular Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">🔥 Popular Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {popularServices.map((service, index) => (
                    <div 
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-3 hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{service.icon}</span>
                        <span className="text-xs font-semibold text-primary">{service.time}</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">{service.name}</div>
                      <div className="text-secondary font-bold">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative animate-slide-up">
              {/* Main Image Container */}
              <div className="relative">
                {/* Main Car Image */}
                <div className="relative z-10">
                  <img 
                    src="/foamwash.avif" 
                    alt="Professional Car Cleaning"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <span className="text-2xl">⭐</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">4.9/5</div>
                        <div className="text-sm text-gray-500">Customer Rating</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">400+</div>
                        <div className="text-sm text-gray-500">Cars Cleaned</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-white shadow-lg"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;