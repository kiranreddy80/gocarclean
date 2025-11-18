import React, { useState } from 'react';

const SimpleLegalSections = () => {
  const [openSection, setOpenSection] = useState(null);

  const legalSections = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      points: [
        "Essential data collection for service delivery",
        "Secure storage and no unauthorized sharing",
        "Contact info used only for service communication",
        "Encrypted payment processing",
        "Data access and deletion rights",
        "Vehicle and location confidentiality",
        "Functional cookies only",
        "Regular security audits"
      ]
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      points: [
        "Booking through official channels only",
        "2-hour cancellation policy",
        "Safety protocols and property respect",
        "Customer parking and utility requirements",
        "No liability for pre-existing damages",
        "Service quality guarantee",
        "Price variation based on vehicle",
        "Periodic terms updates"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Legal Policies
        </h2>
        
        <div className="space-y-4">
          {legalSections.map((section) => (
            <div key={section.id} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{section.title}</span>
                <span className="text-xl text-orange-500">
                  {openSection === section.id ? '−' : '+'}
                </span>
              </button>
              
              {openSection === section.id && (
                <div className="p-4 border-t border-gray-300">
                  <ul className="space-y-2">
                    {section.points.map((point, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleLegalSections;