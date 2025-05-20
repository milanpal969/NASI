import React from 'react';
// import heroImage from '../assets/hero.jpg';


function HeroSection() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" /* style={{ backgroundImage: `url(${heroImage})` }} */>
      <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          The National Academy of Sciences, India
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-200">
          Advancing scientific research and fostering excellence since 1930
        </p>
        <div className="mt-5 flex justify-center space-x-3">
          <a
            href="#"
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
          >
            Explore Fellowship
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-white text-gray-800 text-sm rounded hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;