// src/components/Services.jsx
import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '✨', count: 8 },
    { id: 'exterior', name: 'Exterior', icon: '🚗', count: 4 },
    { id: 'interior', name: 'Interior', icon: '🛋️', count: 2 },
    { id: 'premium', name: 'Premium', icon: '⭐', count: 2 }
  ];

  const services = [
    {
      id: 1,
      category: 'exterior',
      icon: '🧼',
      title: "Premium Foam Wash",
      description: "Deep cleaning with rich, lubricating foam that gently lifts dirt without scratching your car's paint",
      fullDescription: "Our signature foam wash uses pH-balanced foam that encapsulates dirt particles and lifts them away from the surface. This ensures a scratch-free clean while preserving your car's wax coating.",
      price: "₹499",
      originalPrice: "₹699",
      time: "45-60 min",
      features: ["Rich Foam Application", "Tire & Wheel Cleaning", "Exterior Polish", "Windows Cleaning", "Underbody Rinse", "Spot-free Drying"],
      popular: true,
      badge: "MOST POPULAR",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      category: 'exterior',
      icon: '💦',
      title: "Touchless Laser Wash",
      description: "Advanced touch-free technology using laser-guided high-pressure jets for ultimate paint protection",
      fullDescription: "Our touchless system uses laser sensors to map your vehicle's contours and clean with precision. High-pressure jets remove dirt without any physical contact, preserving your paint and clear coat.",
      price: "₹599",
      originalPrice: "₹799",
      time: "30-45 min",
      features: ["Laser-guided Cleaning", "High-pressure Wash", "Paint Protection", "Spot-free Rinse", "Ceramic Coating Ready"],
      popular: false,
      badge: "ADVANCED TECH",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      category: 'interior',
      icon: '🛋️',
      title: "Interior Deep Clean",
      description: "Complete interior vacuuming, shampooing, and conditioning for a fresh, like-new cabin",
      fullDescription: "We deep clean every inch of your interior using professional-grade equipment. From shampooing carpets to conditioning leather and cleaning air vents, we restore your cabin to showroom condition.",
      price: "₹799",
      originalPrice: "₹999",
      time: "60-75 min",
      features: ["Deep Vacuuming", "Fabric Shampoo", "Leather Conditioning", "Dashboard Polish", "AC Vent Cleaning", "Odor Elimination"],
      popular: true,
      badge: "BEST SELLER",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      category: 'premium',
      icon: '✨',
      title: "Diamond Detailing",
      description: "Showroom-quality detailing with paint correction, ceramic coating, and interior rejuvenation",
      fullDescription: "Our premium detailing service includes paint correction to remove swirl marks, ceramic coating for long-lasting protection, and complete interior rejuvenation. Your car will look better than the day you bought it.",
      price: "₹2,499",
      originalPrice: "₹3,499",
      time: "3-4 hours",
      features: ["Paint Correction", "Ceramic Coating", "Engine Bay Clean", "Interior Detailing", "Glass Treatment", "1 Year Protection"],
      popular: false,
      badge: "PREMIUM",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      category: 'exterior',
      icon: '🫧',
      title: "Shampoo & Upholstery",
      description: "Deep shampoo cleaning for seats, carpets, and upholstery with stain removal technology",
      fullDescription: "Using industrial-grade shampoo machines and eco-friendly cleaning solutions, we remove even the toughest stains from your car's interior. Special attention to high-traffic areas and stubborn spots.",
      price: "₹899",
      originalPrice: "₹1,199",
      time: "75-90 min",
      features: ["Stain Removal", "Fabric Protection", "Odor Neutralization", "Steam Cleaning", "Quick Drying", "Anti-bacterial Treatment"],
      popular: false,
      badge: "DEEP CLEAN",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      category: 'premium',
      icon: '🔧',
      title: "Repair & Revive Package",
      description: "Minor repairs combined with comprehensive cleaning for complete vehicle rejuvenation",
      fullDescription: "This all-in-one package addresses minor cosmetic issues like scratches and dents while giving your car a thorough cleaning inside and out. Perfect for pre-sale preparation or annual maintenance.",
      price: "₹1,999",
      originalPrice: "₹2,999",
      time: "4-5 hours",
      features: ["Minor Scratch Repair", "Dent Removal", "Full Exterior Wash", "Interior Detailing", "Headlight Restoration", "Paint Touch-up"],
      popular: false,
      badge: "COMPLETE CARE",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=400&fit=crop"
    },
    {
      id: 7,
      category: 'exterior',
      icon: '⚡',
      title: "Express Wash",
      description: "Quick and efficient exterior cleaning for busy individuals who need their car cleaned fast",
      fullDescription: "Perfect for regular maintenance, our express wash delivers quality cleaning in record time. We focus on the essentials to keep your car looking great between detailed cleanings.",
      price: "₹299",
      originalPrice: "₹499",
      time: "20-25 min",
      features: ["Quick Foam Wash", "Tire Clean", "Basic Dry", "Window Wipe", "Door Jambs Clean"],
      popular: true,
      badge: "QUICK & EASY",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=400&fit=crop"
    },
    {
      id: 8,
      category: 'interior',
      icon: '🌬️',
      title: "AC & Ventilation Service",
      description: "Complete AC system cleaning, disinfecting, and odor removal for fresh, clean air",
      fullDescription: "We thoroughly clean and disinfect your car's AC system, removing mold, bacteria, and odors. Includes filter replacement and system performance check for optimal cooling.",
      price: "₹599",
      originalPrice: "₹899",
      time: "45-60 min",
      features: ["AC Disinfection", "Vent Cleaning", "Filter Replacement", "Odor Removal", "Performance Check", "Air Quality Test"],
      popular: false,
      badge: "FRESH AIR",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=400&fit=crop"
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const toggleServiceDetails = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 w-full relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-float">🧼</div>
        <div className="absolute top-40 right-32 text-5xl animate-float" style={{ animationDelay: '1s' }}>💦</div>
        <div className="absolute bottom-40 left-32 text-6xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
      </div>

      <div className="w-full px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold mb-6">
              <span>🚀</span>
              Premium Car Care Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">Premium</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional car cleaning services, each designed to deliver exceptional results
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-dark shadow-2xl transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedCategory === category.id ? 'bg-dark/20' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                  service.popular ? 'border-secondary' : 'border-white hover:border-secondary'
                } overflow-hidden group`}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        service.popular 
                          ? 'bg-secondary text-dark' 
                          : 'bg-primary text-white'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-white/80 line-through">{service.originalPrice}</div>
                  </div>

                  {/* Time Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">⏱️ {service.time}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => toggleServiceDetails(service.id)}
                      className="flex-1 bg-primary hover:bg-water text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      View Details
                    </button>
                    <button className="bg-secondary hover:bg-accent text-dark py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                      Book Now
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {activeService === service.id && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl animate-fade-in">
                      <p className="text-gray-700 mb-3">{service.fullDescription}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-green-500 text-sm">✓</span>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-water rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-10 text-6xl">🚗</div>
                <div className="absolute top-10 right-20 text-5xl">✨</div>
                <div className="absolute bottom-8 left-20 text-5xl">🧼</div>
                <div className="absolute bottom-4 right-10 text-6xl">💦</div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Get a free consultation from our car care experts. We'll recommend the perfect service for your vehicle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-secondary hover:bg-accent text-dark font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl">
                    🗣️ Get Free Consultation
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-12 rounded-xl transition-all duration-300">
                    📞 Call: +91 98765 43210
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;