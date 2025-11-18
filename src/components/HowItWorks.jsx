import React from "react";

const steps = [
  {
    title: "Choose Your Vehicle",
    desc: "Select the type of vehicle you want us to clean – bike, car, van, auto, or truck.",
    icon: "/images/steps/vehicle.png",
  },
  {
    title: "Select Your Service",
    desc: "Pick from foam wash, touchless wash, shampoo wash, or repair & wash.",
    icon: "/images/steps/service.png",
  },
  {
    title: "We Clean at Your Doorstep",
    desc: "Our professional team arrives at your home and cleans your vehicle on time.",
    icon: "/images/steps/cleaning.png",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="w-full py-20 bg-white text-dark"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How <span className="text-secondary">It Works</span>
        </h2>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 mx-auto"
              />

              <h3 className="text-xl font-semibold mt-5">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
