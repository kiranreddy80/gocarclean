import React from 'react';
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCar className="text-secondary text-2xl" />
              <span className="text-xl font-bold">Go Car Clean</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional doorstep car cleaning and detailing services. We bring the car wash to you!
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
              <FaTwitter className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
              <FaInstagram className="text-gray-400 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-secondary transition-colors">Categories</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Foam Wash</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Touchless Wash</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Shampoo Wash</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Vans Repair & Wash</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <span className="text-gray-400">info@gocarclean.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-gray-400">Your City, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Go Car Clean. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
              <a href="#legal" className="text-gray-400 hover:text-secondary text-sm transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;