import React from 'react';
import banner1 from './assets/banner.png';

import bg from './assets/bg.jpg'; // background image

const Section1 = () => {
  return (
    <div
      className="p-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="flex flex-col items-center justify-center text-center">

      <img
  className="w-full h-96 sm:h-80 md:h-96 object-contain"
  src={banner1}
  alt="Travel Banner"
/>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-8 m-2 px-4 py-2 bg-black  text-orange-500 rounded-sm transition duration-300 hover:scale-110 hover:text-yellow-400">
          TRAVEL SAVVY IS HERE!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl bg-white text-gray-800 mb-8 px-4 py-2  font-extrabold  bg-whites">
          Discover, Explore, and Experience
        </p>
      </section>

     
    </div>
  );
};

export default Section1;
