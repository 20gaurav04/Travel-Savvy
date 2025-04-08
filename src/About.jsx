import React from "react";
import logo from "./assets/a.jpg"; // Make sure this path is correct

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-orange-50 p-8">
      {/* Logo Side */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src={logo} alt="TravelSavvy Logo" className="w-60 h-60 object-cover rounded-full shadow-2xl border-4 border-orange-400" />
      </div>

      {/* Text Side */}
      <div className="md:w-1/2 text-center md:text-left px-6">
        <h2 className="text-5xl font-bold text-orange-700 mb-4">About TravelSavvy</h2>
        <p className="text-gray-700 text-lg leading-7">
          TravelSavvy is your one-stop solution for all travel needs. Whether you're looking for the best transport options, budget-friendly packages, or special offers, we've got you covered. 
          <br /> <br />
          Our mission is to make your journeys smoother, more affordable, and unforgettable. 🌍✈️
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
