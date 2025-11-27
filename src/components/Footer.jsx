import React from "react";
import {
  FaCar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaCar className="text-secondary text-3xl" />
              <h2 className="text-2xl font-extrabold tracking-wide">
                Go<span className="text-secondary">Car</span>Clean
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Premium doorstep car wash & detailing service.  
              Expert care delivered right to your home.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              {[FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-gray-400 hover:text-secondary text-xl cursor-pointer transition-all duration-300 hover:scale-110"
                />
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700 h-48">
             <iframe
src="https://www.google.com/maps?q=17.45894,78.4240649&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
 ></iframe>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Categories", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-secondary transition-all duration-300 hover:pl-1 block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Foam Wash",
                "Touchless Wash",
                "Interior Cleaning",
                "Car Detailing",
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-secondary transition-all duration-300 hover:pl-1 block"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-secondary" />
                <span className="text-gray-300">+91 80748 85168</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-secondary" />
                <span className="text-gray-300">support@gocarclean.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-secondary" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 GoCarClean. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Legal"].map((item) => (
              <a
                key={item}
                href="#legal"
                className="text-gray-400 hover:text-secondary text-sm transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
