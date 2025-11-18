import React from "react";

const blogs = [
  {
    title: "5 Tips to Maintain Your Car's Shine",
    desc: "Learn how to keep your car looking brand new with simple maintenance tips.",
    image: "/images/blog/blog1.jpg",
    date: "Nov 2024",
  },
  {
    title: "Foam Wash vs Touchless Wash",
    desc: "Which one is better for your vehicle? We explain the differences.",
    image: "/images/blog/blog2.jpg",
    date: "Oct 2024",
  },
  {
    title: "Top 10 Bike Cleaning Tricks",
    desc: "Quick and easy ways to keep your bike clean and shiny every day.",
    image: "/images/blog/blog3.jpg",
    date: "Sep 2024",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="w-full py-20 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest <span className="text-secondary">Blog Posts</span>
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((b, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <p className="text-secondary text-sm font-medium">{b.date}</p>
                <h3 className="text-xl font-semibold mt-2">{b.title}</h3>
                <p className="text-gray-600 mt-3 text-sm">{b.desc}</p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-block mt-4 text-primary font-medium hover:text-secondary duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
