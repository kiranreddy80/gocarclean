import React, { useState, useRef, useEffect } from 'react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      vehicle: "Honda City",
      service: "Premium Foam Wash",
      rating: 5,
      comment: "Absolutely amazing service! The team came to my office parking and transformed my car in under an hour. The attention to detail was incredible - they even cleaned the door jambs and tire walls. My car hasn't looked this good since I bought it!",
      image: "👨‍💼",
      location: "Gachibowli, Hyderabad",
      date: "2 days ago",
      beforeAfter: {
        before: "Car was covered in dust and bird droppings",
        after: "Looks like it just came from showroom"
      }
    },
    {
      name: "Priya Sharma",
      vehicle: "Activa Scooty",
      service: "Express Wash & Polish",
      rating: 5,
      comment: "As a working professional, I never have time for car cleaning. Go Car Clean has been a lifesaver! They come to my apartment while I'm working, and my scooter is sparkling clean when I need to leave. The polish applied makes the white color pop!",
      image: "👩‍💼",
      location: "HITEC City, Hyderabad",
      date: "1 week ago",
      beforeAfter: {
        before: "Mud stains from daily commute",
        after: "Spotless with protective coating"
      }
    },
    {
      name: "Suresh Malhotra",
      vehicle: "Royal Enfield Classic 350",
      service: "Premium Bike Cleaning",
      rating: 5,
      comment: "Being a bike enthusiast, I'm very particular about my Classic 350's maintenance. The team treated my bike with so much care! They cleaned the chain, polished the chrome, and even dressed the tires. My bike has never looked better!",
      image: "👨‍🔧",
      location: "Secunderabad",
      date: "5 days ago",
      beforeAfter: {
        before: "Chain grease, road grime buildup",
        after: "Chrome shining, tires looking new"
      }
    },
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating", icon: "⭐" },
    { number: "2,500+", label: "Happy Customers", icon: "😊" },
    { number: "98%", label: "Satisfaction Rate", icon: "🎯" },
    { number: "15 min", label: "Avg Response Time", icon: "⚡" }
  ];

  // Intersection Observer for lazy loading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    // Observe all testimonial cards
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', index);
        observer.observe(ref);
      }
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const StarRating = ({ rating, isHovered }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`text-lg ${i < rating ? (isHovered ? 'text-orange-400' : 'text-yellow-400') : (isHovered ? 'text-orange-200' : 'text-gray-300')}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl animate-float">⭐</div>
        <div className="absolute top-40 right-32 text-5xl animate-float" style={{ animationDelay: '1s' }}>😊</div>
        <div className="absolute bottom-40 left-32 text-6xl animate-float" style={{ animationDelay: '2s' }}>🎯</div>
        <div className="absolute bottom-20 right-20 text-7xl animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold mb-6">
            <span>💫</span>
            Loved by Vehicle Owners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-secondary">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid with Lazy Loading Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } border-2 overflow-hidden group cursor-pointer ${
                hoveredCard === index 
                  ? 'border-secondary bg-primary scale-105' 
                  : 'border-white bg-white'
              }`}
              style={{
                transitionDelay: visibleCards.includes(index) ? `${index * 150}ms` : '0ms'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Content Container */}
              <div className="relative z-10 h-full">
                
                {/* Testimonial Header */}
                <div className={`p-6 border-b transition-all duration-500 ${
                  hoveredCard === index ? 'border-orange-300' : 'border-gray-100'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`text-3xl rounded-full w-12 h-12 flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index 
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : 'bg-gradient-to-br from-primary to-water text-white'
                      }`}>
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-200' : 'text-gray-900'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-100' : 'text-gray-500'
                        }`}>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs transition-colors duration-500 ${
                        hoveredCard === index ? 'text-orange-200' : 'text-gray-500'
                      }`}>
                        {testimonial.date}
                      </div>
                      <StarRating rating={testimonial.rating} isHovered={hoveredCard === index} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className={`font-semibold transition-colors duration-500 ${
                      hoveredCard === index ? 'text-orange-300' : 'text-primary'
                    }`}>
                      {testimonial.vehicle}
                    </span>
                    <span className={`transition-colors duration-500 ${
                      hoveredCard === index ? 'text-orange-200' : 'text-gray-600'
                    }`}>•</span>
                    <span className={`transition-colors duration-500 ${
                      hoveredCard === index ? 'text-orange-200' : 'text-gray-600'
                    }`}>
                      {testimonial.service}
                    </span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-6">
                  <p className={`leading-relaxed mb-4 italic transition-colors duration-500 ${
                    hoveredCard === index ? 'text-orange-50' : 'text-gray-700'
                  }`}>
                    "{testimonial.comment}"
                  </p>

                  {/* Before/After Highlights */}
                  <div className={`rounded-xl p-4 mb-4 transition-all duration-500 ${
                    hoveredCard === index 
                      ? 'bg-orange-500/30 border border-orange-400/50' 
                      : 'bg-gray-50'
                  }`}>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className={`font-semibold mb-1 transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-300' : 'text-red-500'
                        }`}>
                          Before:
                        </div>
                        <div className={`transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-100' : 'text-gray-600'
                        }`}>
                          {testimonial.beforeAfter.before}
                        </div>
                      </div>
                      <div>
                        <div className={`font-semibold mb-1 transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-300' : 'text-green-500'
                        }`}>
                          After:
                        </div>
                        <div className={`transition-colors duration-500 ${
                          hoveredCard === index ? 'text-orange-100' : 'text-gray-600'
                        }`}>
                          {testimonial.beforeAfter.after}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className={`flex items-center gap-2 text-xs transition-colors duration-500 ${
                    hoveredCard === index ? 'text-orange-200' : 'text-gray-500'
                  }`}>
                    <span className={`transition-colors duration-500 ${
                      hoveredCard === index ? 'text-orange-300' : 'text-green-500'
                    }`}>✓</span>
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-700 ${
                hoveredCard === index 
                  ? 'opacity-100 translate-x-full' 
                  : 'opacity-0 -translate-x-full'
              }`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;