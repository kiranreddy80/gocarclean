import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: '',
    service: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking data:', formData);
    alert('Booking request submitted! We will contact you soon.');
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Book Your Service</h2>
            <p className="text-xl opacity-90">Fill out the form and we'll reach out to confirm your booking</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-primary font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                  required
                />
              </div>
              
              <div>
                <label className="block text-primary font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                  required
                >
                  <option value="">Select Vehicle</option>
                  <option value="bike">Bike/Scooty</option>
                  <option value="car">Car</option>
                  <option value="van">Van/Auto</option>
                  <option value="truck">Truck</option>
                </select>
              </div>

              <div>
                <label className="block text-primary font-semibold mb-2">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="foam-wash">Foam Wash</option>
                  <option value="touchless-wash">Touchless Wash</option>
                  <option value="shampoo-wash">Shampoo Wash</option>
                  <option value="repair-wash">Repair & Wash</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-primary font-semibold mb-2">Service Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent text-gray-800"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-accent text-dark font-bold py-4 px-8 rounded-lg mt-6 transition-all duration-300 transform hover:scale-105"
            >
              Book Now - Get Instant Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;