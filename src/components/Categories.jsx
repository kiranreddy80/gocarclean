// src/components/Categories.jsx
import React from 'react';

const Categories = () => {
  const categories = [
    {
      icon: "🏍️",
      name: "Bikes & Scooty",
      description: "Professional cleaning for two-wheelers with special attention to detail",
      startingPrice: "₹199",
      serviceTime: "20-30 mins",
      vehicles: ["Bikes", "Scooters", "Motorcycles"]
    },
    {
      icon: "🚗",
      name: "Cars",
      description: "Complete car cleaning and detailing for all car models",
      startingPrice: "₹499",
      serviceTime: "45-60 mins",
      vehicles: ["Hatchbacks", "Sedans", "SUVs"]
    },
    {
      icon: "🚐",
      name: "Vans & Auto",
      description: "Specialized cleaning for commercial and passenger vehicles",
      startingPrice: "₹799",
      serviceTime: "60-90 mins",
      vehicles: ["Vans", "Autos", "Minivans"]
    },
    {
      icon: "🚚",
      name: "Trucks",
      description: "Heavy-duty cleaning for trucks and large commercial vehicles",
      startingPrice: "₹1299",
      serviceTime: "2-3 hours",
      vehicles: ["Pickups", "Trucks", "LORRY"]
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-water/10 w-full">
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Vehicle <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We clean all types of vehicles with specialized care and attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-secondary cursor-pointer"
              >
                <div className="text-5xl mb-4 animate-float group-hover:animate-none">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                
                <div className="mb-4">
                  {category.vehicles.map((vehicle, idx) => (
                    <span key={idx} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {vehicle}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-left">
                    <div className="text-secondary font-bold text-lg">From {category.startingPrice}</div>
                    <div className="text-gray-500 text-sm">⏱️ {category.serviceTime}</div>
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-water text-white py-2 rounded-xl font-semibold transition-all duration-300 group-hover:bg-secondary group-hover:text-dark">
                  Select Vehicle
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;