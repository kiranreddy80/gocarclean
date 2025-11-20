import React from "react";

const DownloadAppSection = () => {
  return (
    <section className="w-full bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Download Our GoCarClean App
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
          Book car wash services instantly, track your order, view service
          history, and access exclusive offers — all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">

          {/* Google Play */}
         {/* Play Store */}
<a
  href="#"
  className="bg-secondary text-primary font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md hover:bg-accent transition-all"
>
  <img
    src="/playstore.svg"
    alt="Play Store"
    className="w-40 h-auto"
  />
</a>

{/* App Store */}
<a
  href="#"
  className="bg-white text-primary font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md hover:bg-gray-200 transition-all"
>
  <img
    src="/Appstore.svg"
    alt="App Store"
    className="w-40 h-auto"
  />
</a>


        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
