import React, { useState } from "react";

import airTransport from "./assets/air.jpg";
import railTransport from "./assets/rail.jpg";
import roadTransport from "./assets/road.jpg";

const ModesOfTransport = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTransport, setSelectedTransport] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTransportSelect = (mode) => {
    setSelectedTransport(mode);
    setShowResults(false);
  };

  const handleSearch = () => {
    if (selectedTransport && selectedCategory) {
      setShowResults(true);
    } else {
      alert("Please select both transport mode and category!");
    }
  };

  const renderResults = () => {
    if (selectedTransport === "Air") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Flight 101 - New York to London</li>
          <li>Flight 205 - Delhi to Dubai</li>
          <li>Flight 330 - Tokyo to Sydney</li>
        </ul>
      );
    } else if (selectedTransport === "Rail") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Express Train A - Mumbai to Goa</li>
          <li>Superfast B - Paris to Berlin</li>
          <li>Regional C - New York to Boston</li>
        </ul>
      );
    } else if (selectedTransport === "Road") {
      return (
        <ul className="list-disc pl-5 text-left">
          <li>Bus 500 - Los Angeles to San Francisco</li>
          <li>Volvo AC - Delhi to Manali</li>
          <li>Night Coach - Rome to Venice</li>
        </ul>
      );
    } else {
      return <p>No results available.</p>;
    }
  };

  return (
    <div id="bookings" className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-600">Modes of Transport</h1>

      {/* Transport Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          onClick={() => handleTransportSelect("Air")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Air" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={airTransport} alt="Air Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Air</p>
        </div>

        <div
          onClick={() => handleTransportSelect("Rail")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Rail" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={railTransport} alt="Rail Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Rail</p>
        </div>

        <div
          onClick={() => handleTransportSelect("Road")}
          className={`cursor-pointer transform hover:scale-105 transition duration-300 rounded-lg overflow-hidden shadow ${
            selectedTransport === "Road" ? "ring-4 ring-orange-500" : ""
          }`}
        >
          <img src={roadTransport} alt="Road Transport" className="h-40 w-40 object-cover" />
          <p className="text-center mt-2 font-medium text-orange-700">Road</p>
        </div>
      </div>

      {/* Budget / Special Category Buttons */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => handleCategorySelect("Budget")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            selectedCategory === "Budget" ? "bg-orange-500 text-white" : "bg-white border border-orange-400 text-orange-500"
          }`}
        >
          Budget Category
        </button>

        <button
          onClick={() => handleCategorySelect("Special")}
          className={`px-6 py-3 rounded-lg font-semibold ${
            selectedCategory === "Special" ? "bg-orange-500 text-white" : "bg-white border border-orange-400 text-orange-500"
          }`}
        >
          Special Offers
        </button>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="mt-4 px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
      >
        Search
      </button>

      {/* Show Selected */}
      <div className="mt-6 text-xl font-bold text-center text-orange-600">
        {selectedTransport && <div>Selected Transport: {selectedTransport}</div>}
        {selectedCategory && <div>Selected Category: {selectedCategory}</div>}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Available Options:</h2>
          {renderResults()}
        </div>
      )}
    </div>
  );
};

export default ModesOfTransport;
