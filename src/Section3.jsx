import React from 'react';
import banner2 from './assets/banner2.png';

const Section3 = () => {
  return (
    <div>
      <section className="flex flex-col items-center text-center mx-auto p-4 sm:p-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mt-8 sm:mt-12 hover:text-orange-700 transition-all">
          TRAVEL SAVVY IS HERE!
        </h1>

        <p className="text-lg sm:text-2xl text-gray-400 mt-4 mb-8 sm:mb-12">
          Discover, Explore, and Experience
        </p>

        <img
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
          src={banner2}
          alt="Travel Banner"
        />
      </section>
    </div>
  );
};

export default Section3;
