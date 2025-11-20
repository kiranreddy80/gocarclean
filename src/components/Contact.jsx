import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Available 24/7 for emergency services',
      action: 'tel:+919876543210',
      buttonText: 'Call Now'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+91 98765 43210',
      description: 'Quick responses within minutes',
      action: 'https://wa.me/919876543210',
      buttonText: 'Start Chat'
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: 'support@gocarclean.com',
      description: 'We reply within 2 hours',
      action: 'mailto:support@gocarclean.com',
      buttonText: 'Send Email'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: 'Hyderabad, Telangana',
      description: 'Multiple locations across the city',
      action: '#',
      buttonText: 'View Locations'
    }
  ];

  const serviceOptions = [
    'Select Service',
    'Foam Wash',
    'Touchless Wash',
    'Interior Cleaning',
    'Car Detailing',
    'Bike Cleaning',
    'Van/Truck Wash',
    'Repair Services',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-primary to-water relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">📞</div>
        <div className="absolute top-40 right-32 text-5xl animate-float" style={{ animationDelay: '1s' }}>💬</div>
        <div className="absolute bottom-40 left-32 text-6xl animate-float" style={{ animationDelay: '2s' }}>📧</div>
        <div className="absolute bottom-20 right-20 text-7xl animate-float" style={{ animationDelay: '1.5s' }}>📍</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold mb-6">
            <span>🚀</span>
            Get Instant Support
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have questions? Need a custom wash or repair? Our expert team is ready to assist you 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Contact Details & Methods */}
          <div className="space-y-8">
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-secondary transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                      <p className="text-white/90 font-semibold mb-1">{method.details}</p>
                      <p className="text-white/70 text-sm mb-4">{method.description}</p>
                      <a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-secondary hover:bg-accent text-dark font-semibold px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {method.buttonText}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours & Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">🕒 Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span> Monday</span>
                  <span className="font-semibold">Week-Off</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span> Tuesday - Friday</span>
                  <span className="font-semibold">4:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold">4:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Emergency Service</span>
                  <span className="font-semibold text-secondary">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-secondary mb-1">15 min</div>
                <div className="text-white/70 text-sm">Avg Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-secondary mb-1">98%</div>
                <div className="text-white/70 text-sm">Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 15 minutes</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 appearance-none"
                >
                  {serviceOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle and specific requirements..."
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-dark'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                     Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                We respect your privacy. Your information is 100% secure.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="mt-12 bg-gradient-to-r from-secondary to-accent rounded-2xl p-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-xl font-bold text-dark mb-1">🚨 Emergency Car Service Available</h3>
              <p className="text-dark/80">24/7 emergency cleaning and repair services</p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+91987654330"
                className="bg-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                📞 Call Emergency
              </a>
              <a
                href="https://wa.me/919876523210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-dark px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                💬 WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;