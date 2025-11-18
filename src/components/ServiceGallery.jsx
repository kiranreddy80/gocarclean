// src/components/ServiceGallery.jsx
import React, { useState } from 'react';

const ServiceGallery = () => {
  const [selectedService, setSelectedService] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '✨' },
    { id: 'foam', name: 'Foam Wash', icon: '🧼' },
    { id: 'touchless', name: 'Touchless Wash', icon: '💦' },
    { id: 'interior', name: 'Interior Cleaning', icon: '🚗' },
    { id: 'detailing', name: 'Car Detailing', icon: '🔍' },
    { id: 'shampoo', name: 'Shampoo Wash', icon: '🫧' },
    { id: 'repair', name: 'Repair & Wash', icon: '🔧' }
  ];

  const serviceImages = [
    {
      id: 1,
      category: 'foam',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      title: "Premium Foam Wash",
      description: "Deep cleaning with rich foam that lifts dirt without scratching",
      features: ["Rich Foam Application", "Tire Cleaning", "Exterior Polish", "Rinse & Dry"],
      time: "45 minutes",
      price: "Starting at ₹499"
    },
    {
      id: 2,
      category: 'touchless',
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop",
      title: "Touchless Car Wash",
      description: "Advanced touch-free technology for paint protection",
      features: ["Touch-free Technology", "High-pressure Wash", "Paint Protection", "Spot-free Rinse"],
      time: "30 minutes",
      price: "Starting at ₹599"
    },
    {
      id: 3,
      category: 'interior',
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
      title: "Interior Deep Cleaning",
      description: "Complete interior vacuuming and surface cleaning",
      features: ["Vacuum Cleaning", "Dashboard Wipe", "Window Cleaning", "Odor Removal"],
      time: "60 minutes",
      price: "Starting at ₹799"
    },
    {
      id: 4,
      category: 'detailing',
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=400&fit=crop",
      title: "Full Car Detailing",
      description: "Showroom-quality detailing inside and out",
      features: ["Paint Correction", "Interior Detailing", "Wax Application", "Engine Bay Clean"],
      time: "3 hours",
      price: "Starting at ₹1999"
    },
    {
      id: 5,
      category: 'shampoo',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      title: "Shampoo & Upholstery",
      description: "Deep shampoo cleaning for seats and carpets",
      features: ["Fabric Shampoo", "Stain Removal", "Leather Conditioning", "Carpet Deep Clean"],
      time: "90 minutes",
      price: "Starting at ₹1299"
    },
    {
      id: 6,
      category: 'repair',
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      title: "Repair & Comprehensive Wash",
      description: "Minor repairs followed by complete cleaning",
      features: ["Minor Scratch Repair", "Dent Removal", "Full exterior Wash", "Interior Cleaning"],
      time: "2 hours",
      price: "Starting at ₹2499"
    },
    {
      id: 7,
      category: 'foam',
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      title: "Express Foam Wash",
      description: "Quick and efficient foam cleaning service",
      features: ["Quick Foam Wash", "Tire Clean", "Basic Dry", "Window Wipe"],
      time: "25 minutes",
      price: "Starting at ₹299"
    },
    {
      id: 8,
      category: 'touchless',
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop",
      title: "Premium Touchless",
      description: "Advanced touchless with ceramic coating",
      features: ["Ceramic Coating", "Water Spot Prevention", "Paint Protection", "Gloss Enhancement"],
      time: "45 minutes",
      price: "Starting at ₹899"
    },
    {
      id: 9,
      category: 'interior',
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
      title: "Interior Detailing",
      description: "Complete interior restoration and cleaning",
      features: ["Deep Vacuum", "Fabric Protection", "Leather Treatment", "AC Vent Cleaning"],
      time: "2 hours",
      price: "Starting at ₹1599"
    }
  ];

  const filteredImages = selectedService === 'all' 
    ? serviceImages 
    : serviceImages.filter(img => img.category === selectedService);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white to-gray-50 w-full">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our <span className="text-secondary">Services</span> Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our premium car cleaning and detailing services with professional results
            </p>
            
            {/* Service Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {serviceCategories.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-secondary text-dark shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                  }`}
                >
                  <span className="text-lg">{service.icon}</span>
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                onClick={() => openModal(service)}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Service Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {serviceCategories.find(cat => cat.id === service.category)?.name}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl mb-2">👁️</div>
                      <div className="font-bold text-lg">View Details</div>
                      <div className="text-sm opacity-90">Click to learn more</div>
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>⏱️</span>
                      <span>{service.time}</span>
                    </div>
                    <div className="text-secondary font-bold text-lg">{service.price}</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold text-sm">View Details →</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add booking logic here
                      }}
                      className="bg-primary hover:bg-water text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try selecting a different service category</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary to-water rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-10 text-4xl">🚗</div>
              <div className="absolute top-10 right-20 text-3xl">🧼</div>
              <div className="absolute bottom-8 left-20 text-3xl">💦</div>
              <div className="absolute bottom-4 right-10 text-4xl">✨</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Premium Car Care?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Book your service today and give your vehicle the professional treatment it deserves
              </p>
              <button className="bg-secondary hover:bg-accent text-dark font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl">
                🚗 Book Your Service Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-scroll">
            <div className="relative">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              >
                ✕
              </button>
              
              {/* Service Image */}
              <div className="relative h-80">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="text-3xl font-bold mb-2">{selectedImage.title}</div>
                  <div className="text-lg opacity-90">{selectedImage.description}</div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-8">
                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-primary/10 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="font-bold text-primary">Service Time</div>
                    <div className="text-gray-600">{selectedImage.time}</div>
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <div className="font-bold text-primary">Starting Price</div>
                    <div className="text-gray-600">{selectedImage.price}</div>
                  </div>
                  <div className="bg-water/10 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🚗</div>
                    <div className="font-bold text-primary">Service Type</div>
                    <div className="text-gray-600">
                      {serviceCategories.find(cat => cat.id === selectedImage.category)?.name}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-primary mb-4">Service Includes:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedImage.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-secondary hover:bg-accent text-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
                    🚗 Book This Service
                  </button>
                  <button className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                    📞 Call for Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceGallery;